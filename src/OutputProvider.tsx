import { createContext, useCallback, useContext, useState } from "react";

type OutputLevel = "info" | "error" | "warning";
type OutputLine = [string, OutputLevel];
type OutputContextType = {
  lines: OutputLine[];
  addLine: (newLine: string, level?: OutputLevel) => void;
  clearLines: () => void;
  loadingText: string;
  setLoadingText: (text: string) => void;
};
const OutputContext = createContext<OutputContextType | undefined>(undefined);

export function OutputProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<OutputLine[]>([]);
  const [loadingText, setLoadingText] = useState<string>("");

  const addLine = useCallback((newLine: string, level: OutputLevel = "info") => {
    setLines((prevLines) => [...prevLines, [newLine, level]]);
  }, []);

  const clearLines = useCallback(() => {
    setLines([]);
  }, []);

  const value = {
    lines,
    addLine,
    clearLines,
    loadingText,
    setLoadingText,
  };

  return <OutputContext.Provider value={value}>{children}</OutputContext.Provider>;
}

export function useOutput() {
  const context = useContext(OutputContext);
  if (!context) {
    throw new Error("useOutput must be used within an OutputProvider");
  }
  return context;
}
