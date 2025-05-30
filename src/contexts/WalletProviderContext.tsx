import { createContext, useContext, useState, type ReactNode } from "react";
import type { WalletProvider } from "../config/walletProviders";

interface WalletProviderContextType {
  selectedProvider: WalletProvider;
  setSelectedProvider: (provider: WalletProvider) => void;
  isConnecting: boolean;
  setIsConnecting: (connecting: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

const WalletProviderContext = createContext<WalletProviderContextType | undefined>(undefined);

export function WalletProviderProvider({ children }: { children: ReactNode }) {
  const [selectedProvider, setSelectedProvider] = useState<WalletProvider>("dynamic");
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProviderChange = (newProvider: WalletProvider) => {
    setSelectedProvider(newProvider);
  };

  return (
    <WalletProviderContext.Provider
      value={{
        selectedProvider,
        setSelectedProvider: handleProviderChange,
        isConnecting,
        setIsConnecting,
        error,
        setError,
      }}
    >
      {children}
    </WalletProviderContext.Provider>
  );
}

export function useWalletProvider() {
  const context = useContext(WalletProviderContext);
  if (context === undefined) {
    throw new Error("useWalletProvider must be used within a WalletProviderProvider");
  }
  return context;
} 