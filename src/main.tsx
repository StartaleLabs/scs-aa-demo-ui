import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { PrivyProvider } from "@privy-io/react-auth";
import { soneiumMinato } from "viem/chains";
import App from "./App.tsx";
import { config } from "./config.ts";

const root = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

createRoot(root).render(
  <StrictMode>
    <PrivyProvider
      appId="cm8pwpq5r021np8n16w4njn7e"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "google", "wallet"],
        appearance: {
          theme: "light",
          accentColor: "#676FFF",
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "all-users",
          showWalletUIs: false,
        },
        supportedChains: [soneiumMinato],
        defaultChain: soneiumMinato,
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiProvider>
    </PrivyProvider>
  </StrictMode>,
);
