import "./App.css";
import { useLogin, useLogout, usePrivy } from "@privy-io/react-auth";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "../public/startale_logo.webp";
import { Output } from "./Output";
import { SmartAccount } from "./StartaleAccount";
import { useOutput } from "./providers/OutputProvider";

function App() {
  const { isConnected, address } = useAccount();
  const { login } = useLogin();
  const { ready, authenticated, user } = usePrivy();
  const { logout } = useLogout();
  const { clearLines, setConnectedAddress } = useOutput();

  useEffect(() => {
    clearLines();
    if (isConnected && address) setConnectedAddress(address);
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
