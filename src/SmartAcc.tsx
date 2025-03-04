import {
  type Module,
  type Session,
  SmartSessionMode,
  encodeValidationData,
  getOwnableValidatorMockSignature,
  getPermissionId,
  getSmartSessionsValidator,
  getSocialRecoveryValidator,
  getSudoPolicy,
} from "@rhinestone/module-sdk";
import { signerToEcdsaValidator } from "@zerodev/ecdsa-validator";
import {
  type CreateKernelAccountReturnType,
  createKernelAccount,
  createKernelAccountClient,
} from "@zerodev/sdk";
import { KERNEL_V3_2 } from "@zerodev/sdk/constants";
import { erc7579Actions } from "permissionless/actions/erc7579";
import { useEffect, useState } from "react";
import {
  http,
  type Account,
  type Address,
  type Hex,
  createPublicClient,
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  pad,
  toBytes,
  toFunctionSelector,
  toHex,
  zeroAddress,
} from "viem";
import {
  type GetPaymasterDataParameters,
  createBundlerClient,
  createPaymasterClient,
  getUserOperationHash,
} from "viem/account-abstraction";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { soneiumMinato } from "viem/chains";
import { useAccount } from "wagmi";
import { AA_CONFIG } from "./config";
const {
  MINATO_RPC,
  BUNDLER_URL,
  ENTRY_POINT_ADDRESS,
  ECDSA_VALIDATOR_ADDRESS,
  KERNEL_FACTORY_ADDRESS,
  KERNEL_IMPLEMENTATION_ADDRESS,
  STAKER_FACTORY_ADDRESS,
  PAYMASTER_SERVICE_URL,
  PAYMASTER_CONTRACT_ADDRESS,
  ACCOUNT_RECOVERY_MODULE_ADDRESS,
  OWNABLE_VALIDATOR_ADDRESS,
  SMART_SESSIONS_MODULE_ADDRESS,
  DICE_ROLL_LEDGER_ADDRESS,
} = AA_CONFIG;
import { getAccountNonce } from "@zerodev/sdk/actions";
import { toKernelSmartAccount } from "permissionless/accounts";
import Dice from "react-dice-roll";
import { Section } from "./Section";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { enablingSessionsAbi } from "./abi/SmartSessionAbi";
import { SocialRecoveryAbi } from "./abi/SocialRecovery";

const scsContext = { calculateGasLimits: false, policyId: "sudo" };

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

const createKernelClientInstance = (smartAccount: CreateKernelAccountReturnType) => {
  return createKernelAccountClient({
    account: smartAccount,
    chain: soneiumMinato,
    bundlerTransport: http(BUNDLER_URL),
    client: publicClient,
    paymaster: {
      async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
        console.log("Called getPaymasterData: ", pmDataParams);
        const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
        console.log("Paymaster Response: ", paymasterResponse);
        return paymasterResponse;
      },
      async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
        console.log("Called getPaymasterStubData: ", pmStubDataParams);
        const paymasterStubResponse = await paymasterClient.getPaymasterStubData(pmStubDataParams);
        console.log("Paymaster Stub Response: ", paymasterStubResponse);
        return {
          ...paymasterStubResponse,
          paymasterAndData: undefined,
          paymaster: PAYMASTER_CONTRACT_ADDRESS as Hex,
          paymasterData: paymasterStubResponse.paymasterData || "0x",
          paymasterVerificationGasLimit:
            paymasterStubResponse.paymasterVerificationGasLimit || BigInt(200000),
          paymasterPostOpGasLimit: paymasterStubResponse.paymasterPostOpGasLimit || BigInt(100000),
        };
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
  }).extend(erc7579Actions());
};

type KernelClientInstanceType = ReturnType<typeof createKernelClientInstance>;

