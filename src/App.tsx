import "./App.css";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "/startale_logo.webp";
import { SmartAccount } from "./StartaleAccount";
import { Output, type OutputHandle } from "./Output";

function App() {
  const [loadingText, setLoadingText] = useState("");
  const outputRef = useRef<OutputHandle | null>(null);
  const { isConnected, address } = useAccount();
  const { sdkHasLoaded,setShowAuthFlow, user, handleLogOut } = useDynamicContext();
  const authenticated = useIsLoggedIn();
  const handleAddLine = (line: string, level?: string) => {
    outputRef.current?.addLine(`> ${line}`, level);
  };

  const handleClearLines = () => {
    outputRef.current?.clearLines();
  };

  useEffect(() => {
    handleClearLines();
    if (isConnected && address) handleAddLine(`Connected with address: ${address}`);
  }, [address]);

  const isLoginDisabled = !sdkHasLoaded;
  const isLoggedIn = authenticated && sdkHasLoaded;

  return (
    <div className="wrapper">
      <div className="header">
        <img src={startaleLogo} alt="Startale logo" />
        <div className="connect">
          {isLoggedIn ? (
            <>
              <span>{user?.email ? user.email : ""}</span>
              <button type="button" className="connect-button" onClick={() => handleLogOut()}>
                Logout
              </button>
            </>
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
        <SmartAccount
          addLine={handleAddLine}
          setLoadingText={setLoadingText}
          clearLines={handleClearLines}
        />
        <Output ref={outputRef} loadingText={loadingText} />
      </div>
    </div>
  );
}

export default App;
