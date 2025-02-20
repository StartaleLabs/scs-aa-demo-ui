import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

export type OutputHandle = {
  addLine: (newLine: string) => void;
};

type OutputProps = {
  isLoading?: boolean;
};

export const Output = forwardRef<OutputHandle, OutputProps>(({ isLoading = false }, ref) => {
  const [lines, setLines] = useState<string[]>([]);
  const [loadingDots, setLoadingDots] = useState("");

  // Expose the addLine function to the parent component
  useImperativeHandle(ref, () => ({
    addLine: (newLine: string) => {
      setLines((prevLines) => [...prevLines, newLine]); // Append new line
    },
  }));

  // Handle blinking dots animation when isLoading is true
  useEffect(() => {
    if (!isLoading) {
      setLoadingDots("");
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      setLoadingDots(".".repeat((count % 3) + 1)); // Cycle between ".", "..", "..."
      count++;
    }, 500); // Change dots every 500ms

    return () => clearInterval(interval); // Cleanup on unmount or when isLoading turns false
  }, [isLoading]);

  return (
    <div className="output">
      {lines.map((line, index) => (
        <div key={index} className="line">
          {line}
        </div>
      ))}
      {isLoading && <div className="line">Loading{loadingDots}</div>}
    </div>
  );
});