export function SmartAccount({
  setLoadingText,
  addLine,
}: { setLoadingText: (text: string) => void; addLine: (line: string) => void }) {
  const connectedAccount = useAccount();

  const [smartAccount, setSmartAccount] = useState<CreateKernelAccountReturnType>();
  const [kernelClient, setKernelClient] = useState<KernelClientInstanceType>();
  const [isSessionModuleInstalled, setIsSessionModuleInstalled] = useState(false);
  const [instanceIndex, setInstanceIndex] = useState(29);
  const [smartSessionsModule, setSmartSessionsModule] = useState<Module>();
  const [sessionOwner, setSessionOwner] = useState<Account>();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    if (!connectedAccount?.address) return;

    // const storedIndex = localStorage.getItem("instanceIndex");

    // if (storedIndex) {
    //   const indexMap = JSON.parse(storedIndex) as Record<string, number>;
    //   const storedAccountIndex = indexMap[connectedAccount.address] ?? 0;
    //   setInstanceIndex(storedAccountIndex);
    // } else {
    //   // If no index map exists, initialize with 0 for this account
    //   localStorage.setItem("instanceIndex", JSON.stringify({ [connectedAccount.address]: 0 }));
    //   setInstanceIndex(0);
    // }
    handleInstantiateSmartAccount();
  }, [connectedAccount?.address]);

  useEffect(() => {
    if (smartAccount) {
      addLine("Smart account instantiated");
      addLine(`Smart account address: ${smartAccount.address}`);
      addLine(`Instance index: ${instanceIndex}`);
      initClient();
    }
  }, [smartAccount]);

  useEffect(() => {
    if (kernelClient) {
      addLine("Kernel client instantiated");
      checkModules();
    }
  }, [kernelClient]);

  function handleErrors(error: Error, text?: string) {
    setLoadingText("");
    addLine(text || "Something has gone wrong.");
    addLine(`Error: ${(error as Error).message}`);
    addLine(
      "Please refresh the page, try creating a new session, or create a new smart account instance with a different nonce.",
    );
  }

  const handleInstantiateSmartAccount = async () => {
    try {
      if (!connectedAccount?.address) {
        throw new Error("No connected account");
      }

      // Get an ECDSA validator instance based on the connected signer
      const ecdsaValidator = await signerToEcdsaValidator(publicClient, {
        signer: window.ethereum,
        entryPoint: { address: ENTRY_POINT_ADDRESS as Hex, version: "0.7" },
        kernelVersion: KERNEL_V3_2,
        validatorAddress: ECDSA_VALIDATOR_ADDRESS as Hex,
      });


const permissionlessAccount = toKernelSmartAccount({});

      // Create a Kernel account with our ECDSA plugin
      const account = await createKernelAccount(publicClient, {
        plugins: { sudo: ecdsaValidator },
        entryPoint: { address: ENTRY_POINT_ADDRESS as Hex, version: "0.7" },
        kernelVersion: KERNEL_V3_2,
        factoryAddress: KERNEL_FACTORY_ADDRESS as Hex,
        accountImplementationAddress: KERNEL_IMPLEMENTATION_ADDRESS as Hex,
        useMetaFactory: true,
        metaFactoryAddress: STAKER_FACTORY_ADDRESS as Hex,
        index: BigInt(instanceIndex),
      });

      // const storedIndex = localStorage.getItem("instanceIndex");
      // const indexMap = storedIndex ? JSON.parse(storedIndex) : {};

      // indexMap[connectedAccount.address] = instanceIndex;
      // localStorage.setItem("instanceIndex", JSON.stringify(indexMap));

      setSmartAccount(account);
      console.log("Smart Account: ", account);
    } catch (error) {
      console.error("Error instantiating smart account", error);
      handleErrors(error as Error, "Error instantiating smart account");
    }
  };

  const initClient = async () => {
    try {
      const kernelClientInstance = createKernelAccountClient({
        account: smartAccount,
        chain: soneiumMinato,
        bundlerTransport: http(BUNDLER_URL),
        client: publicClient,
        paymaster: {
          async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
            console.log("Called getPaymasterData: ", pmDataParams);
            const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
            console.log("Paymaster Response: ", paymasterResponse);
            return paymasterResponse;
          },
          async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
            console.log("Called getPaymasterStubData: ", pmStubDataParams);
            const paymasterStubResponse =
              await paymasterClient.getPaymasterStubData(pmStubDataParams);
            console.log("Paymaster Stub Response: ", paymasterStubResponse);
            // return paymasterStubResponse;
            return {
              ...paymasterStubResponse,
              paymasterAndData: undefined,
              paymaster: PAYMASTER_CONTRACT_ADDRESS as Hex,
              paymasterData: paymasterStubResponse.paymasterData || "0x",
              paymasterVerificationGasLimit:
                paymasterStubResponse.paymasterVerificationGasLimit || BigInt(200000),
              paymasterPostOpGasLimit:
                paymasterStubResponse.paymasterPostOpGasLimit || BigInt(100000),
            };
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
      }).extend(erc7579Actions());

      console.log("Kernel Client: ", kernelClientInstance);
      setKernelClient(kernelClientInstance);
    } catch (error) {
      console.error("Error initializing kernel client", error);
      handleErrors(error as Error, "Error initializing kernel client");
    }
  };

  const checkModules = async () => {
    try {
      // Smart Sessions module

      if (!kernelClient) throw new Error("Kernel client not initialized");

      const smartSessions = getSmartSessionsValidator({});
      smartSessions.address = SMART_SESSIONS_MODULE_ADDRESS;
      smartSessions.module = SMART_SESSIONS_MODULE_ADDRESS;
      console.log("Smart Sessions: ", smartSessions);

      // Todo: make this work with module-sdk addresses of smart session validator and ownable validator
      // Override our own addresses

      const isSmartSessionsModuleInstalled = await kernelClient.isModuleInstalled(smartSessions);
      setIsSessionModuleInstalled(isSmartSessionsModuleInstalled);
      console.log("Is Smart Sessions Module Installed: ", isSmartSessionsModuleInstalled);
      setSmartSessionsModule(smartSessions);
      if (isSmartSessionsModuleInstalled) {
        addLine("Smart Sessions Module already installed.");
      }
    } catch (error) {
      console.error("Error checking modules", error);
      handleErrors(error as Error, "Error checking modules");
    }
  };

  const getInstallSessionCall = async () => {
    try {
      if (!isSessionModuleInstalled) {
        if (!smartAccount) {
          throw new Error("Smart account not initialized");
        }
        if (!kernelClient) {
          throw new Error("Kernel client not initialized");
        }
        if (!smartSessionsModule) {
          throw new Error("Smart sessions module not initialized");
        }
        // Todo: verify if registering a selector is needed with USE mode as well.
        setLoadingText("Installing session module");

        const context = encodePacked(
          ["address", "bytes"],
          [
            zeroAddress,
            encodeAbiParameters(
              [{ type: "bytes" }, { type: "bytes" }, { type: "bytes" }],
              [smartSessionsModule.initData || "0x", "0x", "0xe9ae5c53"],
            ),
          ],
        );

        const opHash = await kernelClient.installModule({
          type: smartSessionsModule.type,
          address: SMART_SESSIONS_MODULE_ADDRESS,
          context: context,
        });

        console.log("Operation hash: ", opHash);

        const result = await bundlerClient.waitForUserOperationReceipt({
          hash: opHash,
        });
        console.log("Operation result: ", result.receipt.transactionHash);

        console.log("Smart Sessions Module installed successfully");

        const isSmartSessionsModuleInstalledNow =
          await kernelClient.isModuleInstalled(smartSessionsModule);

        console.log("Is Smart Sessions Module Installed Now: ", isSmartSessionsModuleInstalledNow);
        setIsSessionModuleInstalled(true);
        addLine("Smart Sessions Module installed successfully");
        setLoadingText("");
      } else {
        console.log("Module is already installed");
      }
    } catch (error) {
      console.error("Error installing session module", error);
      handleErrors(error as Error, "Error installing session module");
    }
  };

  const createSession = async () => {
    try {
      if (!kernelClient) {
        throw new Error("Kernel client not initialized");
      }

      const calls = [];

      if (!isSessionModuleInstalled) {
        const initDataArg = encodePacked(
          ["address", "bytes"],
          [
            zeroAddress,
            encodeAbiParameters(
              [{ type: "bytes" }, { type: "bytes" }, { type: "bytes" }],
              [smartSessionsModule?.initData || "0x", "0x", "0xe9ae5c53"],
            ),
          ],
        );

        calls.push({
          to: kernelClient.account.address,
          value: BigInt(0),
          data: encodeFunctionData({
            abi: [
              {
                name: "installModule",
                type: "function",
                stateMutability: "nonpayable",
                inputs: [
                  {
                    type: "uint256",
                    name: "moduleTypeId",
                  },
                  {
                    type: "address",
                    name: "module",
                  },
                  {
                    type: "bytes",
                    name: "initData",
                  },
                ],
                outputs: [],
              },
            ],
            functionName: "installModule",
            args: [BigInt(1), SMART_SESSIONS_MODULE_ADDRESS, initDataArg],
          }),
        });
      }

      setLoadingText("Creating session");
      const sessionOwnerPk = generatePrivateKey();
      const sessionOwner = privateKeyToAccount(sessionOwnerPk);
      addLine(`Session Owner: ${sessionOwner.address}`);
      console.log("Session Owner: ", sessionOwner);

      const selector = toFunctionSelector("writeDiceRoll(uint256)");
      const session: Session = {
        sessionValidator: OWNABLE_VALIDATOR_ADDRESS,
        sessionValidatorInitData: encodeValidationData({
          threshold: 1,
          owners: [sessionOwner.address],
        }),
        salt: toHex(toBytes("0", { size: 32 })),
        userOpPolicies: [getSudoPolicy()],
        erc7739Policies: {
          allowedERC7739Content: [],
          erc1271Policies: [],
        },
        actions: [
          {
            actionTarget: DICE_ROLL_LEDGER_ADDRESS, // an address as the target of the session execution
            actionTargetSelector: selector, // function selector to be used in the execution, in this case count() // cast sig "count()" to hex
            actionPolicies: [getSudoPolicy()],
          },
        ],
        chainId: BigInt(chain.id),
        permitERC4337Paymaster: true,
      };

      console.log("Session: ", session);

      const sessions: Session[] = [session];

      const preparePermissionData = encodeFunctionData({
        abi: enablingSessionsAbi,
        functionName: "enableSessions",
        args: [sessions],
      });

      console.log("Prepare Permission Data: ", preparePermissionData);

      // return {
      //   action: {
      //     target: SMART_SESSIONS_ADDRESS,
      //     value: BigInt(0),
      //     callData: preparePermissionData
      //   },
      //   permissionIds: permissionIds,
      //   sessions
      // }

      calls.push({
        to: SMART_SESSIONS_MODULE_ADDRESS,
        value: BigInt(0),
        data: preparePermissionData,
      });
      const userOpHashEnableSession = await kernelClient.sendUserOperation({
        account: smartAccount,
        calls,
      });

      const receipt2 = await bundlerClient.waitForUserOperationReceipt({
        hash: userOpHashEnableSession,
      });
      setSession(session);
      setSessionOwner(sessionOwner);

      console.log(session, session.actions);
      addLine(`Session created for owner: ${sessionOwner.address}`);
      setLoadingText("");
      console.log("User Operation hash to enable session: ", receipt2.receipt.transactionHash);
      console.log("Session enabled successfully");
    } catch (error) {
      console.error("Error creating session", error);
      handleErrors(error as Error, "Error creating session");
    }
  };

  const rollDice = async (value: number) => {
    try {
      if (!kernelClient) {
        throw new Error("Kernel client not initialized");
      }
      if (!session) {
        throw new Error("Session not created yet");
      }
      addLine(`You scored ${value}!`);
      setLoadingText("Writing dice roll result to chain");
      console.log("account address: ", smartAccount?.address);
      const permissionId = getPermissionId({
        session,
      });

      const nonceKey = encodeValidatorNonceKey({
        validator: SMART_SESSIONS_MODULE_ADDRESS,
      });

      console.log("nonceKey: ", toHex(nonceKey));

      const nonce = await getAccountNonce(publicClient, {
        address: smartAccount?.address as Address,
        entryPointAddress: ENTRY_POINT_ADDRESS,
        key: nonceKey,
      });

      console.log("Nonce Hex: ", toHex(nonce));

      const mockSig = getOwnableValidatorMockSignature({
        threshold: 1,
      });

      console.log("mockSig: ", mockSig);

      console.log("permissionId: ", permissionId);

      const dummySigEncoded = encodePacked(
        ["bytes1", "bytes32", "bytes"],
        [SmartSessionMode.USE, permissionId, mockSig],
      );

      const encodedData = encodeFunctionData({
        abi: DiceRollLedgerAbi,
        functionName: "writeDiceRoll",
        args: [BigInt(value)],
      });

      const userOperation = await kernelClient.prepareUserOperation({
        account: smartAccount,
        calls: [
          {
            to: session.actions[0].actionTarget,
            value: BigInt(0),
            data: encodedData,
          },
        ],
        nonce,
        signature: dummySigEncoded,
      });

      addLine("User operation prepared");
      console.log("User Operation: ", userOperation);

      const userOpHashToSign = getUserOperationHash({
        chainId: chain.id,
        entryPointAddress: ENTRY_POINT_ADDRESS,
        entryPointVersion: "0.7",
        userOperation,
      });

      console.log("User Operation hash to sign: ", userOpHashToSign);
      if (!sessionOwner) {
        throw new Error("Session owner not created yet");
      }
      if (!sessionOwner.signMessage) {
        throw new Error("Session owner does not have signMessage method");
      }
      const sessionKeySignature = await sessionOwner.signMessage({
        message: { raw: userOpHashToSign },
      });
      addLine("User operation signed");
      console.log("Session Key Signature: ", sessionKeySignature);

      const userOpSignature = encodePacked(
        ["bytes1", "bytes32", "bytes"],
        [SmartSessionMode.USE, permissionId, sessionKeySignature],
      );

      console.log("User Operation Signature: ", userOpSignature);

      userOperation.signature = userOpSignature;

      const finalOpHash = await kernelClient.sendUserOperation(userOperation as any);
      addLine("User operation sent");
      setLoadingText("Waiting for block confirmation");
      const receiptFinal = await bundlerClient.waitForUserOperationReceipt({
        hash: finalOpHash,
      });
      addLine("User operation confirmed");

      console.log("User Operation hash to execute session: ", receiptFinal.receipt.transactionHash);
      console.log("Session executed successfully");
      setLoadingText("Retrieving results from chain");
      const ledgerStateAfter = (await publicClient.readContract({
        address: DICE_ROLL_LEDGER_ADDRESS,
        abi: DiceRollLedgerAbi,
        functionName: "getAllRolls",
        args: [smartAccount?.address],
      })) as number[];
      addLine("Result written to chain successfully");
      addLine(`Your results so far: ${ledgerStateAfter}`);
      addLine(
        `Your score total: ${ledgerStateAfter.reduce((a, b) => BigInt(a) + BigInt(b), BigInt(0))}`,
      );
      setLoadingText("");
      console.log("Counter state after session execution: ", ledgerStateAfter);
    } catch (error) {
      console.error("Error rolling dice", error);
      handleErrors(error as Error, "Error sending session tx");
    }
  };

  return (
    <div className="input">
      {smartAccount && (
        <>
          <SocialRecoverySection
            kernelClient={kernelClient as KernelClientInstanceType}
            setLoadingText={setLoadingText}
            addLine={addLine}
            handleErrors={handleErrors}
          />

          <Section title="Start a game of dice">
            <div className="inputGroup">
              {session && <div>Session Module installed</div>}
              <button type="button" onClick={createSession}>
                New game
              </button>
            </div>
          </Section>

          {session && (
            <Section title="Play the dice game">
              <div className="instructionText">Roll a die without signing the transaction!</div>
              <div className="diceContainer">
                <Dice cheatValue={getRandomDiceValue()} size={100} onRoll={rollDice} />
              </div>
            </Section>
          )}
        </>
      )}
    </div>
  );
}

