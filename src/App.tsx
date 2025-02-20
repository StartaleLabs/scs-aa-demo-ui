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
      <div className="content">
        <div className="input">
          <SmartAccount />
        </div>
        <div className="output">Output</div>
      </div>
    </div>
  );
}


export default App;
