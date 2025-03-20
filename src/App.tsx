import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import startaleLogo from "../public/startale_logo.webp";
import { SmartAccount } from "./NexusAccount";
import { Output, type OutputHandle } from "./Output";

function App() {
  const [loadingText, setLoadingText] = useState("");
  const outputRef = useRef<OutputHandle | null>(null);
  const { isConnected, address } = useAccount();

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

  return (
    <div className="wrapper">
      <div className="header">
        <img src={startaleLogo} alt="Startale logo" />
        <div className="connect">
          <ConnectButton />
        </div>
      </div>
      <div className="content">
        <SmartAccount addLine={handleAddLine} setLoadingText={setLoadingText} />
        <Output ref={outputRef} loadingText={loadingText} />
      </div>
    </div>
  );
}

export default App;