function SocialRecoverySection({
  kernelClient,
  addLine,
  setLoadingText,
  handleErrors,
}: {
  kernelClient: KernelClientInstanceType;
  addLine: (line: string) => void;
  setLoadingText: (text: string) => void;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [isRecoveryModuleInstalled, setIsRecoveryModuleInstalled] = useState(false);
  const [guardians, setGuardians] = useState<`0x${string}`[]>([]);
  const [guardian, setGuardian] = useState<`0x${string}` | "">("");



    // 0xa277F2011A116034a459D61bC1CAE0ddAc4f5D15,
  // 0x12BbfcD97B792E614eF346061C05f4a98277f9Ac

  useEffect(() => {
    if (kernelClient) {
      checkIsRecoveryModuleInstalled();
    }
  }, [kernelClient?.account?.address]);

  const checkIsRecoveryModuleInstalled = async () => {
    // Social recovery module
    const socialRecoveryModuleCustom: Module = {
      additionalContext: "0x",
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      type: "validator",
      module: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      initData: "0x",
      deInitData: "0x",
    };
    console.log("Social Recovery Module: ", socialRecoveryModuleCustom);
    const recoveryModuleInstalled = await kernelClient.isModuleInstalled(
      socialRecoveryModuleCustom,
    );

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
      args: [kernelClient.account.address],
    })) as `0x${string}`[];
    console.log("Account Guardians: ", accountGuardians);
    setGuardians(accountGuardians);
  };

  const handleAddNewGuardian = async () => {
    try {
      if (!kernelClient) {
        throw new Error("Kernel client not initialized");
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
    const addGuardianUserOpHash = await kernelClient.sendUserOperation({
      callData: await kernelClient.account.encodeCalls(calls),
    });

    await kernelClient.waitForUserOperationReceipt({
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
      const initDataArg = encodePacked(
        ["address", "bytes"],
        [
          zeroAddress,
          encodeAbiParameters(
            [{ type: "bytes" }, { type: "bytes" }],
            [socialRecoveryModule?.initData || "0x", "0x"],
          ),
        ],
      );

      const calls = [
        {
          to: kernelClient.account.address,
          value: BigInt(0),
          data: encodeFunctionData({
            abi: [
              {
                name: "installModule",
                type: "function",
                stateMutability: "nonpayable",
                inputs: [
                  {
                    type: "uint256",
                    name: "moduleTypeId",
                  },
                  {
                    type: "address",
                    name: "module",
                  },
                  {
                    type: "bytes",
                    name: "initData",
                  },
                ],
                outputs: [],
              },
            ],
            functionName: "installModule",
            args: [BigInt(1), ACCOUNT_RECOVERY_MODULE_ADDRESS, initDataArg],
          }),
        },
      ];

      const installModuleUserOpHash = await kernelClient.sendUserOperation({
        callData: await kernelClient.account.encodeCalls(calls),
      });

      await kernelClient.waitForUserOperationReceipt({
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
    const removeGuardianUserOpHash = await kernelClient.sendUserOperation({
      callData: await kernelClient.account.encodeCalls(calls),
    });

    await kernelClient.waitForUserOperationReceipt({
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

type dieResult = 1 | 2 | 3 | 4 | 5 | 6;

function getRandomDiceValue(): dieResult {
  return (Math.floor(Math.random() * 6) + 1) as dieResult;
}

export const encodeValidatorNonceKey = ({
  validator,
  nonceKey = 0, // Default 0 as in Solidity test
}: {
  validator: Hex; // 20-byte Ethereum address
  nonceKey?: number; // 16-bit nonce key
}) => {
  return BigInt(
    pad(
      encodePacked(
        ["bytes1", "bytes1", "address", "uint16"],
        ["0x00", "0x01", validator, nonceKey],
      ),
      {
        dir: "right",
        size: 24,
      },
    ),
  );
};

const isValidEthereumAddress = (address: string): boolean => /^0x[a-fA-F0-9]{40}$/.test(address);