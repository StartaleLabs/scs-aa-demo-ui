import { useEffect, useState } from "react";
import { useOutput } from "./providers/OutputProvider";

export function Output() {
  const [loadingDots, setLoadingDots] = useState("");
  const {
    lines,
    loadingText,
    connectedAddress,
    smartAccountAddress,
    isSessionsModuleInstalled,
    isRecoveryModuleInstalled,
  } = useOutput();

  useEffect(() => {
    if (!loadingText) {
      setLoadingDots("");
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      setLoadingDots(".".repeat((count % 3) + 1)); // Cycle between ".", "..", "..."
      count++;
    }, 500);

    return () => clearInterval(interval);
  }, [loadingText]);

  return (
    <div className="output">
      <div className="line">
        <strong>Connected EOA address: </strong> {connectedAddress}
      </div>
      <div className="line">
        <strong>Smart Account address: </strong> {smartAccountAddress}
      </div>
      <div className="line">
        <strong>Sessions module: </strong>{" "}
        {isSessionsModuleInstalled ? "Installed" : "Not installed"}
      </div>
      <div className="line">
        <strong>Recovery module: </strong>{" "}
        {isRecoveryModuleInstalled ? "Installed" : "Not installed"}
      </div>
      {lines.map((line, index) => (
        <div key={`line-${index}`} className={`line ${line[1]}`}>
          {line[0]}
        </div>
      ))}
      {loadingText && (
        <div className="line">
          {loadingText}
          {loadingDots}
        </div>
      )}
    </div>
  );
}
