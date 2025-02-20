import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { Output, type OutputHandle } from "./Output";
import { SmartAccount } from "./SmartAcc";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const outputRef = useRef<OutputHandle | null>(null);
  const { isConnected, address } = useAccount();

  const handleAddLine = (line: string) => {
    outputRef.current?.addLine(`> ${line}`);
  };

  const toggleLoading = () => {
    setIsLoading((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (isConnected) handleAddLine(`Connected with address: ${address}`);
  }, [isConnected]);

  return (
    <div className="wrapper">
      <div className="header">
        <img src="/startale_logo.webp" alt="Startale logo" />
        <div className="connect">
          <ConnectButton />
        </div>
      </div>
      <div className="content">
        <SmartAccount toggleLoading={toggleLoading} addLine={handleAddLine} />
        <Output ref={outputRef} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
