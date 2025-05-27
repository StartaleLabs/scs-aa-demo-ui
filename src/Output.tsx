import { useEffect, useState } from "react";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";

export function Output() {
  const [loadingDots, setLoadingDots] = useState("");
  const { lines, loadingText, connectedAddress, smartAccountAddress } = useOutput();
  const { isSessionsModuleInstalled, isRecoveryModuleInstalled } = useStartale();
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
        <strong>Connected signer address: </strong> {connectedAddress}
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
          {line[0].split(/(0x[a-fA-F0-9]{64})/g).map((part, i) =>
            /^0x[a-fA-F0-9]{64}$/.test(part) ? (
              <a
                key={`hash-${i}`}
                href={`https://soneium-minato.blockscout.com/op/${part}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {part}
              </a>
            ) : (
              <span key={`text-${i}`}>{part}</span>
            ),
          )}
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
