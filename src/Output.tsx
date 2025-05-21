import { useEffect, useState } from "react";
import { useOutput } from "./OutputProvider";

export function Output() {
  const [loadingDots, setLoadingDots] = useState("");
  const { lines, loadingText } = useOutput();

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
