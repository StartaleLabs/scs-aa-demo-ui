import { usePrivy } from "@privy-io/react-auth";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useWalletProvider } from "../contexts/WalletProviderContext";

// Privy-specific wallet component
function PrivyWalletContent() {
  const { login, logout, ready, authenticated } = usePrivy();
  const { setIsConnecting, setError } = useWalletProvider();

  const handleLogout = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      await logout();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to disconnect from Privy");
    } finally {
      setIsConnecting(false);
    }
  };

  if (!ready) {
    return <div>Loading Privy...</div>;
  }

  return (
    <WalletUI
      isConnected={authenticated}
      onLogin={() => login()}
      onLogout={handleLogout}
      provider="Privy"
    />
  );
}

// Dynamic-specific wallet component
function DynamicWalletContent() {
  const { setShowAuthFlow, handleLogOut } = useDynamicContext();
  const isAuthenticated = useIsLoggedIn();
  const { setIsConnecting, setError } = useWalletProvider();

  const handleLogout = async () => {
    try {
      setIsConnecting(true);
      setError(null);
      await handleLogOut();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to disconnect from Dynamic");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <WalletUI
      isConnected={isAuthenticated}
      onLogin={() => setShowAuthFlow(true)}
      onLogout={handleLogout}
      provider="Dynamic"
    />
  );
}

// Shared UI component
function WalletUI({ 
  isConnected, 
  onLogout,
  onLogin,
  provider
}: { 
  isConnected: boolean; 
  onLogout: () => void;
  onLogin?: () => void;
  provider: string;
}) {
  return (
    <div>
      {isConnected ? (
        <button type="button" onClick={onLogout}>Disconnect</button>
      ) : (
        <button type="button" onClick={onLogin}>Connect with {provider}</button>
      )}
    </div>
  );
}

// Main Wallet component that selects the appropriate content
export function Wallet() {
  const { selectedProvider } = useWalletProvider();

  return selectedProvider === "privy" ? <PrivyWalletContent /> : <DynamicWalletContent />;
} 