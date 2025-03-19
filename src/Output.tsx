import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export type OutputHandle = {
  addLine: (newLine: string, level?: string) => void;
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
      setLines((prevLines) => [...prevLines, [newLine, level || "important"]]); // Append new line
    },
  }));

  // Handle blinking dots animation when isLoading is true
  // Handle the blinking dots animation based on loadingText presence
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

    return () => clearInterval(interval); // Clear interval when loading stops
  }, [loadingText]);

  return (
    <div className="output">
      {lines.map((line, index) => (
        <div key={index} className={`line ${line[1]}`}>
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
