import {
  type CreateSessionDataParams,
  type NexusClient,
  type SessionData,
  createSmartAccountClient,
  smartSessionCreateActions,
  smartSessionUseActions,
  toNexusAccount,
  toSmartSessionsValidator,
} from "@biconomy/abstractjs";
import {
  SmartSessionMode,
  getSmartSessionsValidator,
  isSessionEnabled,
} from "@rhinestone/module-sdk";
import { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import {
  type PublicClient,
  createPublicClient,
  encodeFunctionData,
  stringify,
  toFunctionSelector,
} from "viem";
import {
  type GetPaymasterDataParameters,
  createBundlerClient,
  createPaymasterClient,
} from "viem/account-abstraction";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import { http } from "wagmi";
import { Section } from "./Section";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { AA_CONFIG } from "./config";

const { MINATO_RPC, BUNDLER_URL, PAYMASTER_SERVICE_URL, DICE_ROLL_LEDGER_ADDRESS } = AA_CONFIG;

const scsContext = { calculateGasLimits: true, policyId: "sudo" };

const chain = soneiumMinato;

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

const bundlerClient = createBundlerClient({
  client: publicClient,
  transport: http(BUNDLER_URL),
});

const paymasterClient = createPaymasterClient({
  transport: http(PAYMASTER_SERVICE_URL),
});

export function SmartSessionSection({
  nexusClient,
  addLine,
  setLoadingText,
  handleErrors,
}: {
  nexusClient: NexusClient;
  addLine: (line: string) => void;
  setLoadingText: (text: string) => void;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [isSessionModuleInstalled, setIsSessionModuleInstalled] = useState(false);
  const [activeSession, setActiveSession] = useState<SessionData | null>(null);

  useEffect(() => {
    if (nexusClient) {
      checkIsSessionModuleInstalled();
    }
  }, [nexusClient?.account?.address]);

  useEffect(() => {
    if (!isSessionModuleInstalled) {
      return;
    }
    const cachedSessionData = localStorage.getItem("smartSessionData");
    if (cachedSessionData) {
      setActiveSession(JSON.parse(cachedSessionData));
    }
  }, [isSessionModuleInstalled]);

  useEffect(() => {
    if (activeSession) {
      addLine("Active session found");
      addLine(`Session owner: ${activeSession.granter}`);
      addLine(`Session public key: ${activeSession.sessionPublicKey}`);
    }
  }, [activeSession]);

  const checkIsSessionModuleInstalled = async () => {
    const sessionsModule = getSmartSessionsValidator({});
    const isSmartSessionsModuleInstalled = await nexusClient.isModuleInstalled({
      module: sessionsModule,
    });
    setIsSessionModuleInstalled(isSmartSessionsModuleInstalled);
  };

  const installSmartSessionModule = async () => {
    try {
      if (!nexusClient) {
        throw new Error("Nexus client not initialized");
      }
      const sessionsModule = getSmartSessionsValidator({});

      if (!isSessionModuleInstalled) {
        const opHash = await nexusClient.installModule({
          module: sessionsModule,
        });

        console.log("Operation hash: ", opHash);

        const result = await nexusClient.waitForUserOperationReceipt({
          hash: opHash,
        });
        console.log("Operation result: ", result.receipt.transactionHash);
        addLine("Smart Sessions module installed successfully");
        setIsSessionModuleInstalled(true);
      }
    } catch (error) {
      console.error("Error creating session", error);
      handleErrors(error as Error, "Error creating session");
    }
  };

  const createSession = async () => {
    try {
      if (!nexusClient) {
        throw new Error("Nexus client not initialized");
      }

      if (!isSessionModuleInstalled) {
        await installSmartSessionModule();
      }

      let ownerKey = localStorage.getItem("sessionOwnerKey");
      if (!ownerKey) {
        ownerKey = generatePrivateKey();
        localStorage.setItem("sessionOwnerKey", ownerKey);
      }
      const sessionOwner = privateKeyToAccount(ownerKey as `0x${string}`);
      const sessionsModule = toSmartSessionsValidator({
        account: nexusClient.account,
        signer: sessionOwner,
      });

      const nexusSessionClient = nexusClient.extend(smartSessionCreateActions(sessionsModule));

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

      const createSessionsResponse = await nexusSessionClient.grantPermission({
        sessionRequestedInfo,
      });

      const sessionData: SessionData = {
        granter: nexusClient.account.address,
        description: `Session to increment a counter for ${DICE_ROLL_LEDGER_ADDRESS}`,
        sessionPublicKey: sessionOwner.address,
        moduleData: {
          permissionIds: createSessionsResponse.permissionIds,
          action: createSessionsResponse.action,
          mode: SmartSessionMode.USE,
          sessions: createSessionsResponse.sessions,
        },
      };

      const result = await nexusClient.waitForUserOperationReceipt({
        hash: createSessionsResponse.userOpHash,
      });

      setActiveSession(sessionData);
      const cachedSessionData = stringify(sessionData);
      localStorage.setItem("smartSessionData", cachedSessionData);
      console.log("Operation result: ", result.receipt.transactionHash);
      console.log("Session created successfully", createSessionsResponse);
      addLine("Session created successfully");
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
        client: nexusClient.account.client as PublicClient,
        account: {
          type: "nexus",
          address: nexusClient.account.address,
          deployedOnChains: [chain.id],
        },
        permissionId: activeSession.moduleData.permissionIds[0],
      });
      console.log("is session Enabled", isEnabled);

      const ownerKey = localStorage.getItem("sessionOwnerKey") as `0x${string}`;
      const sessionOwner = privateKeyToAccount(ownerKey);
      const smartSessionNexusClient = createSmartAccountClient({
        account: await toNexusAccount({
          signer: sessionOwner,
          accountAddress: activeSession.granter,
          chain: chain,
          transport: http(),
        }),
        transport: http(BUNDLER_URL),
        client: publicClient,
        paymaster: {
          async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
            pmDataParams.paymasterPostOpGasLimit = BigInt(100000);
            pmDataParams.paymasterVerificationGasLimit = BigInt(200000);
            pmDataParams.verificationGasLimit = BigInt(500000);
            // console.log("Called getPaymasterData: ", pmDataParams);
            const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
            // console.log("Paymaster Response: ", paymasterResponse);
            return paymasterResponse;
          },
          async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
            // console.log("Called getPaymasterStubData: ", pmStubDataParams);
            const paymasterStubResponse =
              await paymasterClient.getPaymasterStubData(pmStubDataParams);
            // console.log("Paymaster Stub Response: ", paymasterStubResponse);
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
        mock: true,
      });

      const usePermissionsModule = toSmartSessionsValidator({
        account: smartSessionNexusClient.account,
        signer: sessionOwner,
        moduleData: activeSession.moduleData,
      });

      const useSmartSessionNexusClient = smartSessionNexusClient.extend(
        smartSessionUseActions(usePermissionsModule),
      );

      const callData = encodeFunctionData({
        abi: DiceRollLedgerAbi,
        functionName: "writeDiceRoll",
        args: [BigInt(value)],
      });
      addLine(`Your roll: ${value}`);
      setLoadingText("Writing result to chain");
      const userOpHash = await useSmartSessionNexusClient.usePermission({
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
        args: [nexusClient.account.address],
      })) as number[];

      setLoadingText("");
      addLine("Result written to chain successfully");
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
