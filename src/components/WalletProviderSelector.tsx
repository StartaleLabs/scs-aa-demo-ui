import { useWalletProvider } from "../contexts/WalletProviderContext";
import { WALLET_PROVIDERS } from "../config/walletProviders";

export function WalletProviderSelector() {
  const { selectedProvider, setSelectedProvider } = useWalletProvider();

  // Ensure Dynamic is first
  const providers = [
    WALLET_PROVIDERS.find(p => p.type === "dynamic"),
    WALLET_PROVIDERS.find(p => p.type === "privy"),
  ];

  return (
    <div className="wallet-provider-selector header-variant">
      <span className="selector-heading">choose login provider</span>
      <div className="selector-buttons-row">
        {providers.map((provider) => (
          provider ? (
            <button
              type="button"
              key={provider.type}
              className={`provider-button header-variant ${selectedProvider === provider.type ? "selected" : ""}`}
              onClick={() => setSelectedProvider(provider.type)}
            >
              {provider.name}
            </button>
          ) : null
        ))}
      </div>
      <style>{`
        .wallet-provider-selector.header-variant {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.2rem;
          padding: 0;
          margin: 0;
          background: none;
          box-shadow: none;
          max-width: none;
        }
        .selector-heading {
          font-size: 0.82rem;
          color: #888;
          font-weight: 500;
          margin-bottom: 0.1rem;
          margin-right: 2px;
          letter-spacing: 0.01em;
        }
        .selector-buttons-row {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
        }
        .provider-button.header-variant {
          padding: 0.3rem 0.9rem;
          font-size: 0.95rem;
          border-radius: 0.4rem;
          border: 1.5px solid #e2e8f0;
          background: white;
          color: #222;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.18s;
          min-width: 80px;
        }
        .provider-button.header-variant.selected {
          border-color: #676FFF;
          background: #f8f9ff;
          color: #222;
        }
        .provider-button.header-variant:hover {
          border-color: #676FFF;
        }
      `}</style>
    </div>
  );
} 