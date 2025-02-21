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
  toHex,
  zeroAddress,
} from "viem";
import {
  type GetPaymasterDataParameters,
  bundlerActions,
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
  COUNTER_CONTRACT_ADDRESS,
  SMART_SESSIONS_MODULE_ADDRESS,
} = AA_CONFIG;
import { getAccountNonce } from "@zerodev/sdk/actions";
import { Section } from "./Section";
import { Counter as CounterAbi } from "./abi/Counter";
import { enablingSessionsAbi } from "./abi/SmartSessionAbi";
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

export function SmartAccount({
  toggleLoading,
  addLine,
}: { toggleLoading: () => void; addLine: (line: string) => void }) {
  const connectedAccount = useAccount();

  const [smartAccount, setSmartAccount] = useState<CreateKernelAccountReturnType>();
  const [kernelClient, setKernelClient] = useState<any>();
  const [isRecoveryModuleInstalled, setIsRecoveryModuleInstalled] = useState(false);
  const [isSessionModuleInstalled, setIsSessionModuleInstalled] = useState(false);
  const [instanceIndex, setInstanceIndex] = useState(2034);
  const [socialRecoveryModule, setSocialRecoveryModule] = useState<Module>();
  const [smartSessionsModule, setSmartSessionsModule] = useState<Module>();
  const [sessionOwner, setSessionOwner] = useState<Account>();
  const [session, setSession] = useState<Session>();
  const [guardian1, setGuardian1] = useState<`0x${string}`>(
    "0xa277F2011A116034a459D61bC1CAE0ddAc4f5D15",
  );
  const [guardian2, setGuardian2] = useState<`0x${string}`>(
    "0x2f1e36d9Caed0EEF7341ade09BD7238b4E8794aa",
  );

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

  const handleInstantiateSmartAccount = async () => {
    try {
      // Get an ECDSA validator instance based on the connected signer
      const ecdsaValidator = await signerToEcdsaValidator(publicClient, {
        signer: window.ethereum,
        entryPoint: { address: ENTRY_POINT_ADDRESS as Hex, version: "0.7" },
        kernelVersion: KERNEL_V3_2,
        validatorAddress: ECDSA_VALIDATOR_ADDRESS as Hex,
      });

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

      setSmartAccount(account);
      console.log("Smart Account: ", account);
    } catch (error) {
      console.error("Error instantiating smart account", error);
      addLine(`Error instantiating smart account: ${(error as Error).message}`);
    }
  };

  const initClient = async () => {
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
  };

  const checkModules = async () => {
    // Social recovery module
    const socialRecovery = getSocialRecoveryValidator({
      threshold: 2,
      guardians: [guardian1, guardian2],
    });

    socialRecovery.module = ACCOUNT_RECOVERY_MODULE_ADDRESS;
    socialRecovery.address = ACCOUNT_RECOVERY_MODULE_ADDRESS;

    setSocialRecoveryModule(socialRecovery);
    const recoveryModuleInstalled = await kernelClient.isModuleInstalled(socialRecovery);
    setIsRecoveryModuleInstalled(recoveryModuleInstalled);
    console.log("Is Recovery Module Installed: ", recoveryModuleInstalled);
    if (recoveryModuleInstalled) {
      addLine("Recovery Module already installed.");
    }

    // Smart Sessions module

    const smartSessions = getSmartSessionsValidator({});
    console.log("Smart Sessions: ", smartSessions);

    // Todo: make this work with module-sdk addresses of smart session validator and ownable validator
    // Override our own addresses
    smartSessions.address = SMART_SESSIONS_MODULE_ADDRESS;
    smartSessions.module = SMART_SESSIONS_MODULE_ADDRESS;

    const isSmartSessionsModuleInstalled = await kernelClient.isModuleInstalled(smartSessions);
    setIsSessionModuleInstalled(isSmartSessionsModuleInstalled);
    console.log("Is Smart Sessions Module Installed: ", isSmartSessionsModuleInstalled);
    setSmartSessionsModule(smartSessions);
    if (isSmartSessionsModuleInstalled) {
      addLine("Smart Sessions Module already installed.");
    }
  };

  const installRecoveryModule = async () => {
    if (!smartAccount) {
      throw new Error("Smart account not initialized");
    }
    if (!kernelClient) {
      throw new Error("Kernel client not initialized");
    }
    if (!socialRecoveryModule) {
      throw new Error("Social recovery module not initialized");
    }

    toggleLoading();
    const initDataArg = encodePacked(
      ["address", "bytes"],
      [
        zeroAddress,
        encodeAbiParameters(
          [{ type: "bytes" }, { type: "bytes" }],
          [socialRecoveryModule.initData || "0x", "0x"],
        ),
      ],
    );
    const calls = [
      {
        to: smartAccount.address,
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

    console.log("Is recovery Module Installed: ", isRecoveryModuleInstalled);

    if (!isRecoveryModuleInstalled) {
      const installModuleUserOpHash = await kernelClient.sendUserOperation({
        callData: await kernelClient.account.encodeCalls(calls),
        // calls: calls this also works..
      });

      // spinner.succeed(chalk.greenBright.bold.underline("User operation submitted to install the recovery module"));
      // console.log("\n");
      // spinner.start("Waiting for user operation to be included in a block");

      const receiptNew = await kernelClient.waitForUserOperationReceipt({
        hash: installModuleUserOpHash,
      });
      // console.log("User operation included", receipt);
      console.log("transaction hash: ", receiptNew.receipt.transactionHash);

      const ourBundlerClient = kernelClient.extend(bundlerActions);

      const result = await ourBundlerClient.waitForUserOperationReceipt({
        hash: installModuleUserOpHash,
      });

      console.log("User operation included", result);
      const isModuleInstalledNow = await kernelClient.isModuleInstalled(socialRecoveryModule);
      console.log("Is Module Installed: ", isModuleInstalledNow);
      addLine("Recovery Module installed successfully");
      setIsRecoveryModuleInstalled(true);
      toggleLoading();
    } else {
      console.log("Module is already installed");
    }
  };

  const installSessionModule = async () => {
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
      toggleLoading();
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

      // const trustAttestersAction = getTrustAttestersAction({
      //   threshold: 1,
      //   attesters: [
      //     RHINESTONE_ATTESTER_ADDRESS, // Rhinestone Attester
      //     MOCK_ATTESTER_ADDRESS, // Mock Attester - do not use in production
      //   ],
      // });

      // const userOpHash1 = await kernelClient.sendUserOperation({
      //   account: smartAccount,
      //   calls: [
      //     {
      //       to: trustAttestersAction.target,
      //       value: BigInt(0),
      //       data: trustAttestersAction.callData,
      //     },
      //   ],
      // });

      // const receipt1 = await bundlerClient.waitForUserOperationReceipt({
      //   hash: userOpHash1,
      // });

      // console.log("User Operation hash: ", receipt1.receipt.transactionHash);
      // console.log("Trust Attesters action executed successfully");

      console.log("Is Smart Sessions Module Installed Now: ", isSmartSessionsModuleInstalledNow);
      setIsSessionModuleInstalled(true);
      addLine("Smart Sessions Module installed successfully");
      toggleLoading();
    } else {
      console.log("Module is already installed");
    }
  };

  const createSession = async () => {
    toggleLoading();
    const sessionOwnerPk = generatePrivateKey();
    const sessionOwner = privateKeyToAccount(sessionOwnerPk);
    addLine(`Session Owner: ${sessionOwner.address}`);
    console.log("Session Owner: ", sessionOwner);

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
          actionTarget: COUNTER_CONTRACT_ADDRESS, // an address as the target of the session execution
          actionTargetSelector: "0x06661abd" as Hex, // function selector to be used in the execution, in this case count() // cast sig "count()" to hex
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

    const userOpHashEnableSession = await kernelClient.sendUserOperation({
      account: smartAccount,
      calls: [
        {
          to: SMART_SESSIONS_MODULE_ADDRESS,
          value: BigInt(0),
          data: preparePermissionData,
        },
      ],
    });

    const receipt2 = await bundlerClient.waitForUserOperationReceipt({
      hash: userOpHashEnableSession,
    });
    setSession(session);
    setSessionOwner(sessionOwner);

    addLine(`Session created for owner: ${sessionOwner.address}`);
    toggleLoading();
    console.log("User Operation hash to enable session: ", receipt2.receipt.transactionHash);
    console.log("Session enabled successfully");
  };

  const handleSession = async () => {
    // Followed below as well
    // https://docs.rhinestone.wtf/module-registry/usage/mock-attestation

    // Install Ownable Validator

    // Now that the smart session is installed and account has trusted attesters..

    // Note: Can keep fixed session owner

    // Now let's use it.. with session key signature.

    if (!session) {
      throw new Error("Session not created yet");
    }
    toggleLoading();
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

    const userOperation = await kernelClient.prepareUserOperation({
      account: smartAccount,
      calls: [
        {
          to: session.actions[0].actionTarget,
          value: BigInt(0),
          data: session.actions[0].actionTargetSelector,
        },
      ],
      // verificationGasLimit: BigInt(200000),
      // postOpGasLimit: BigInt(100000),
      // maxFeePerGas: BigInt(10000000),
      // callGasLimit: BigInt(10000000),
      // preVerificationGas: BigInt(100000000),
      // paymasterVerificationGasLimit: BigInt(200000),
      nonce,
      signature: dummySigEncoded,
    });

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

    console.log("Session Key Signature: ", sessionKeySignature);

    const userOpSignature = encodePacked(
      ["bytes1", "bytes32", "bytes"],
      [SmartSessionMode.USE, permissionId, sessionKeySignature],
    );

    console.log("User Operation Signature: ", userOpSignature);

    userOperation.signature = userOpSignature;

    const finalOpHash = await kernelClient.sendUserOperation(userOperation as any);

    const receiptFinal = await bundlerClient.waitForUserOperationReceipt({
      hash: finalOpHash,
    });

    console.log("User Operation hash to execute session: ", receiptFinal.receipt.transactionHash);
    console.log("Session executed successfully");

    const counterStateAfter = (await publicClient.readContract({
      address: COUNTER_CONTRACT_ADDRESS,
      abi: CounterAbi,
      functionName: "counters",
      args: [smartAccount?.address],
    })) as bigint;
    addLine("Session tx executed successfully");
    addLine(`Counter state after session execution: ${counterStateAfter}`);
    toggleLoading();
    console.log("Counter state after session execution: ", counterStateAfter);
  };

  return (
    <div className="input">
      <Section title="Smart Account instance">
        {!smartAccount && (
          <button type="button" onClick={handleInstantiateSmartAccount}>
            Get a smart account instance
          </button>
        )}
        {smartAccount && <div>Smart account address: {smartAccount.address}</div>}
      </Section>
      {smartAccount && (
        <>
          <Section title="Social Recovery Module (optional)">
            {isRecoveryModuleInstalled ? (
              <div>Recovery Module installed</div>
            ) : (
              <div className="inputGroup">
                <div>
                  <label htmlFor="guardian1">Guardian 1</label>
                  <input
                    name="guardian1"
                    id="guardian1"
                    type="text"
                    placeholder="Recovery address 1"
                    value={guardian1}
                    onChange={(e) => setGuardian1(e.target.value as `0x${string}`)}
                  />
                </div>
                <div>
                  <label htmlFor="guardian2">Guardian 2</label>
                  <input
                    name="guardian2"
                    id="guardian2"
                    type="text"
                    placeholder="Recovery address 2"
                    value={guardian2}
                    onChange={(e) => setGuardian2(e.target.value as `0x${string}`)}
                  />
                </div>
                <button type="button" onClick={installRecoveryModule}>
                  Install Recovery Module
                </button>
              </div>
            )}
          </Section>

          <Section title="Session Module">
            {isSessionModuleInstalled ? (
              <div>Session Module installed</div>
            ) : (
              <button type="button" onClick={installSessionModule}>
                Install Session Module
              </button>
            )}
          </Section>

          {isSessionModuleInstalled && (
            <Section title="Create Session">
              <button type="button" onClick={createSession}>
                Create Session
              </button>
            </Section>
          )}
          {session && (
            <Section title="Execute Session">
              <button type="button" onClick={handleSession}>
                Execute Session
              </button>
            </Section>
          )}
        </>
      )}
    </div>
  );
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
