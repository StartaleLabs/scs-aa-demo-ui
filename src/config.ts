import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import type { Address } from "viem";
import { soneiumMinato } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Soneium AA demo",
  projectId: "SCS_AA",
  chains: [soneiumMinato],
  ssr: false,
});

export const AA_CONFIG = {
  MINATO_RPC: "https://rpc.minato.soneium.org",
  BUNDLER_URL: "https://soneium-minato.dev.bundler.scs.startale.com?apikey=scsadmin",
  PAYMASTER_SERVICE_URL: import.meta.env.DEV
    ? "/api/dummy_key"
    : "https://dev.paymaster.scs.startale.com/v1/paymaster?apikey=scsadmin-paymaster",
  PASSKEY_SERVER_URL: "/passkey",
  ENTRY_POINT_ADDRESS: "0x0000000071727De22E5E9d8BAf0edAc6f37da032" as Address,
  PAYMASTER_CONTRACT_ADDRESS: "0xb28E459aB4a61e78b27768A37C92d902CA89F181" as Address,
  KERNEL_FACTORY_ADDRESS: "0x8Adb765F983e5a44cB5bF76fEDdf40691c623e39" as Address,
  KERNEL_IMPLEMENTATION_ADDRESS: "0x4f7001e739Ad2be647594384A4f6f064502f022F" as Address,
  STAKER_FACTORY_ADDRESS: "0x009C7A021993A2f336147fa4DE495BA86ed466bf" as Address,
  ECDSA_VALIDATOR_ADDRESS: "0xd130f3425Fd31818AA1ccCf6aa525aB157909491" as Address,
  DICE_ROLL_LEDGER_ADDRESS: "0x298D8873bA2B2879580105b992049201B60c1975" as Address,

  ACCOUNT_RECOVERY_MODULE_ADDRESS: "0x29c3e3268e36f14A4D1fEe97DD94EF2F60496a2D" as Address,
  SMART_SESSIONS_MODULE_ADDRESS: "0x66B5bcA85a5895ea7Bc8810F05Be32ee1d853cb3" as Address,
  UNI_ACTION_POLICY_MODULE_ADDRESS: "0xefAF3CA790c54eB224e0a2372E17dcDfcdEB4F14" as Address,

  OWNABLE_VALIDATOR_ADDRESS: "0x7C5F70297f194800D8cE49F87a6b29f8d88f38Ad" as Address,
  NEXUS_K1_VALIDATOR_ADDRESS: "0x9130927806aC54F93Feb58Eb459c08dcA7D116F8" as Address,
  NEXUS_K1_VALIDATOR_FACTORY_ADDRESS: "0x2ecd86799137FA35De834Da03D876bcc363ec0c3" as Address,
  MOCK_ATTESTER_ADDRESS: "0xaeD4d8bAa80948d54d33dE041513D30124e1Ae3f" as Address,
};
