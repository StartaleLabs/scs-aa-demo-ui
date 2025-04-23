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
  PAYMASTER_SERVICE_URL: "https://dev.paymaster.scs.startale.com/v1?apikey=scsadmin-paymaster",
  DICE_ROLL_LEDGER_ADDRESS: "0x298D8873bA2B2879580105b992049201B60c1975" as Address,
  ACCOUNT_RECOVERY_MODULE_ADDRESS: "0xA04D053b3C8021e8D5bF641816c42dAA75D8b597" as Address,
  NEXUS_K1_VALIDATOR_ADDRESS: "0x9130927806aC54F93Feb58Eb459c08dcA7D116F8" as Address,
  NEXUS_K1_VALIDATOR_FACTORY_ADDRESS: "0x2ecd86799137FA35De834Da03D876bcc363ec0c3" as Address,
  MOCK_ATTESTER_ADDRESS: "0xaeD4d8bAa80948d54d33dE041513D30124e1Ae3f" as Address,
};
