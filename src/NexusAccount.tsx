import {
  type CreateSessionDataParams,
  type NexusAccount,
  type NexusClient,
  type SessionData,
  createSmartAccountClient,
  smartSessionCreateActions,
  toNexusAccount,
  toSmartSessionsValidator,
} from "@biconomy/abstractjs";
import {
  type Module,
  SmartSessionMode,
  getSmartSessionsValidator,
  getSocialRecoveryValidator,
} from "@rhinestone/module-sdk";
import { useEffect, useState } from "react";
import { createPublicClient, encodeFunctionData, stringify, toFunctionSelector } from "viem";
import { type GetPaymasterDataParameters, createPaymasterClient } from "viem/account-abstraction";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import { http, useAccount } from "wagmi";
import { Section } from "./Section";
import { SocialRecoveryAbi } from "./abi/SocialRecovery";
import { AA_CONFIG } from "./config";

const {
  MOCK_ATTESTER_ADDRESS,
  NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
  NEXUS_K1_VALIDATOR_ADDRESS,
  MINATO_RPC,
  BUNDLER_URL,
  PAYMASTER_SERVICE_URL,
  ACCOUNT_RECOVERY_MODULE_ADDRESS,
  DICE_ROLL_LEDGER_ADDRESS,
} = AA_CONFIG;

const scsContext = { calculateGasLimits: true, policyId: "sudo" };

const chain = soneiumMinato;

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

const paymasterClient = createPaymasterClient({
  transport: http(PAYMASTER_SERVICE_URL),
});

