import "./App.css";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "../public/startale_logo.webp";
import { Output } from "./Output";
import { SmartSessionSection } from "./SmartSession";
import { SocialRecoverySection } from "./SocialRecovery";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";

function App() {
  const { isConnected, address } = useAccount();
  const { login } = useLogin();
  const { ready, authenticated, user } = usePrivy();
  const { logout } = useLogout();
  const { clearLines, setConnectedAddress, setLoadingText, addLine } = useOutput();
  const { startaleAccount, startaleClient } = useStartale();
  useEffect(() => {
    clearLines();
    if (isConnected && address) setConnectedAddress(address);
  }, [address]);

  const isLoginDisabled = !ready;
  const isLoggedIn = authenticated && ready;

 const handleErrors = (error: Error, text?: string) => {
  setLoadingText("");
  addLine(text || "Something has gone wrong.");
  addLine(`Error: ${(error as Error).message}`);
  addLine(
    "Please refresh the page, try creating a new session, or create a new smart account instance with a different nonce.",
  );
};

  const [selectedTab, setSelectedTab] = useState<"contract" | "recovery" | "session">("contract");

  function handleTabChange(tab: "contract" | "recovery" | "session") {
    clearLines();
    setSelectedTab(tab);
  }
  return (
    <div className="wrapper">
      <div className="header">
        <img src={startaleLogo} alt="Startale logo" />
        <div className="connect">
          {isLoggedIn ? (
            <>
              <span>{user?.email ? user.email.address : ""}</span>
              <button type="button" className="connect-button" onClick={() => logout()}>
                Logout
              </button>
            </>
          ) : (
            <button
              disabled={isLoginDisabled}
              type="button"
              className="connect-button"
              onClick={() => login()}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div className="content">
        <div className="input">
          {startaleAccount && startaleClient && (
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
              <div className="tab-content">
                {selectedTab === "contract" && <div>Contract interaction section coming soon.</div>}
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
