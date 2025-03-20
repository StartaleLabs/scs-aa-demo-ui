# Smart Account Dice Roll Demo

This demo showcases a decentralized dice-rolling game that utilizes smart accounts (ERC-7579) and session-based execution. By using session keys, users can roll dice without needing to sign every transaction, enhancing UX while maintaining security.

It also features optional social recovery functionality.

Currently, the demo utilizes Bicomomy's Nexus smart contract wallet implementation with Rhinestone's 7579 modules.

---

## 🚀 How to Use the Demo

### Prerequisites

- A web3 wallet (e.g., MetaMask) connected to the [**Soneium Minato**](https://soneium-minato.blockscout.com/) test network.
  - This is needed to instantiate a smart contract wallet. In a production environment, this step would be done by the service backend, or via social login.
- All operations are funded by a paymaster, so no funds are needed in the wallet

### Steps

1. **Connect Your Wallet**

   - Open the application and connect your web3 wallet.

2. **Instantiate a Smart Account**

   - An account is automatically instantiated, the address is displayed in the output area

3. **(Optional) Add recovery keys**

   - Input a guardian address, and click "Add guardian".
   - On the firs guardian add, the SocialRecovery module is installed first, so two signatures are needed
   - You can add and remove more guardian addresses
   - A minimum of one address must be present after the module is installed

4. **Start the game**

   - Clicking the "New game" button will install the SmartSession module (only on first use), and create a session.
   - Session will be stored in local storage so the game can be played instantly on the next visit

6. **Play the Dice Game**

   - Once a session is active, roll the dice using the UI.
   - The result is written on-chain without additional signature prompts.
   - Your roll history and score are fetched directly from the smart contract.

---

## 🔧 How to Create a Custom UI

This section details the core technologies, smart contracts, and SDKs used in the demo so you can create your own custom interface.

### Key Libraries and SDKs
  - `rhinestone/module-sdk`, for interaction with ERC-7579 modules
    - NOTE: for compatibility reasons, the module version is locked to `0.2.3`
  - `@biconomy/abstractjs` instantiate and manage Nexus accounts
  - `viem` for SC interaction from TS
  - and optionally `wagmi` for ReactJs integration

### Smart Contracts on Soneium Minato

```
  # Standard entrypoint v0.7.0 address
  ENTRY_POINT_ADDRESS=0x0000000071727De22E5E9d8BAf0edAc6f37da032

  # Nexus smart contract wallet related contracts
  ACCOUNT_RECOVERY_MODULE_ADDRESS=0xA04D053b3C8021e8D5bF641816c42dAA75D8b597
  NEXUS_K1_VALIDATOR_ADDRESS=0x9130927806aC54F93Feb58Eb459c08dcA7D116F8
  NEXUS_K1_VALIDATOR_FACTORY_ADDRESS=0x2ecd86799137FA35De834Da03D876bcc363ec0c3
  MOCK_ATTESTER_ADDRESS="0xaeD4d8bAa80948d54d33dE041513D30124e1Ae3f"

  # ERC-7579 compatible modules
  ACCOUNT_RECOVERY_MODULE_ADDRESS=0x29c3e3268e36f14A4D1fEe97DD94EF2F60496a2D
  SMART_SESSIONS_MODULE_ADDRESS=0x716BC27e1b904331C58891cC3AB13889127189a7

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

2. **Create a Nexus Smart Account and a client**

   - Utilize `@biconomy/abstractjs` to instantiate a smart account.
   - Use `window.ethereum` provider as a signer
   - for backend use a different `signer` instance (f.ex. `viem`'s local wallet)
   - use `createSmartAccountClient` for further interaction with the account

   ```typescript
   import { type NexusAccount, type NexusClient, createSmartAccountClient, toNexusAccount } from "@biconomy/abstractjs";

    // Create a Nexus account
    const nexusAccountInstance = await toNexusAccount({
      signer: window.ethereum,
      chain,
      transport: http(),
      attesters: [MOCK_ATTESTER_ADDRESS],
      factoryAddress: NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
      validatorAddress: NEXUS_K1_VALIDATOR_ADDRESS,
      index: BigInt(0), //Nonce for account instance
    });

    const scsContext = { calculateGasLimits: false, policyId: "sudo" };

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
   ```
Note: Paymaster actions and userOperation gas estimation are overridden for compatibility with the current version of SCS paymaster.

3. **Install Social Recovery Module (Optional)**

    - Set up recovery guardians using `getSocialRecoveryValidator` from `@rhinestone/module-sdk`.
    - Install it via the `nexusClient.installModule()` function.
    ```typescript

    const socialRecovery = getSocialRecoveryValidator({
      // SET INITIAL CONFIG
      threshold: 1,
      guardians: [guardianAddress],
    });

    const installModuleUserOpHash = await nexusClient.installModule({
        module: socialRecoveryModule,
      });

      //Add a new guardian
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

    // Remove guardian
    const SENTINEL_ADDRESS = "0x0000000000000000000000000000000000000001";
    const index = guardians.indexOf(guardian);
    if (index < 0) {
      console.error("Guardian not found in list");
      return;
    }

    const prevGuardian = index === 0 ? SENTINEL_ADDRESS : guardians[index - 1];
    await displayGasOutput();
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

    // Get guardians list
    const accountGuardians = await publicClient.readContract({
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      abi: SocialRecoveryAbi,
      functionName: "getGuardians",
      args: [nexusClient.account.address],
    });
   ```

4. **Enable Smart Session Module**

   - Instantiate the session module with `getSmartSessionsValidator`.
   - Install the module and configure it for executing transactions without signing.

    ```typescript
    const sessionsModule = getSmartSessionsValidator({});

    const opHash = await nexusClient.installModule({
          module: sessionsModule,
        });

    // Check
    const isSmartSessionsModuleInstalled = await nexusClient.isModuleInstalled({
      module: sessionsModule,
    });
    ```

5. **Create a Session for Transaction Execution**

   - Define permissions for allowed contract calls (e.g., the dice roll function).
   - Enable the session by calling the `enableSessions` function on the Smart Session contract.

   ```typescript

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
   ```

6. **Send Transactions Using Session Keys**

   - Sign transactions using a generated session key.
   - The app automatically prepares and sends user operations via the Nexus client.

    ```Typescript

    const isEnabled = await isSessionEnabled({
        client: nexusClient.account.client as PublicClient,
        account: {
          type: "nexus",
          address: nexusClient.account.address,
          deployedOnChains: [chain.id],
        },
        permissionId: activeSession.moduleData.permissionIds[0],
      });

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

      const userOpHash = await useSmartSessionNexusClient.usePermission({
        calls: [
          {
            to: DICE_ROLL_LEDGER_ADDRESS,
            data: callData,
          },
        ],
      });
    ```

## 🔗 Resources

- [Biconomy AbstractJS Documentation](https://docs.biconomy.io/abstractjs)
- [Rhinestone Module SDK](https://docs.rhinestone.io/)
- [ERC-7579 Standard Proposal](https://eips.ethereum.org/EIPS/eip-7579)
- [Viem Documentation](https://viem.sh/)
