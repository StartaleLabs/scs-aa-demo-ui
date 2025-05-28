import { soneiumMinato } from "viem/chains";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import type { PrivyClientConfig } from "@privy-io/react-auth";

export type WalletProvider = "privy" | "dynamic";

export interface WalletProviderConfig {
  type: WalletProvider;
  name: string;
  description: string;
  icon?: string;
}

export const WALLET_PROVIDERS: WalletProviderConfig[] = [
  {
    type: "privy",
    name: "Privy",
    description: "Connect with email, social, or existing wallet",
  },
  {
    type: "dynamic",
    name: "Dynamic",
    description: "Connect with your existing wallet",
  },
];

export const PRIVY_CONFIG = {
  appId: "cm8pwpq5r021np8n16w4njn7e",
  config: {
    loginMethods: ["email", "google", "wallet"] as PrivyClientConfig["loginMethods"],
    appearance: {
      theme: "light" as const,
      accentColor: "#676FFF" as const,
    },
    embeddedWallets: {
      createOnLogin: "all-users" as const,
      showWalletUIs: false,
    },
    supportedChains: [soneiumMinato],
    defaultChain: soneiumMinato,
  } satisfies PrivyClientConfig,
};

export const DYNAMIC_CONFIG = {
  environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
  walletConnectors: [EthereumWalletConnectors],
  chainConfig: {
    chain: soneiumMinato,
  },
}; 