import "./App.css";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "../public/startale_logo.webp";
import { SmartAccount } from "./NexusAccount";
import { Output, type OutputHandle } from "./Output";

function App() {
  const [loadingText, setLoadingText] = useState("");
  const outputRef = useRef<OutputHandle | null>(null);
  const { isConnected, address } = useAccount();
  const { login } = useLogin();
  const { ready, authenticated, user } = usePrivy();
  const { logout } = useLogout();
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

  const isLoginDisabled = !ready;
  const isLoggedIn = authenticated && ready;

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
