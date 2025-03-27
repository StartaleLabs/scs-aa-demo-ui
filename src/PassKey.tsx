import { type Module, type NexusClient, moduleActivator } from "@biconomy/abstractjs";
import {
  type WebAuthnKey,
  WebAuthnMode,
  toPasskeyValidator,
  toWebAuthnKey,
} from "@biconomy/passkey";

import { useState } from "react";
import { http, type Hex, createPublicClient, encodeFunctionData } from "viem";
import { createPaymasterClient } from "viem/account-abstraction";
import { soneiumMinato } from "viem/chains";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { AA_CONFIG } from "./config";

const { MINATO_RPC, PAYMASTER_SERVICE_URL, DICE_ROLL_LEDGER_ADDRESS } = AA_CONFIG;
const chain = soneiumMinato;


const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

const paymasterClient = createPaymasterClient({
  transport: http(PAYMASTER_SERVICE_URL),
});

const scsContext = { calculateGasLimits: true, policyId: "sudo" };

export function PasskeySection({
  nexusClient,
  addLine,
  setLoadingText,
  handleErrors,
}: {
  nexusClient: NexusClient;
  addLine: (line: string, level?: string) => void;
  setLoadingText: (text: string) => void;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [webAuthnKey, setWebAuthnKey] = useState<WebAuthnKey>(() =>
    JSON.parse(localStorage.getItem("webAuthnKey") || "null"),
  );
  const [passKeyValidator, setPassKeyValidator] = useState<any>();

  const createKey = async () => {
    const _webAuthnKey = await toWebAuthnKey({
      passkeyName: "Soneium",
      mode: WebAuthnMode.Register, // Use .Login for existing passkeys
    });

    console.log("WebAuthnKey: ", _webAuthnKey);
    const formattedWebAuthnKey = {
      pubX: _webAuthnKey.pubX.toString(),
      pubY: _webAuthnKey.pubY.toString(),
      authenticatorId: _webAuthnKey.authenticatorId,
      authenticatorIdHash: _webAuthnKey.authenticatorIdHash,
    };
    // store webAuthnKey in localStorage
    localStorage.setItem("webAuthnKey", JSON.stringify(formattedWebAuthnKey));
    console.log("WebAuthnKey: ", _webAuthnKey);
    setWebAuthnKey(_webAuthnKey);
  };


  const logIn = async () => {
    try {
      const _webAuthnKey = await toWebAuthnKey({
        mode: WebAuthnMode.Login,
      });

      const _passKeyValidator = await toPasskeyValidator({
        webAuthnKey: _webAuthnKey,
        // @ts-ignore
        account: nexusClient.account,
      });

      // @ts-ignore
      setPassKeyValidator(_passKeyValidator);
    } catch (error) {
      handleErrors(error as Error, "Error logging in");
    }
  };
  const installModule = async () => {
    try {
      console.log("WebAuthnKey: ", webAuthnKey);
      // const passKeyValidator = await toPasskeyValidator({
      //   webAuthnKey,
      //   // @ts-ignore
      //   account: nexusClient.account,
      // });
      console.log("PasskeyValidator: ", passKeyValidator);
      const userOpHash = await nexusClient.installModule({
        module: passKeyValidator,
      });

      const receipt = await nexusClient.waitForUserOperationReceipt({ hash: userOpHash as Hex });

      nexusClient.extend(moduleActivator(passKeyValidator));
      console.log("Receipt: ", receipt);
    } catch (error) {
      handleErrors(error as Error, "Error installing module");
    }
  };

  const sendUserOp = async () => {
    try {
      const extendedClient = nexusClient.extend(moduleActivator(passKeyValidator));

      const userOpHash = await extendedClient.sendUserOperation({
        callData: await nexusClient.account.encodeCalls([
          {
            to: DICE_ROLL_LEDGER_ADDRESS,
            data: encodeFunctionData({
              abi: DiceRollLedgerAbi,
              functionName: "writeDiceRoll",
              args: [BigInt(3)],
            }),
          },
        ]),
      });

      const receipt = await nexusClient.waitForUserOperationReceipt({ hash: userOpHash });

      console.log("Receipt: ", receipt);
    } catch (error) {
      handleErrors(error as Error, "Error sending user operation");
    }
  };


  return (
    <div>
      <h2>Passkey</h2>
      <div>
        <button type="button" onClick={createKey}>
          Create credential
        </button>
      </div>
      <div>
        <button type="button" onClick={logIn}>
          Log in
        </button>
      </div>
      <div>
        <button type="button" onClick={installModule}>
          Init client
        </button>
      </div>
      <div>
        <button type="button" onClick={sendUserOp}>
          Send userOp
        </button>
      </div>
    </div>
  );
}
