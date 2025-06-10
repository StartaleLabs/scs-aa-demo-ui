import type { Address } from "viem";
import { soneiumMinato } from "viem/chains";
import { createConfig, http } from "wagmi";

export const config = createConfig({
  chains: [soneiumMinato],
  transports: {
    [soneiumMinato.id]: http(),
  }
})

export const AA_CONFIG = {
  MINATO_RPC: "https://rpc.minato.soneium.org",
  // Todo: Update and get from env
  // Update with prod bundler url and prod paymaster url and test on minato
  BUNDLER_URL:
    "https://soneium-minato.bundler.scs.startale.com?apikey=admin_a4fngiki7JaTk9QEixZbVzjXF6XAp3km",
  PAYMASTER_SERVICE_URL:
    "https://paymaster.scs.startale.com/v1?apikey=admin_swLZRHfWwYu5ZeFJCjtZABADZb",
  DICE_ROLL_LEDGER_ADDRESS: "0x298D8873bA2B2879580105b992049201B60c1975" as Address,
  ACCOUNT_RECOVERY_MODULE_ADDRESS: "0xA04D053b3C8021e8D5bF641816c42dAA75D8b597" as Address,
  MOCK_ATTESTER_ADDRESS: "0xaeD4d8bAa80948d54d33dE041513D30124e1Ae3f" as Address,
  ECDSA_VALIDATOR_ADDRESS: "0x00000072F286204Bb934eD49D8969E86F7dEC7b1" as Address,
  PAYMASTER_ID: "pm_test_self_funded",
  ASTR_TOKEN_ADDRESS: "0x26e6f7c7047252DdE3dcBF26AA492e6a264Db655" as Address,
};
