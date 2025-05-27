import { useDynamicContextcCuseIsLoggedInuseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edInu-coreseIsLogg@dynamic-labs/sdk-edIn -core} from "@dynamic-labs/sdk-react-core";
import { useEffectteuseState

import startaleLogo from "../public/scs_logo.svg";
import { ContractInteraction } from "./ContractInteraction";
import { Output } from "./Output";
import { SmartSessionSection } from "./SmartSession";
import { SocialRecoverySection } from "./SocialRecovery";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";

function App() {
  const { sdkHasLoaded,setShowAuthFlow, user, handleLogOut } = useDynamicContext();
  const authenticated = useIsLoggedIn();
  const { clearLines, setConnectedAddress, setLoadingText, addLine } = useOutput();
  const { startaleAccount, startaleClient, logout: startaleLogout } = useStartale();
  const { wallets } = useWallets();

  useEffect(() => {
    clearLines();
    if (!authenticated) return;
    const embeddedWallet = wallets.filter((w) => w.connectorType === "embedded")[0];
    setConnectedAddress(embeddedWallet?.address || "");
  }, [wallets]);

 const isLoginDisabled = !sdkHasLoaded;
  const isLoggedIn = authenticated && sdkHasLoaded;

  const handleErrors = (error: Error, text?: string) => {
    setLoadingText("");
    addLine(text || "Something has gone wrong.");
    addLine(`Error: ${(error as Error).message}`);
    addLine(
      "Please refresh the page, try creating a new session, or create a new smart account instance with a different nonce.",
    );
  };

  const handleLogout = () => {
    clearLines();
    setLoadingText("");
    setConnectedAddress("");
    addLine("Logging out...");
    startaleLogout();
    logout();
  };

  const [selectedTab, setSelectedTab] = useState<"contract" | "recovery" | "session">("contract");

  function handleTabChange(tab: "contract" | "recovery" | "session") {
    clearLines();
    setSelectedTab(tab);
  }
  return (
    <div className="wrapper">
      <div className="header">
        <img src={startaleLogo} alt="Startale logo" width={150} />
        <div className="title">SCS Smart Account Demo</div>
        <div className="connect">
          {isLoggedIn ? (
            <div className="connected">
              <span>{user?.email ? user.email : ""}</span>
              <button type="button" className="connect-button" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
          ) : (
            <button
              disabled={isLoginDisabled}
              type="button"
              className="connect-button"
              onClick={() => setShowAuthFlow(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div className="content">
        <div className="input">
          {isLoggedIn && startaleAccount && startaleClient && (
            <>
              <div className="tabs">
                <button
                  className={selectedTab === "contract" ? "tab active" : "tab"}
                  onClick={() => handleTabChange("contract")}
                  type="button"
                >
                  Contract Interaction
                </button>
                <button
                  className={selectedTab === "recovery" ? "tab active" : "tab"}
                  onClick={() => handleTabChange("recovery")}
                  type="button"
                >
                  Social Recovery
                </button>
                <button
                  className={selectedTab === "session" ? "tab active" : "tab"}
                  onClick={() => handleTabChange("session")}
                  type="button"
                >
                  Sessions
                </button>
              </div>
              <div className="tabContent">
                {selectedTab === "contract" && <ContractInteraction />}
                {selectedTab === "recovery" && (
                  <SocialRecoverySection
                    startaleClient={startaleClient as any}
                    handleErrors={handleErrors}
                  />
                )}
                {selectedTab === "session" && (
                  <SmartSessionSection
                    startaleClient={startaleClient as any}
                    handleErrors={handleErrors}
                  />
                )}
              </div>
            </>
          )}
        </div>
        <Output />
      </div>
    </div>
  );
}

export default App;
