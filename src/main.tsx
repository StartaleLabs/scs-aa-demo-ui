import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector';

import { soneiumMinato } from "viem/chains";

import App from "./App.tsx";
import { config } from "./config.ts";

const root = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

createRoot(root).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        environmentId: "f0b977d0-b712-49f1-af89-2a24c47674da",
        walletConnectors: [EthereumWalletConnectors]
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <App />
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  </StrictMode>,
);
