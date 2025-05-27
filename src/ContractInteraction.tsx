import { useEffect, useMemo, useState } from "react";
import { type Abi, encodeFunctionData } from "viem";
import { CounterAbi } from "./abi/Counter";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";

const predefinedContracts = {
  none: { name: "Select contract", address: "", abi: null },
  diceRoll: {
    name: "Dice roll ledger",
    address: "0x298D8873bA2B2879580105b992049201B60c1975",
    abi: DiceRollLedgerAbi,
  },
  counter: {
    name: "Counter contract",
    address: "0xA04D053b3C8021e8D5bF641816c42dAA75D8b597",
    abi: CounterAbi,
  },
  custom: {
    name: "Custom contract",
    address: "",
    abi: null,
  },
};

export function ContractInteraction() {
  const [selectedKey, setSelectedKey] = useState<keyof typeof predefinedContracts>("none");
  const { startaleClient } = useStartale();
  const [selectedFunction, setSelectedFunction] = useState<string>("");
  const { addLine, setLoadingText } = useOutput();
  const [functionArgs, setFunctionArgs] = useState<Record<string, string>>({});
  const [contractAddress, setContractAddress] = useState("");
  const [contractAbi, setContractAbi] = useState<Abi>(
    (predefinedContracts[selectedKey].abi as Abi) || undefined,
  );

  const functionOptions = useMemo(() => {
    if (!contractAbi) return [];
    return contractAbi
      ?.filter((item) => item.type === "function" && "name" in item)
      .map((fn) => (fn as { name: string }).name);
  }, [contractAbi]);

  const selectedFnDef = useMemo(() => {
    if (!contractAbi || !selectedFunction) return undefined;
    return contractAbi.find(
      (fn) => fn.type === "function" && "name" in fn && fn.name === selectedFunction,
    );
  }, [selectedFunction, contractAbi]);

  const handleContractSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.target.value as keyof typeof predefinedContracts;
    setSelectedFunction("");
    setFunctionArgs({});
    setSelectedKey(key);
    if (predefinedContracts[key].abi) {
      setContractAbi(predefinedContracts[key].abi as Abi);
    } else {
      setContractAbi([]);
    }
    setContractAddress(predefinedContracts[key].address || "");
  };

  const handleArgChange = (name: string, value: string) => {
    console.log("name", name);
    console.log("value", value);
    setFunctionArgs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFunctionSelection = (fnName: string) => {
    setFunctionArgs({});
    setSelectedFunction(fnName);
  };
  useEffect(() => {
    console.log("args", functionArgs);
  }, [functionArgs]);
  const handleSubmit = async () => {
    try {
      if (!startaleClient) throw new Error("Client not initialized");
      const abi = contractAbi as Abi;
      const parsedArgs = Object.values(functionArgs);
      const data = encodeFunctionData({
        abi,
        functionName: selectedFunction,
        args: parsedArgs,
      });
      setLoadingText("Sending user operation...");
      const hash = await startaleClient.sendUserOperation({
        calls: [
          {
            to: contractAddress as `0x${string}`,
            data,
            value: 0n,
          },
        ],
      });
      addLine(`UserOperation sent: ${hash}`);
      setLoadingText("");
    } catch (err) {
      addLine("Failed to send operation");
      addLine((err as Error).message);
      setLoadingText("");
    }
  };

  return (
    <div className="contractForm">
      <div className="inputGroup">
        <label htmlFor="contractSelect">Select contract:</label>
        <select
          id="contractSelect"
          value={selectedKey}
          onChange={handleContractSelection}
          className="dropdown"
        >
          {Object.entries(predefinedContracts).map(([key, { name }]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {selectedKey !== "none" && (
        <>
          <div className="inputGroup">
            <label htmlFor="contractAddress">Contract address:</label>
            <input
              id="contractAddress"
              className="textInput"
              type="text"
              placeholder="0x..."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="contractAbi">Contract ABI:</label>
            <textarea
              id="contractAbi"
              rows={12}
              placeholder="Paste ABI JSON here"
              value={contractAbi ? JSON.stringify(contractAbi, null, 2) : ""}
              onChange={(e) => {
                try {
                  setContractAbi(JSON.parse(e.target.value));
                } catch (err) {
                  console.error("Invalid ABI JSON");
                }
              }}
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="function-select">Select function:</label>
            <select
              id="function-select"
              value={selectedFunction}
              onChange={(e) => handleFunctionSelection(e.target.value)}
              className="dropdown"
            >
              <option value="" disabled>
                Select function
              </option>
              {functionOptions.map((fnName) => (
                <option key={fnName} value={fnName}>
                  {fnName}
                </option>
              ))}
            </select>
          </div>
          {selectedFnDef?.type === "function" &&
            "inputs" in selectedFnDef &&
            selectedFnDef.inputs?.map((input, idx) => (
              <div key={idx} className="inputGroup">
                <label htmlFor={`arg-${idx}`}>
                  {input.name || `arg${idx}`} ({input.type})
                </label>
                <input
                  id={`arg-${idx}`}
                  type="text"
                  className="textInput"
                  placeholder={`Enter ${input.type}`}
                  value={functionArgs[input.name || `arg${idx}`] || ""}
                  onChange={(e) => handleArgChange(input.name || `arg${idx}`, e.target.value)}
                />
              </div>
            ))}
          <button className="primaryButton" type="button" onClick={handleSubmit}>
            Send User Operation
          </button>
        </>
      )}
    </div>
  );
}
