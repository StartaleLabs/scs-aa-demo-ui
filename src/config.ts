import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import type { Address, Hex } from "viem";
import { http, createConfig } from "wagmi";
import { soneiumMinato } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

// export const config = createConfig({
//   chains: [soneiumMinato],
//   transports: {
//     [soneiumMinato.id]: http(),
//   },
//   connectors: [injected(), metaMask()],
// });

export const config = getDefaultConfig({
  appName: "Soneium AA demo",
  projectId: "SCS_AA",
  chains: [soneiumMinato],
  ssr: false,
});

export const AA_CONFIG = {
  MINATO_RPC: `https://soneium-minato.rpc.scs.startale.com?apikey=${import.meta.env.VITE_APP_SCS_RPC_API_KEY}`,
  BUNDLER_URL: `http://soneium-minato.dev.bundler.scs.startale.com?apikey=${import.meta.env.VITE_APP_SCS_BUNDLER_API_KEY}`,
  PAYMASTER_SERVICE_URL: "/api/paymaster/dummy_key",
  ENTRY_POINT_ADDRESS: "0x0000000071727De22E5E9d8BAf0edAc6f37da032" as Address,
  SIMPLE_ACCOUNT_FACTORY_ADDRESS: "0x91E60e0613810449d098b0b5Ec8b51A0FE8c8985",
  COUNTER_CONTRACT_ADDRESS: "0x6bcf154A6B80fDE9bd1556d39C9bCbB19B539Bd8" as Address,
  PAYMASTER_CONTRACT_ADDRESS: "0xb28E459aB4a61e78b27768A37C92d902CA89F181" as Address,
  KERNEL_FACTORY_ADDRESS: "0x8Adb765F983e5a44cB5bF76fEDdf40691c623e39" as Address,
  KERNEL_IMPLEMENTATION_ADDRESS: "0x4f7001e739Ad2be647594384A4f6f064502f022F" as Address,
  STAKER_FACTORY_ADDRESS: "0x009C7A021993A2f336147fa4DE495BA86ed466bf" as Address,
  ECDSA_VALIDATOR_ADDRESS: "0xd130f3425Fd31818AA1ccCf6aa525aB157909491" as Address,
  WEIGHTED_VALIDATOR_ADDRESS: "0x83797e1d6Ba2ae8D125EEf6B72E08ccb08b2FF2D" as Address,
  RECOVERY_ACTION_ADDRESS: "0x884030E76DF7F39E1775d1b7B2EE2FA0394735b7" as Address,
  ACCOUNT_RECOVERY_MODULE_ADDRESS: "0x29c3e3268e36f14A4D1fEe97DD94EF2F60496a2D" as Address,
  SMART_SESSIONS_MODULE_ADDRESS: "0x716BC27e1b904331C58891cC3AB13889127189a7" as Address,
  OWNABLE_VALIDATOR_ADDRESS: "0x7C5F70297f194800D8cE49F87a6b29f8d88f38Ad" as Address,
  RHINESTONE_ATTESTER_ADDRESS: "0x000000333034E9f539ce08819E12c1b8Cb29084d" as Address,
  MOCK_ATTESTER_ADDRESS: "0xA4C777199658a41688E9488c4EcbD7a2925Cc23A" as Address,
  REGISTRY_ADDRESS: "0x000000000069E2a187AEFFb852bF3cCdC95151B2" as Address,
  DICE_ROLL_LEDGER_ADDRESS: "0x298D8873bA2B2879580105b992049201B60c1975" as Address,
};
