import { useEffect, useMemo, useState } from "react";
import { type Abi, type Address, encodeFunctionData, http, toHex } from "viem";
import { soneiumMinato } from "viem/chains";
import { CounterAbi } from "./abi/Counter";
import { DiceRollLedgerAbi } from "./abi/DiceRollLedger";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";
import { createSCSPaymasterClient } from "startale-aa-sdk";
import { AA_CONFIG } from "./config";

const predefinedContracts = {
  none: { name: "Select contract", address: "", abi: null },
  diceRoll: {
    name: "Dice roll ledger",
    address: "0x298D8873bA2B2879580105b992049201B60c1975",
    abi: DiceRollLedgerAbi,
  },
  counter: {
    name: "Counter contract",
    address: "0x6bcf154A6B80fDE9bd1556d39C9bCbB19B539Bd8",
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
  const { startaleClient, startaleTokenClient, fetchAstrBalance } = useStartale();
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

  const handleSubmitSponsoredOp = async () => {
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

  const handleSubmitTokenOp = async () => {
    if (!startaleTokenClient) throw new Error("Client not initialized");
    if (!startaleTokenClient.paymaster)
      throw new Error("Paymaster not configured in the client");
    const abi = contractAbi as Abi;
    const parsedArgs = Object.values(functionArgs);
    const data = encodeFunctionData({
      abi,
      functionName: selectedFunction,
      args: parsedArgs,
    });
    // const data = encodeFunctionData({
    //   abi: CounterAbi,
    //   functionName: "count",
    // });

    setLoadingText("Sending user operation...");

    const preparedUserOp = await startaleTokenClient.prepareUserOperation({
      calls: [
        {
          to: contractAddress as Address,
          value: BigInt(0),
          data,
        },
      ],
    });

    const scsPaymasterClient = createSCSPaymasterClient({
          transport: http(AA_CONFIG.PAYMASTER_SERVICE_URL),
        });
    const quotes = await scsPaymasterClient.getTokenPaymasterQuotes({
      userOp: preparedUserOp,
      chainId: toHex(soneiumMinato.id),
    });

    const astrQuote = quotes.feeQuotes.find(
      (quote) => quote.tokenAddress.toLowerCase() === AA_CONFIG.ASTR_TOKEN_ADDRESS.toLowerCase(),
    );

    console.log("Quotes: ", quotes);
    console.log("ASTR Quote: ", astrQuote);
    console.log(AA_CONFIG.ASTR_TOKEN_ADDRESS);
    if (!astrQuote) {
      addLine("No ASTR token quote found");
      setLoadingText("");
      return;
    }
    const hash = await startaleTokenClient.sendTokenPaymasterUserOp({
      calls: [
        {
          to: contractAddress as Address,
          value: BigInt(0),
          data,
        },
      ],
      feeTokenAddress: AA_CONFIG.ASTR_TOKEN_ADDRESS,
      customApprovalAmount: BigInt(astrQuote.requiredAmount),
    })

    const receipt = await startaleTokenClient.waitForUserOperationReceipt({hash});
    addLine(`UserOperation sent: ${receipt.userOpHash}`);
    setLoadingText("");
    fetchAstrBalance();
    console.log("UserOperation receipt: ", receipt);
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
          <div className="buttonGroup">
            <button className="primaryButton" type="button" onClick={handleSubmitSponsoredOp}>
              Send Sponsored User Operation
            </button>
            <p>Or</p>
            <button className="primaryButton" type="button" onClick={handleSubmitTokenOp}>
              Pay gas for User Operation with ASTR
            </button>
          </div>
        </>
      )}
    </div>
  );
}
