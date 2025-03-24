import {
  type NexusAccount,
  type NexusClient,
  createSmartAccountClient,
  toNexusAccount,
} from "@biconomy/abstractjs";
import {
  encodeValidatorNonce,
  getAccount,
  getWebAuthnValidator,
  getWebauthnValidatorMockSignature,
  getWebauthnValidatorSignature,
} from "@rhinestone/module-sdk";
import { PublicKey } from "ox";
import { sign } from "ox/WebAuthnP256";
import { getAccountNonce } from "permissionless/actions";
import { useEffect, useState } from "react";
import { http, createPublicClient, encodeFunctionData } from "viem";
import {
  type GetPaymasterDataParameters,
  type P256Credential,
  createPaymasterClient,
  createWebAuthnCredential,
  getUserOperationHash,
} from "viem/account-abstraction";
import { toAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { AA_CONFIG } from "./config";

const {
  MOCK_ATTESTER_ADDRESS,
  NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
  BUNDLER_URL,
  MINATO_RPC,
  PAYMASTER_SERVICE_URL,
  ENTRY_POINT_ADDRESS,
  DICE_ROLL_LEDGER_ADDRESS,
} = AA_CONFIG;
const chain = soneiumMinato;
const deadOwner = toAccount({
  address: "0x000000000000000000000000000000000000dead",
  async signMessage() {
    return "0x";
  },
  async signTransaction() {
    return "0x";
  },
  async signTypedData() {
    return "0x";
  },
});

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

const paymasterClient = createPaymasterClient({
  transport: http(PAYMASTER_SERVICE_URL),
});

const scsContext = { calculateGasLimits: true, policyId: "sudo" };

export function PasskeySection({
  addLine,
  setLoadingText,
  handleErrors,
}: {
  addLine: (line: string, level?: string) => void;
  setLoadingText: (text: string) => void;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [nexusClient, setNexusClient] = useState<NexusClient>();
  const [credential, setCredential] = useState<P256Credential>(() =>
    JSON.parse(localStorage.getItem("credential") || "null"),
  );

  const initClient = async (_credential: P256Credential) => {
    const { x, y, prefix } = PublicKey.from(credential.publicKey);

    const webauthnValidator = getWebAuthnValidator({
      pubKey: { x, y, prefix },
      authenticatorId: _credential.id,
    });

    const nexusAccountInstance = await toNexusAccount({
      signer: window.ethereum,
      chain,
      transport: http(),
      attesters: [MOCK_ATTESTER_ADDRESS],
      factoryAddress: NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
      validatorAddress: webauthnValidator.address,
      validatorInitData: webauthnValidator.initData,
      index: BigInt(1000031),
    });
    const nexusClientInstance = createSmartAccountClient({
      account: nexusAccountInstance,
      transport: http(BUNDLER_URL),
      client: publicClient,

      paymaster: {
        async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
          pmDataParams.paymasterPostOpGasLimit = BigInt(100000);
          pmDataParams.paymasterVerificationGasLimit = BigInt(200000);
          pmDataParams.verificationGasLimit = BigInt(500000);
          const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
          return paymasterResponse;
        },
        async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
          const paymasterStubResponse =
            await paymasterClient.getPaymasterStubData(pmStubDataParams);
          return paymasterStubResponse;
        },
      },
      paymasterContext: scsContext,
      userOperation: {
        estimateFeesPerGas: async () => {
          return {
            maxFeePerGas: BigInt(10000000),
            maxPriorityFeePerGas: BigInt(10000000),
          };
        },
      },
    });
    console.log("Account: ", nexusClientInstance.account.address);
    setNexusClient(nexusClientInstance);
  };

  const handleCreateCredential = async () => {
    const _credential = await createWebAuthnCredential({
      name: "Wallet Owner",
    });
    setCredential(_credential);
    localStorage.setItem(
      "credential",
      JSON.stringify({
        id: _credential.id,
        publicKey: _credential.publicKey,
      }),
    );
  };

  const handleSendUserOp = async () => {
    try {
      if (!nexusClient) {
        console.error("No nexus client");
        return;
      }
      if (!credential) {
        console.error("No credential");
        return;
      }

      const publicClient = createPublicClient({
        chain: soneiumMinato,
        transport: http(),
      });

      setLoadingText("Sending user operation...");

      const nonce = await getAccountNonce(publicClient, {
        address: nexusClient.account.address,
        entryPointAddress: ENTRY_POINT_ADDRESS,
        key: encodeValidatorNonce({
          account: getAccount({
            address: nexusClient.account.address,
            type: "nexus",
          }),
          validator: nexusClient.account.validatorAddress,
        }),
      });

      console.log("Nonce: ", nonce);

      const callData = encodeFunctionData({
        abi: DiceRollLedgerAbi,
        functionName: "writeDiceRoll",
        args: [BigInt(1)],
      });

      console.log("Calldata: ", callData);

      const userOperation = await nexusClient.prepareUserOperation({
        account: nexusClient.account,
        calls: [
          {
            to: DICE_ROLL_LEDGER_ADDRESS,
            data: callData,
          },
        ],
        nonce,
        signature: getWebauthnValidatorMockSignature(),
      });

      console.log("User op: ", userOperation);
      const userOpHashToSign = getUserOperationHash({
        chainId: soneiumMinato.id,
        entryPointAddress: ENTRY_POINT_ADDRESS,
        entryPointVersion: "0.7",
        userOperation,
      });

      console.log("user op hash: ", userOpHashToSign);

      const { metadata: webauthn, signature } = await sign({
        credentialId: credential.id,
        challenge: userOpHashToSign,
      });

      const encodedSignature = getWebauthnValidatorSignature({
        webauthn,
        signature,
        usePrecompiled: false,
      });

      console.log("encoded signature: ", encodedSignature);

      userOperation.signature = encodedSignature;

      const userOpHash = await nexusClient.sendUserOperation(userOperation);

      console.log("User op hash: ", userOpHash);
      const receipt = await nexusClient.waitForUserOperationReceipt({
        hash: userOpHash,
      });
      console.log("UserOp receipt: ", receipt);
      setLoadingText("");
    } catch (error) {
      handleErrors(error as Error, "Error sending user operation");
      setLoadingText("");
    }
  };

  return (
    <div>
      <h2>Passkey</h2>
      <div>
        <button type="button" onClick={handleCreateCredential}>
          Create credential
        </button>
      </div>
      <div>
        <button type="button" onClick={() => initClient(credential)}>
          Init client
        </button>
      </div>
      <div>
        <button type="button" onClick={handleSendUserOp}>
          Send userOp
        </button>
      </div>
    </div>
  );
}
