import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import App from "./App.tsx";
import { config } from "./config.ts";
import { OutputProvider } from "./providers/OutputProvider.tsx";
import { StartaleProvider } from "./providers/StartaleAccountProvider.tsx";

const root = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

createRoot(root).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "0d1b1dd7-e4f9-44dc-992c-408fa880f097",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <OutputProvider>
              <StartaleProvider>
                <App />
              </StartaleProvider>
            </OutputProvider>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  </StrictMode>,
);
