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

- `@zerodev/sdk`: For creating and managing ERC-7579 Kernel accounts.
- `@rhinestone/module-sdk`: Provides session and recovery modules.
- `viem`: Ethereum utility library for encoding, signing, and interacting with smart contracts.
- `wagmi`: React hooks for Ethereum.

### Important Smart Contracts

- **EntryPoint Contract** (`ENTRY_POINT_ADDRESS`): Facilitates user operations.
- **Kernel Factory** (`KERNEL_FACTORY_ADDRESS`): Used for smart account creation.
- **DiceRollLedger** (`DICE_ROLL_LEDGER_ADDRESS`): Custom contract that records dice roll results.
- **Smart Sessions Module** (`SMART_SESSIONS_MODULE_ADDRESS`): Enables session-based interactions.
- **Social Recovery Module** (`ACCOUNT_RECOVERY_MODULE_ADDRESS`): Provides account recovery functionality.

### Custom Implementation Steps

1. **Initialize the Public Client**

   - Use `viem` to connect to the target chain.

   ```typescript
   const publicClient = createPublicClient({
     transport: http(MINATO_RPC),
     chain: soneiumMinato,
   });
   ```

2. **Create a Kernel Smart Account**

   - Utilize `@zerodev/sdk` to instantiate a smart account.

   ```typescript
   const account = await createKernelAccount(publicClient, {
     plugins: { sudo: ecdsaValidator },
     entryPoint: { address: ENTRY_POINT_ADDRESS, version: "0.7" },
     kernelVersion: KERNEL_V3_2,
     factoryAddress: KERNEL_FACTORY_ADDRESS,
     accountImplementationAddress: KERNEL_IMPLEMENTATION_ADDRESS,
   });
   ```

3. **Install Social Recovery Module (Optional)**

   - Set up recovery guardians using `getSocialRecoveryValidator` from `@rhinestone/module-sdk`.
   - Install it via the `kernelClient.installModule()` function.

4. **Enable Smart Session Module**

   - Instantiate the session module with `getSmartSessionsValidator`.
   - Install the module and configure it for executing transactions without signing.

5. **Create a Session for Transaction Execution**

   - Define permissions for allowed contract calls (e.g., the dice roll function).
   - Enable the session by calling the `enableSessions` function on the Smart Session contract.

6. **Send Transactions Using Session Keys**

   - Sign transactions using a generated session key.
   - The app automatically prepares and sends user operations via the Kernel client.

7. **Interact with Custom Contracts**

   - Encode function calls using `viem`:

   ```typescript
   const encodedData = encodeFunctionData({
     abi: DiceRollLedgerAbi,
     functionName: "writeDiceRoll",
     args: [BigInt(rollValue)],
   });
   ```

---

## 📄 Additional Notes

- The app utilizes ERC-7579-compliant smart accounts, providing modular security.
- Dice roll results are transparently stored on-chain for verifiability.
- The demo showcases advanced account abstraction features, including social recovery and session execution.

## 🔗 Resources

- [ZeroDev SDK Documentation](https://docs.zerodev.app/)
- [Rhinestone Module SDK](https://docs.rhinestone.io/)
- [ERC-7579 Standard Proposal](https://eips.ethereum.org/EIPS/eip-7579)
- [Viem Documentation](https://viem.sh/)
