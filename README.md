# Smart Account Dice Roll Demo

This demo showcases a decentralized dice-rolling game that utilizes smart accounts (ERC-7579) and session-based execution. By using session keys, users can roll dice without needing to sign every transaction, enhancing UX while maintaining security.

It also features optional social recovery functionality.

Currently, the demo utilizes ZeroDev's Kernel smart contract wallet implementation, but that could be changed in the future.

---

## 🚀 How to Use the Demo

### Prerequisites

- A web3 wallet (e.g., MetaMask) connected to the [**Soneium Minato**](https://soneium-minato.blockscout.com/) test network.
- All operations are funded by a paymaster, so no funds are needed in the wallet

### Steps

1. **Connect Your Wallet**

   - Open the application and connect your web3 wallet.

2. **Instantiate a Smart Account**

   - Click on "Get a new smart account instance."
   - Initial nonce is set to 0
   - Optionally, set a custom nonce for account generation.
   - Once successful, your smart account address will be displayed.
   - Clicking the button with a different nonce will instantiate a new smart account

3. **(Optional) Install Social Recovery Module**

   - Input two guardian addresses.
   - Click "Install Recovery Module" to enable account recovery features on the smart account.

4. **Install the Session Module**

   - Click "Install Session Module."
   - The session module allows for transaction execution without wallet confirmation.

5. **Create a New Session**

   - After installing the session module, click "Create a new Session."
   - This creates a session that allows rolling dice without signing every transaction.

6. **Play the Dice Game**

   - Once a session is active, roll the dice using the UI.
   - The result is written on-chain without additional signature prompts.
   - Your roll history and score are fetched directly from the smart contract.

---

## 🔧 How to Create a Custom UI

This section details the core technologies, smart contracts, and SDKs used in the demo so you can create your own custom interface.

### Key Libraries and SDKs
  - `rhinestone/module-sdk`, for interaction with ERC-7579 modules
  - `@zerodev/sdk` and `@zerodev/ecdsa-validator`, instantiate and manage Kernel accounts
  - `permissionless`, for extending the clients with ERC-7579 Actions
  - `viem` for SC interaction from TS
  - and optionally `wagmi` for ReactJs integration

### Smart Contracts on Soneium Minato

```
  # Standard entrypoint v0.7.0 address
  ENTRY_POINT_ADDRESS=0x0000000071727De22E5E9d8BAf0edAc6f37da032

  # Startale's paymaster
  PAYMASTER_CONTRACT_ADDRESS=0xb28E459aB4a61e78b27768A37C92d902CA89F181

  # Kernel account related contracts
  KERNEL_FACTORY_ADDRESS=0x8Adb765F983e5a44cB5bF76fEDdf40691c623e39
  KERNEL_IMPLEMENTATION_ADDRESS=0x4f7001e739Ad2be647594384A4f6f064502f022F
  STAKER_FACTORY_ADDRESS=0x009C7A021993A2f336147fa4DE495BA86ed466bf
  ECDSA_VALIDATOR_ADDRESS=0xd130f3425Fd31818AA1ccCf6aa525aB157909491

  # ERC-7579 compatible modules
  ACCOUNT_RECOVERY_MODULE_ADDRESS=0x29c3e3268e36f14A4D1fEe97DD94EF2F60496a2D
  SMART_SESSIONS_MODULE_ADDRESS=0x716BC27e1b904331C58891cC3AB13889127189a7
  OWNABLE_VALIDATOR_ADDRESS=0x7C5F70297f194800D8cE49F87a6b29f8d88f38Ad

  # Demo contract
  DICE_ROLL_LEDGER_ADDRESS=0x298D8873bA2B2879580105b992049201B60c1975
```

### Service Urls

```
MINATO_RPC=https://rpc.minato.soneium.org
BUNDLER_URL=https://soneium-minato.bundler.scs.startale.com?apikey=[API_KEY]
PAYMASTER_SERVICE_URL=https://paymaster.scs.startale.com/v1?apikey=[API_KEY]

```

### Custom Implementation Steps

1. **Initialize clients**

   - Use `viem` to connect to the target chain.

   ```typescript
    import {createBundlerClient, createPaymasterClient } from "viem/account-abstraction";
    import { soneiumMinato } from "viem/chains";
    import {
      createPublicClient
      encodePacked,
      encodeAbiParameters,
      encodeFunctionData,
      getAccountNonce,
    } from "viem";

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
   ```

2. **Create a Kernel Smart Account and a client**

   - Utilize `@zerodev/sdk` to instantiate a smart account.
   - Use ECDSA validator as a root validator
   - for backend use a different `signer` instance (f.ex. `viem`'s local wallet)
   - use `KernelAccountClient` for further interaction with the account

   ```typescript
    import { signerToEcdsaValidator } from "@zerodev/ecdsa-validator";
    import { createKernelAccount, createKernelAccountClient } from "@zerodev/sdk";
    import { erc7579Actions } from "permissionless/actions/erc7579";

    // Get an ECDSA validator instance based on the connected signer
    const ecdsaValidator = await signerToEcdsaValidator(publicClient, {
      signer: window.ethereum,
      entryPoint: { address: ENTRY_POINT_ADDRESS, version: "0.7" },
      kernelVersion: KERNEL_V3_2,
      validatorAddress: ECDSA_VALIDATOR_ADDRESS,
    });

    // Create a Kernel account with our ECDSA plugin
    const account = await createKernelAccount(publicClient, {
      plugins: { sudo: ecdsaValidator },
      entryPoint: { address: ENTRY_POINT_ADDRESS, version: "0.7" },
      kernelVersion: KERNEL_V3_2,
      factoryAddress: KERNEL_FACTORY_ADDRESS,
      accountImplementationAddress: KERNEL_IMPLEMENTATION_ADDRESS,
      useMetaFactory: true,
      metaFactoryAddress: STAKER_FACTORY_ADDRESS,
      index: BigInt(0), // Optionally omit, or change, acts as nonce
    });

    const scsContext = { calculateGasLimits: false, policyId: "sudo" };

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
   ```
Note: Paymaster actions and userOperation gas estimation are overridden for compatibility with the current version of SCS paymaster.

3. **Install Social Recovery Module (Optional)**

    - Set up recovery guardians using `getSocialRecoveryValidator` from `@rhinestone/module-sdk`.
    - Install it via the `kernelClient.installModule()` function.
    ```typescript

    const socialRecovery = getSocialRecoveryValidator({
      // SET INITIAL CONFIG
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

      const installModuleUserOpHash = await kernelClient.sendUserOperation({
        callData: await kernelClient.account.encodeCalls(calls),
      });
   ```

4. **Enable Smart Session Module**

   - Instantiate the session module with `getSmartSessionsValidator`.
   - Install the module and configure it for executing transactions without signing.

    ```typescript
    const smartSessions = getSmartSessionsValidator({});
    console.log("Smart Sessions: ", smartSessions);

    // Override our own addresses
    smartSessions.address = SMART_SESSIONS_MODULE_ADDRESS;
    smartSessions.module = SMART_SESSIONS_MODULE_ADDRESS;

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

    // Check
    const isSmartSessionsModuleInstalled =
          await kernelClient.isModuleInstalled(smartSessions);
    ```

5. **Create a Session for Transaction Execution**

   - Define permissions for allowed contract calls (e.g., the dice roll function).
   - Enable the session by calling the `enableSessions` function on the Smart Session contract.

   ```typescript

    // Generate, or use existing
    const sessionOwnerPk = generatePrivateKey();
    const sessionOwner = privateKeyToAccount(sessionOwnerPk);

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

    const sessions: Session[] = [session];

    const preparePermissionData = encodeFunctionData({
      abi: enablingSessionsAbi,
      functionName: "enableSessions",
      args: [sessions],
    });

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
   ```

6. **Send Transactions Using Session Keys**

   - Sign transactions using a generated session key.
   - The app automatically prepares and sends user operations via the Kernel client.

    ```Typescript

    import {
      SmartSessionMode,
      getOwnableValidatorMockSignature,
      getPermissionId,
    } from "@rhinestone/module-sdk";

    const permissionId = getPermissionId({
      session,
    });

    const nonceKey = encodeValidatorNonceKey({
      validator: SMART_SESSIONS_MODULE_ADDRESS,
    });

    const nonce = await getAccountNonce(publicClient, {
      address: smartAccount?.address as Address,
      entryPointAddress: ENTRY_POINT_ADDRESS,
      key: nonceKey,
    });

    const mockSig = getOwnableValidatorMockSignature({
      threshold: 1,
    });

    mySigEncoded = encodePacked(
      ["bytes1", "bytes32", "bytes"],
      [SmartSessionMode.USE, permissionId, mockSig],
    );

    // Contract call enabled in session creation
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

    const userOpHashToSign = getUserOperationHash({
      chainId: chain.id,
      entryPointAddress: ENTRY_POINT_ADDRESS,
      entryPointVersion: "0.7",
      userOperation,
    });

    const sessionKeySignature = await sessionOwner.signMessage({
      message: { raw: userOpHashToSign },
    });

    const userOpSignature = encodePacked(
      ["bytes1", "bytes32", "bytes"],
      [SmartSessionMode.USE, permissionId, sessionKeySignature],
    );

    userOperation.signature = userOpSignature;

    await kernelClient.sendUserOperation(userOperation as any);
    ```

## 🔗 Resources

- [ZeroDev SDK Documentation](https://docs.zerodev.app/)
- [Rhinestone Module SDK](https://docs.rhinestone.io/)
- [ERC-7579 Standard Proposal](https://eips.ethereum.org/EIPS/eip-7579)
- [Viem Documentation](https://viem.sh/)
