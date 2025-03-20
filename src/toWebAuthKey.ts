import { Buffer } from "buffer";
import type { PublicKeyCredentialRequestOptionsJSON } from "@simplewebauthn/types";
import { type Hex, type SignableMessage, concatHex, keccak256, pad, toHex } from "viem";

export const b64ToBytes = (base64: string): Uint8Array => {
  const paddedBase64 = base64
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binString = atob(paddedBase64);
  return Uint8Array.from(binString, (m) => m.codePointAt(0) ?? 0);
};

export const uint8ArrayToHexString = (array: Uint8Array): `0x${string}` => {
  return `0x${Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  )}` as `0x${string}`;
};

export enum WebAuthnMode {
  Register = "register",
  Login = "login",
}

export type WebAuthnKey = {
  pubX: bigint;
  pubY: bigint;
  authenticatorId: string;
  authenticatorIdHash: Hex;
  rpID: string;
  signMessageCallback?: (
    message: SignableMessage,
    rpId: string,
    chainId: number,
    allowCredentials?: PublicKeyCredentialRequestOptionsJSON["allowCredentials"],
  ) => Promise<Hex>;
};

interface BaseParams {
  mode?: WebAuthnMode;
  credentials?: RequestCredentials;
  passkeyServerHeaders?: Record<string, string>;
  useRN?: boolean;
}

export interface ParamsWithKey extends BaseParams {
  webAuthnKey: WebAuthnKey;
  rpID: string;
  passkeyName?: string;
  passkeyServerUrl?: string;
}

export interface ParamsWithoutKey extends BaseParams {
  webAuthnKey?: undefined;
  rpID?: string;
  passkeyName: string;
  passkeyServerUrl: string;
}

export type WebAuthnAccountParams = ParamsWithKey | ParamsWithoutKey;

export const encodeWebAuthnPubKey = (pubKey: WebAuthnKey) => {
  return concatHex([
    toHex(pubKey.pubX, { size: 32 }),
    toHex(pubKey.pubY, { size: 32 }),
    pad(pubKey.authenticatorIdHash, { size: 32 }),
  ]);
};

export const toWebAuthnKey = async ({
  webAuthnKey,
  rpID,
  passkeyName,
  passkeyServerUrl,
  mode = WebAuthnMode.Register,
  credentials = "include",
  passkeyServerHeaders = {},
}: WebAuthnAccountParams): Promise<WebAuthnKey> => {
  if (webAuthnKey) {
    return webAuthnKey;
  }
  let pubKey: string | undefined;
  let authenticatorId: string | undefined;

  if (mode === WebAuthnMode.Login) {
    // Get login options
    const loginOptionsResponse = await fetch(
      `${passkeyServerUrl}/generate-authentication-options`,
      {
        method: "GET",
        credentials,
      },
    );
    const loginOptions = await loginOptionsResponse.json();

    // Start authentication (login)
    const { startAuthentication } = await import("@simplewebauthn/browser");
    const loginCred = await startAuthentication(loginOptions);

    authenticatorId = loginCred.id;

    // Verify authentication
    const loginVerifyResponse = await fetch(`${passkeyServerUrl}/verify-authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...passkeyServerHeaders,
      },
      // Send the authentication response directly.
      body: JSON.stringify(loginCred),
      credentials,
    });

    const loginVerifyResult = await loginVerifyResponse.json();

    if (!loginVerifyResult.verification.verified) {
      throw new Error("Login not verified");
    }
    // Import the key
    pubKey = loginVerifyResult.pubkey; // Uint8Array pubkey
  } else {
    // Get registration options
    const registerOptionsResponse = await fetch(
      `${passkeyServerUrl}/generate-registration-options`,
      {
        method: "GET", // or omit method, since GET is default
        credentials,
      },
    );
    const registerOptions = await registerOptionsResponse.json();

    // Start registration
    const { startRegistration } = await import("@simplewebauthn/browser");
    console.log("registerOptions", registerOptions);
    const registerCred = await startRegistration(registerOptions);

    console.log("registerCred", registerCred);
    authenticatorId = registerCred.id;

    // Verify registration
    const registerVerifyResponse = await fetch(`${passkeyServerUrl}/verify-registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...passkeyServerHeaders,
      },
      // Send the registration response (PublicKeyCredential object) directly.
      body: JSON.stringify(registerCred),
      credentials,
    });

    const registerVerifyResult = await registerVerifyResponse.json();
    if (!registerVerifyResult.verified) {
      throw new Error("Registration not verified");
    }

    // Import the key
    pubKey = registerCred.response.publicKey;
  }

  if (!pubKey) {
    throw new Error("No public key returned from registration credential");
  }
  if (!authenticatorId) {
    throw new Error("No authenticator id returned from registration credential");
  }

  const authenticatorIdHash = keccak256(uint8ArrayToHexString(b64ToBytes(authenticatorId)));
  const spkiDer = Buffer.from(pubKey, "base64");
  const key = await crypto.subtle.importKey(
    "spki",
    spkiDer,
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["verify"],
  );

  // Export the key to the raw format
  const rawKey = await crypto.subtle.exportKey("raw", key);
  const rawKeyBuffer = Buffer.from(rawKey);

  // The first byte is 0x04 (uncompressed), followed by x and y coordinates (32 bytes each for P-256)
  const pubKeyX = rawKeyBuffer.subarray(1, 33).toString("hex");
  const pubKeyY = rawKeyBuffer.subarray(33).toString("hex");

  return {
    pubX: BigInt(`0x${pubKeyX}`),
    pubY: BigInt(`0x${pubKeyY}`),
    authenticatorId,
    authenticatorIdHash,
    rpID: "", // unused because we don't need it for the signMessageCallback
  };
};
