import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SmartAccount } from "./SmartAcc";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img src="/startale_logo.webp" alt="Startale logo" />
        <div className="connect">
          <ConnectButton />
        </div>
      </div>

      <div>
        <SmartAccount />
      </div>
    </div>
  );
}


export default App;
