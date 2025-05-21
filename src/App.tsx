import "./App.css";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "../public/startale_logo.webp";
import { Output } from "./Output";
import { useOutput } from "./OutputProvider";
import { SmartAccount } from "./StartaleAccount";

function App() {
  const [loadingText, setLoadingText] = useState("");
  const { isConnected, address } = useAccount();
  const { login } = useLogin();
  const { ready, authenticated, user } = usePrivy();
  const { logout } = useLogout();
  const { addLine, clearLines } = useOutput();


  useEffect(() => {
    clearLines();
    if (isConnected && address) addLine(`Connected with address: ${address}`);
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
        <SmartAccount />
        <Output />
      </div>
    </div>
  );
}

export default App;