export function SmartAccount({
  setLoadingText,
  addLine,
}: { setLoadingText: (text: string) => void; addLine: (line: string) => void }) {
  const eoaAccount = useAccount();

  const [nexusAccount, setNexusAccount] = useState<NexusAccount>();
  const [nexusClient, setNexusClient] = useState<NexusClient>();

  useEffect(() => {
    if (!eoaAccount?.address) return;

    getSmartAccountInstance();
  }, [eoaAccount?.address]);

  useEffect(() => {
    if (nexusAccount) {
      addLine("Smart account instantiated");
      addLine(`Smart account address: ${nexusAccount.address}`);
      initClient();
    }
  }, [nexusAccount]);

  useEffect(() => {
    if (nexusClient) {
      addLine("Nexus client instantiated");
    }
  }, [nexusClient]);
  const handleErrors = (error: Error, text?: string) => {
    setLoadingText("");
    addLine(text || "Something has gone wrong.");
    addLine(`Error: ${(error as Error).message}`);
    addLine(
      "Please refresh the page, try creating a new session, or create a new smart account instance with a different nonce.",
    );
  };

  const getSmartAccountInstance = async () => {
    if (!eoaAccount?.address) {
      throw new Error("No connected account");
    }

    const nexusAccountInstance = await toNexusAccount({
      signer: window.ethereum,
      chain,
      transport: http(),
      attesters: [MOCK_ATTESTER_ADDRESS],
      factoryAddress: NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
      validatorAddress: NEXUS_K1_VALIDATOR_ADDRESS,
      index: BigInt(1000025),
    });

    console.log("nexusAccountInstance", nexusAccountInstance);
    addLine(`Nexus account created: ${nexusAccountInstance.address}`);
    setNexusAccount(nexusAccountInstance);
  };

  const initClient = async () => {
    try {
      const nexusClientInstance = createSmartAccountClient({
        account: nexusAccount,
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
      setNexusClient(nexusClientInstance);
    } catch (error) {
      console.error("Error initializing kernel client", error);
      handleErrors(error as Error, "Error initializing kernel client");
    }
  };



  return (
    <div className="input">
      {nexusAccount && nexusClient && (
        <div>
          <SocialRecoverySection
            nexusClient={nexusClient}
            addLine={addLine}
            setLoadingText={setLoadingText}
            handleErrors={handleErrors}
          />
          <SmartSessionSection
            nexusClient={nexusClient}
            addLine={addLine}
            setLoadingText={setLoadingText}
            handleErrors={handleErrors}
          />
        </div>
      )}
    </div>
  );
}

function SmartSessionSection({
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

  useEffect(() => {
    if (nexusClient) {
      checkIsSessionModuleInstalled();
    }
  }, [nexusClient?.account?.address]);

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
      const sessionOwner = privateKeyToAccount(generatePrivateKey());

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

      const cachedSessionData = stringify(sessionData);

      localStorage.setItem("smartSessionData", cachedSessionData);

      const result = await nexusClient.waitForUserOperationReceipt({
        hash: createSessionsResponse.userOpHash,
      });
      console.log("Operation result: ", result.receipt.transactionHash);
      console.log("Session created successfully", createSessionsResponse);
      addLine("Session created successfully");
    } catch (error) {
      console.error("Error creating session", error);
      handleErrors(error as Error, "Error creating session");
    }
  };

  return (
    <Section title="Create session">
      <button
        type="button"
        onClick={() => {
          createSession();
        }}
      >
        Create Session
      </button>
    </Section>
  );
}

function SocialRecoverySection({
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
  const [isRecoveryModuleInstalled, setIsRecoveryModuleInstalled] = useState(false);
  const [guardians, setGuardians] = useState<`0x${string}`[]>([]);
  const [guardian, setGuardian] = useState<`0x${string}` | "">("");

  useEffect(() => {
    if (nexusClient) {
      checkIsRecoveryModuleInstalled();
    }
  }, [nexusClient?.account?.address]);

  const checkIsRecoveryModuleInstalled = async () => {
    // Social recovery module
    const socialRecoveryModule: Module = {
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      module: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      initData: "0x",
      deInitData: "0x",
      type: "validator",
      additionalContext: "0x",
    };
    console.log("Social Recovery Module: ", socialRecoveryModule);

    const recoveryModuleInstalled = await nexusClient.isModuleInstalled({
      module: socialRecoveryModule,
    });

    if (recoveryModuleInstalled) {
      await getGuardians();
      addLine("Recovery Module already installed.");
    } else {
      setGuardians([]);
    }

    setIsRecoveryModuleInstalled(recoveryModuleInstalled);
  };

  const getGuardians = async () => {
    const accountGuardians = (await publicClient.readContract({
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      abi: SocialRecoveryAbi,
      functionName: "getGuardians",
      args: [nexusClient.account.address],
    })) as `0x${string}`[];
    console.log("Account Guardians: ", accountGuardians);
    setGuardians(accountGuardians);
  };

  const handleAddNewGuardian = async () => {
    try {
      if (!nexusClient) {
        throw new Error("Nexus client not initialized");
      }
      if (!isRecoveryModuleInstalled) {
        await installRecoveryModule();
      } else {
        await addNewGuardianToExisting();
      }
    } catch (error) {
      console.error("Error adding new guardian", error);
      handleErrors(error as Error, "Error adding new guardian");
    }
  };

  const addNewGuardianToExisting = async () => {
    console.log("adding guardian to existing");
    const calls = [
      {
        to: ACCOUNT_RECOVERY_MODULE_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: SocialRecoveryAbi,
          functionName: "addGuardian",
          args: [guardian],
        }),
      },
    ];
    const addGuardianUserOpHash = await nexusClient.sendUserOperation({
      callData: await nexusClient.account.encodeCalls(calls),
    });

    await nexusClient.waitForUserOperationReceipt({
      hash: addGuardianUserOpHash,
    });

    console.log("Guardian added successfully");
    addLine("Guardian added successfully");
    setGuardian("");
    await getGuardians();
  };

  const installRecoveryModule = async () => {
    if (!guardian || !isValidEthereumAddress(guardian)) {
      console.error("Guardian address is required");
      return;
    }
    try {
      const socialRecoveryModule = getSocialRecoveryValidator({
        guardians: [guardian as `0x${string}`],
        threshold: 1,
      });

      setLoadingText("Installing recovery module");

      const installModuleUserOpHash = await nexusClient.installModule({
        module: socialRecoveryModule,
      });

      await nexusClient.waitForUserOperationReceipt({
        hash: installModuleUserOpHash,
      });

      addLine("Recovery Module installed successfully");
      setIsRecoveryModuleInstalled(true);
      await getGuardians();
      setLoadingText("");
    } catch (error) {
      console.error("Error installing recovery module", error);
      handleErrors(error as Error, "Error installing recovery module");
    }
  };

  const handleRemoveGuardian = async (guardian: `0x${string}`) => {
    const SENTINEL_ADDRESS = "0x0000000000000000000000000000000000000001";
    const index = guardians.indexOf(guardian);
    if (index < 0) {
      console.error("Guardian not found in list");
      return;
    }

    const prevGuardian = index === 0 ? SENTINEL_ADDRESS : guardians[index - 1];

    const calls = [
      {
        to: ACCOUNT_RECOVERY_MODULE_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: SocialRecoveryAbi,
          functionName: "removeGuardian",
          args: [prevGuardian, guardian],
        }),
      },
    ];
    const removeGuardianUserOpHash = await nexusClient.sendUserOperation({
      callData: await nexusClient.account.encodeCalls(calls),
    });

    await nexusClient.waitForUserOperationReceipt({
      hash: removeGuardianUserOpHash,
    });

    console.log("Guardian removed successfully");
    addLine("Guardian removed successfully");
    await getGuardians();
  };

  return (
    <Section title="Add guardians for social recovery">
      {guardians.length > 0 && <div>Guardians:</div>}
      <div className="inputGroup">
        {guardians.map((guardian, index) => (
          <div className="guardianWrapper" key={index}>
            <div>{guardian}</div>
            <button
              type="button"
              onClick={() => {
                handleRemoveGuardian(guardian);
              }}
            >
              X
            </button>
          </div>
        ))}
        <div className="inputGroup">
          <div className="addressInput">
            <label htmlFor="guardian">New address:</label>
            <input
              name="guardian"
              type="text"
              value={guardian}
              onChange={(e) => setGuardian(e.target.value as `0x${string}`)}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            if (guardian) {
              handleAddNewGuardian();
            }
          }}
        >
          Add Guardian
        </button>
      </div>
    </Section>
  );
}

const isValidEthereumAddress = (address: string): boolean => /^0x[a-fA-F0-9]{40}$/.test(address);
