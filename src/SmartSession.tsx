import {
  SmartSessionMode,
  getSmartSessionsValidator,
  isSessionEnabled,
} from "@rhinestone/module-sdk";
import { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import {
  type CreateSessionDataParams,
  type SessionData,
  type StartaleAccountClient,
  createSCSPaymasterClient,
  createSmartAccountClient,
  smartSessionCreateActions,
  smartSessionUseActions,
  toSmartSessionsValidator,
  toStartaleSmartAccount,
} from "@startale-scs/aa-sdk";
import {
  type PublicClient,
  createPublicClient,
  encodeFunctionData,
  stringify,
  toFunctionSelector,
} from "viem";
import {
  createBundlerClient
} from "viem/account-abstraction";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import { http } from "wagmi";
import { Section } from "./Section";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { AA_CONFIG } from "./config";
import { gasOutput } from "./gasOutput";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";
const { MINATO_RPC, BUNDLER_URL, DICE_ROLL_LEDGER_ADDRESS } = AA_CONFIG;

const chain = soneiumMinato;

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

const bundlerClient = createBundlerClient({
  client: publicClient,
  transport: http(BUNDLER_URL),
});

export function SmartSessionSection({
  startaleClient,
  handleErrors,
}: {
  startaleClient: StartaleAccountClient;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [activeSession, setActiveSession] = useState<SessionData | null>(null);
  const { addLine, setLoadingText } = useOutput();
  const { isSessionsModuleInstalled, checkIsSessionsModuleInstalled } = useStartale();

  useEffect(() => {
    if (!isSessionsModuleInstalled) {
      return;
    }
    const cachedSessionData = localStorage.getItem("smartSessionData");
    if (cachedSessionData) {
      setActiveSession(JSON.parse(cachedSessionData));
    }
  }, [isSessionsModuleInstalled]);

  useEffect(() => {
    if (activeSession) {
      addLine("Active session found");
      addLine(`Session owner: ${activeSession.granter}`);
      addLine(`Session public key: ${activeSession.sessionPublicKey}`);
    }
  }, [activeSession]);

  const displayGasOutput = async () => {
    await gasOutput(
      (text) => {
        console.log("got text: ", text);
        console.log("Calling addLine with: ", text.trim(), "info");
        addLine(text.trim(), "info");
      },
      startaleClient.account.address,
      "Smart account balance:",
    );
  };

  const installSmartSessionModule = async () => {
    try {
      if (!startaleClient) {
        throw new Error("Startale client not initialized");
      }
      const sessionsModule = getSmartSessionsValidator({});
      // console.log("sessionsModule ", sessionsModule)

      if (!isSessionsModuleInstalled) {
        setLoadingText("Installing Smart Sessions module");
        await displayGasOutput();
        const opHash = await startaleClient.installModule({
          module: sessionsModule,
        });

        console.log("Operation hash: ", opHash);

        const result = await startaleClient.waitForUserOperationReceipt({
          hash: opHash,
        });
        console.log("Operation result: ", result.receipt.transactionHash);
        addLine("Smart Sessions module installed successfully");
        await displayGasOutput();
        checkIsSessionsModuleInstalled();
        setLoadingText("");
      }
    } catch (error) {
      console.error("Error installing a module", error);
      handleErrors(error as Error, "Error installing a module");
    }
  };

  const createSession = async () => {
    try {
      if (!startaleClient) {
        throw new Error("Startale client not initialized");
      }

      if (!isSessionsModuleInstalled) {
        await installSmartSessionModule();
      }

      setLoadingText("Creating session");
      await displayGasOutput();
      let ownerKey = localStorage.getItem("sessionOwnerKey");
      if (!ownerKey) {
        ownerKey = generatePrivateKey();
        localStorage.setItem("sessionOwnerKey", ownerKey);
      }
      const sessionOwner = privateKeyToAccount(ownerKey as `0x${string}`);
      const sessionsModule = toSmartSessionsValidator({
        account: startaleClient.account,
        signer: sessionOwner,
      });

      const startaleSessionClient = startaleClient.extend(
        smartSessionCreateActions(sessionsModule),
      );

      const selector = toFunctionSelector("writeDiceRoll(uint256)");
      const sessionRequestedInfo: CreateSessionDataParams[] = [
        {
          sessionPublicKey: sessionOwner.address, // session key signer
          actionPoliciesInfo: [
            {
              contractAddress: DICE_ROLL_LEDGER_ADDRESS,
              functionSelector: selector,
              sudo: true,
            },
          ],
        },
      ];

      const createSessionsResponse = await startaleSessionClient.grantPermission({
        sessionRequestedInfo,
      });

      const sessionData: SessionData = {
        granter: startaleClient.account.address,
        description: `Session to increment a counter for ${DICE_ROLL_LEDGER_ADDRESS}`,
        sessionPublicKey: sessionOwner.address,
        moduleData: {
          permissionIds: createSessionsResponse.permissionIds,
          action: createSessionsResponse.action,
          mode: SmartSessionMode.USE,
          sessions: createSessionsResponse.sessions,
        },
      };

      const result = await startaleClient.waitForUserOperationReceipt({
        hash: createSessionsResponse.userOpHash,
      });

      setActiveSession(sessionData);
      const cachedSessionData = stringify(sessionData);
      localStorage.setItem("smartSessionData", cachedSessionData);
      console.log("Operation result: ", result.receipt.transactionHash);
      console.log("Session created successfully", createSessionsResponse);
      addLine("Session created successfully");
      await displayGasOutput();
      setLoadingText("");
    } catch (error) {
      console.error("Error creating session", error);
      handleErrors(error as Error, "Error creating session");
    }
  };

  const rollDice = async (value: number) => {
    try {
      console.log("Rolling dice with value: ", value);
      if (!activeSession) {
        throw new Error("No active session found");
      }
      const isEnabled = await isSessionEnabled({
        client: startaleClient.account.client as PublicClient,
        account: {
          type: "erc7579-implementation",
          address: startaleClient.account.address,
          deployedOnChains: [chain.id],
        },
        permissionId: activeSession.moduleData.permissionIds[0],
      });
      console.log("is session Enabled", isEnabled);

      const scsContext = { calculateGasLimits: true, paymasterId: AA_CONFIG.PAYMASTER_ID }

      const scsPaymasterClient = createSCSPaymasterClient({
        transport: http(AA_CONFIG.PAYMASTER_SERVICE_URL) as any,
      });

      const ownerKey = localStorage.getItem("sessionOwnerKey") as `0x${string}`;
      const sessionOwner = privateKeyToAccount(ownerKey);
      const smartSessionStartaleClient = createSmartAccountClient({
        account: await toStartaleSmartAccount({
          signer: sessionOwner,
          accountAddress: activeSession.granter,
          chain: chain,
          transport: http(),
        }),
        transport: http(BUNDLER_URL),
        client: publicClient,
        paymaster: scsPaymasterClient,
        paymasterContext: scsContext,
        mock: true,
      });

      const usePermissionsModule = toSmartSessionsValidator({
        account: smartSessionStartaleClient.account,
        signer: sessionOwner,
        moduleData: activeSession.moduleData,
      });

      const useSmartSessionStartaleClient = smartSessionStartaleClient.extend(
        smartSessionUseActions(usePermissionsModule),
      );

      const callData = encodeFunctionData({
        abi: DiceRollLedgerAbi,
        functionName: "writeDiceRoll",
        args: [BigInt(value)],
      });
      addLine(`Your roll: ${value}`);
      setLoadingText("Writing result to chain");
      await displayGasOutput();
      const userOpHash = await useSmartSessionStartaleClient.usePermission({
        calls: [
          {
            to: DICE_ROLL_LEDGER_ADDRESS,
            data: callData,
          },
        ],
      });

      const resultOfUsedSession = await bundlerClient.waitForUserOperationReceipt({
        hash: userOpHash,
      });
      console.log("Operation result: ", resultOfUsedSession.receipt.transactionHash);
      const ledgerStateAfter = (await publicClient.readContract({
        address: DICE_ROLL_LEDGER_ADDRESS,
        abi: DiceRollLedgerAbi,
        functionName: "getAllRolls",
        args: [startaleClient.account.address],
      })) as number[];

      setLoadingText("");
      addLine("Result written to chain successfully");
      await displayGasOutput();
      addLine(`Your results so far: ${ledgerStateAfter}`);
      addLine(
        `Your score total: ${ledgerStateAfter.reduce((a, b) => BigInt(a) + BigInt(b), BigInt(0))}`,
      );
    } catch (error) {
      console.error("Error rolling dice", error);
      handleErrors(error as Error, "Error rolling dice");
    }
  };

  return (
    <Section title="Play the dice game">
      {activeSession ? (
        <>
          <div className="instructionText">Roll a die without signing the transaction!</div>
          <div className="diceContainer">
            <Dice cheatValue={getRandomDiceValue()} size={100} onRoll={rollDice} />
          </div>
        </>
      ) : (
        <div className="inputGroup">
          <button type="button" onClick={createSession}>
            New game
          </button>
        </div>
      )}
    </Section>
  );
}

type dieResult = 1 | 2 | 3 | 4 | 5 | 6;

function getRandomDiceValue(): dieResult {
  return (Math.floor(Math.random() * 6) + 1) as dieResult;
}
