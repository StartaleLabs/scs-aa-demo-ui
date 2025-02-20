import {
  type Session,
  SmartSessionMode,
  encodeValidationData,
  getOwnableValidator,
  getOwnableValidatorMockSignature,
  getPermissionId,
  getSmartSessionsValidator,
  getSocialRecoveryValidator,
  getSudoPolicy,
  getTrustAttestersAction,
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
import { OwnableValidatorAbi } from "./abi/OwnableValidator";
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
  RHINESTONE_ATTESTER_ADDRESS,
  MOCK_ATTESTER_ADDRESS,
  OWNABLE_VALIDATOR_ADDRESS,
  COUNTER_CONTRACT_ADDRESS,
  SMART_SESSIONS_MODULE_ADDRESS,
} = AA_CONFIG;
import { getAccountNonce } from "@zerodev/sdk/actions";
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

export function SmartAccount() {
  const connectedAccount = useAccount();
  const { isConnected, address } = connectedAccount;

  // steps:
  // 0 = waiting for connection;
  // 1 = account instantiated;
  // 2 = sponsored tx sent;
  // 3 = recovery module installed;
  // 4 = session module installed.

  const [step, setStep] = useState(0);
  const [smartAccount, setSmartAccount] = useState<CreateKernelAccountReturnType>();
  const [status, setStatus] = useState("");
  const [guardian1, setGuardian1] = useState<`0x${string}`>(
    "0xa277F2011A116034a459D61bC1CAE0ddAc4f5D15",
  );
  const [guardian2, setGuardian2] = useState<`0x${string}`>(
    "0x2f1e36d9Caed0EEF7341ade09BD7238b4E8794aa",
  );
  useEffect(() => {
    if (isConnected && address) {
      setStatus("Wallet connected");
      setStep(1);
    }
  }, [isConnected, address]);

  const handleInstantiateSmartAccount = async () => {
    setStatus("Initializing smart account...");
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
        index: BigInt(2022),
      });

      setSmartAccount(account);
      setStatus("Smart account initialized.");
      setStep(2);
    } catch (error) {
      setStatus(`Error initializing smart account: ${(error as Error).message}`);
    }
  };

  const handleInstallRecoveryModule = async () => {
    const kernelClient = createKernelAccountClient({
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

    const socialRecovery = getSocialRecoveryValidator({
      threshold: 2,
      guardians: [guardian1, guardian2],
    });

    socialRecovery.module = ACCOUNT_RECOVERY_MODULE_ADDRESS;
    socialRecovery.address = ACCOUNT_RECOVERY_MODULE_ADDRESS;

    const initDataArg = encodePacked(
      ["address", "bytes"],
      [
        zeroAddress,
        encodeAbiParameters(
          [{ type: "bytes" }, { type: "bytes" }],
          [socialRecovery.initData || "0x", "0x"],
        ),
      ],
    );

    if (!smartAccount) {
      throw new Error("Smart account not initialized");
    }
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

    const isAccountRecoveryModuleInstalled = await kernelClient.isModuleInstalled(socialRecovery);
    console.log("Is Module Installed: ", isAccountRecoveryModuleInstalled);

    if (!isAccountRecoveryModuleInstalled) {
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
      const isModuleInstalledNow = await kernelClient.isModuleInstalled(socialRecovery);
      console.log("Is Module Installed: ", isModuleInstalledNow);
      setStatus("Smart account initialized.");
    } else {
      console.log("Module is already installed");
      setStatus("Module is already installed");
    }
    setStep(3);
  };

  const handleInstallSessionModule = async () => {

    const kernelClient = createKernelAccountClient({
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
            maxFeePerGas: BigInt(100000000),
            maxPriorityFeePerGas: BigInt(100000000),
          };
        },
      },
    }).extend(erc7579Actions());

    const smartSessions = getSmartSessionsValidator({});
    console.log("Smart Sessions: ", smartSessions);

    // Todo: make this work with module-sdk addresses of smart session validator and ownable validator
    // Override our own addresses
    smartSessions.address = SMART_SESSIONS_MODULE_ADDRESS;
    smartSessions.module = SMART_SESSIONS_MODULE_ADDRESS;

    const isSmartSessionsModuleInstalled = await kernelClient.isModuleInstalled(smartSessions);
    console.log("Is Smart Sessions Module Installed: ", isSmartSessionsModuleInstalled);

    if (!isSmartSessionsModuleInstalled) {
      // Todo: verify if registering a selector is needed with USE mode as well.
      const context = encodePacked(
        ["address", "bytes"],
        [
          zeroAddress,
          encodeAbiParameters(
            [{ type: "bytes" }, { type: "bytes" }, { type: "bytes" }],
            [smartSessions.initData || "0x", "0x", "0xe9ae5c53"],
          ),
        ],
      );

      const opHash = await kernelClient.installModule({
        type: smartSessions.type,
        address: SMART_SESSIONS_MODULE_ADDRESS,
        context: context,
      });

      console.log("Operation hash: ", opHash);

      const result = await bundlerClient.waitForUserOperationReceipt({
        hash: opHash,
      });
      console.log("Operation result: ", result.receipt.transactionHash);

      console.log("Smart Sessions Module installed successfully");

      const isSmartSessionsModuleInstalledNow = await kernelClient.isModuleInstalled(smartSessions);
      console.log("Is Smart Sessions Module Installed Now: ", isSmartSessionsModuleInstalledNow);
    } else {
      console.log("Module is already installed");
    }

    const trustAttestersAction = getTrustAttestersAction({
      threshold: 1,
      attesters: [
        RHINESTONE_ATTESTER_ADDRESS, // Rhinestone Attester
        MOCK_ATTESTER_ADDRESS, // Mock Attester - do not use in production
      ],
    });

    const userOpHash1 = await kernelClient.sendUserOperation({
      account: smartAccount,
      calls: [
        {
          to: trustAttestersAction.target,
          value: BigInt(0),
          data: trustAttestersAction.callData,
        },
      ],
    });

    const receipt1 = await bundlerClient.waitForUserOperationReceipt({
      hash: userOpHash1,
    });

    console.log("User Operation hash: ", receipt1.receipt.transactionHash);
    console.log("Trust Attesters action executed successfully");

    // Followed below as well
    // https://docs.rhinestone.wtf/module-registry/usage/mock-attestation

    // Install Ownable Validator

    const ownableValidator = getOwnableValidator({
      owners: [connectedAccount.address as Address],
      threshold: 1,
      hook: zeroAddress,
    });

    ownableValidator.address = OWNABLE_VALIDATOR_ADDRESS;
    ownableValidator.module = OWNABLE_VALIDATOR_ADDRESS;

    ownableValidator.initData = encodePacked(
      ["address", "bytes"],
      [
        zeroAddress,
        encodeAbiParameters(
          [{ type: "bytes" }, { type: "bytes" }],
          [ownableValidator.initData, "0x"],
        ),
      ],
    );
    console.log("Ownable Validator address: ", ownableValidator);
    console.log("Ownable Validator: ", ownableValidator);

    const opHashInstallOwnableVal = await kernelClient.installModule(ownableValidator);
    console.log("Operation hash: ", opHashInstallOwnableVal);
    const result1 = await bundlerClient.waitForUserOperationReceipt({
      hash: opHashInstallOwnableVal,
    });
    console.log("Operation result to install ownableValidator: ", result1.receipt.transactionHash);
    console.log("Ownable Validator installed successfully");

    const owners = (await publicClient.readContract({
      address: OWNABLE_VALIDATOR_ADDRESS,
      abi: OwnableValidatorAbi,
      functionName: "getOwners",
      args: [smartAccount?.address],
    })) as Address[];
    console.log("All Owners: ", owners);

    // Now that the smart session is installed and account has trusted attesters..

    // Note: Can keep fixed session owner
    const sessionOwnerPk = generatePrivateKey();
    const sessionOwner = privateKeyToAccount(sessionOwnerPk);
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

    const permissionId = getPermissionId({
      session,
    });

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
    console.log("User Operation hash to enable session: ", receipt2.receipt.transactionHash);
    console.log("Session enabled successfully");

    // Now let's use it.. with session key signature.

    console.log("account address: ", smartAccount?.address);

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

    console.log("Counter state after session execution: ", counterStateAfter);


  };

  return (
    <div>
      <div>{status}</div>
      <button type="button" onClick={handleInstantiateSmartAccount}>
        Instantiate Smart Account
      </button>
      {smartAccount && <div>Smart account address: {smartAccount.address}</div>}
      {step >= 2 && (
        <div>
          <h2>Recovery module</h2>
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
          <button type="button" onClick={handleInstallRecoveryModule}>
            Install Recovery Module
          </button>
        </div>
      )}
      {step >= 2 && (
        <div>
          <h2>Session module</h2>
          <button type="button" onClick={handleInstallSessionModule}>
            Install Session Module
          </button>
        </div>
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
