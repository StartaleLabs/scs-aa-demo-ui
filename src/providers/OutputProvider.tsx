import { createContext, useCallback, useContext, useState } from "react";

type OutputLevel = "info" | "error" | "warning";
type OutputLine = [string, OutputLevel];
type OutputContextType = {
  lines: OutputLine[];
  addLine: (newLine: string, level?: OutputLevel) => void;
  clearLines: () => void;
  loadingText: string;
  setLoadingText: (text: string) => void;
  connectedAddress: string | undefined;
  setConnectedAddress: (address: string | undefined) => void;
  smartAccountAddress: string | undefined;
  setSmartAccountAddress: (address: string | undefined) => void;
};
const OutputContext = createContext<OutputContextType | undefined>(undefined);

export function OutputProvider({ children }: { children: React.ReactNode }) {
  const [connectedAddress, setConnectedAddress] = useState<string | undefined>(undefined);
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | undefined>(undefined);
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
    connectedAddress,
    setConnectedAddress,
    smartAccountAddress,
    setSmartAccountAddress,
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
