import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export type OutputHandle = {
  addLine: (newLine: string, level?: string) => void;
  clearLines: () => void;
};

type OutputProps = {
  loadingText?: string; // Controls the loading animation externally
};

export const Output = forwardRef<OutputHandle, OutputProps>(({ loadingText }, ref) => {
  const [lines, setLines] = useState<[string,string][]>([]);
  const [loadingDots, setLoadingDots] = useState("");
  // Expose the addLine function to the parent component
  useImperativeHandle(ref, () => ({
    addLine: (newLine: string, level?: string) => {
      console.log(newLine, level);
      setLines((prevLines) => [...prevLines, [newLine, level || "info"]]);
    },
    clearLines: () => {
      setLines([]);
    },
  }));

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
});
