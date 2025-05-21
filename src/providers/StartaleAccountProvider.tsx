import { usePrivy, useWallets } from "@privy-io/react-auth";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  type StartaleAccountClient,
  type StartaleSmartAccount,
  createSmartAccountClient,
  toStartaleSmartAccount,
} from "startale-aa-sdk";
import { http, createPublicClient, createWalletClient, custom } from "viem";
import { type GetPaymasterDataParameters, createPaymasterClient } from "viem/account-abstraction";
import { soneiumMinato } from "viem/chains";
import { AA_CONFIG } from "../config";
import { useOutput } from "./OutputProvider";

const chain = soneiumMinato;
const publicClient = createPublicClient({ transport: http(AA_CONFIG.MINATO_RPC), chain });
const paymasterClient = createPaymasterClient({ transport: http(AA_CONFIG.PAYMASTER_SERVICE_URL) });
const scsContext = { calculateGasLimits: true, paymasterId: "pm_test_self_funded" };

export const StartaleContext = createContext<{
  startaleAccount?: StartaleSmartAccount;
  startaleClient?: StartaleAccountClient;
} | null>(null);

export function useStartale() {
  const ctx = useContext(StartaleContext);
  if (!ctx) throw new Error("useStartale must be used within StartaleProvider");
  return ctx;
}

export function StartaleProvider({ children }: { children: React.ReactNode }) {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { addLine, clearLines, setLoadingText, setSmartAccountAddress } = useOutput();

  const [startaleAccount, setStartaleAccount] = useState<StartaleSmartAccount>();
  const [startaleClient, setStartaleClient] = useState<StartaleAccountClient>();
  const didLogout = useRef(false);

  useEffect(() => {
    if (!authenticated && !didLogout.current) {
      cleanUp();
      didLogout.current = true;
    }
    if (authenticated && didLogout.current) {
      didLogout.current = false;
    }
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated || !wallets[0]?.address) {
      cleanUp();
      return;
    }
    getSmartAccountInstance();
  }, [wallets[0]?.address, authenticated]);

  const cleanUp = () => {
    clearLines();
  };

  const getSmartAccountInstance = async () => {
    const provider = await wallets[0].getEthereumProvider();
    const walletClient = createWalletClient({
      account: wallets[0].address as `0x${string}`,
      chain,
      transport: custom(provider),
    });
    const instance = await toStartaleSmartAccount({
      signer: walletClient,
      chain,
      transport: http(),
      index: BigInt(80660),
    });
    setStartaleAccount(instance);
    setSmartAccountAddress(instance.address);
    await initClient(instance);
  };

  const initClient = async (account: StartaleSmartAccount) => {
    try {
      const client = createSmartAccountClient({
        account,
        transport: http(AA_CONFIG.BUNDLER_URL),
        client: publicClient,
        paymaster: {
          async getPaymasterData(params: GetPaymasterDataParameters) {
            params.paymasterPostOpGasLimit = BigInt(100000);
            params.paymasterVerificationGasLimit = BigInt(200000);
            params.verificationGasLimit = BigInt(500000);
            return paymasterClient.getPaymasterData(params);
          },
          async getPaymasterStubData(params: GetPaymasterDataParameters) {
            const stub = await paymasterClient.getPaymasterStubData(params);
            stub.paymasterPostOpGasLimit = BigInt(100000);
            stub.paymasterVerificationGasLimit = BigInt(200000);
            return stub;
          },
        },
        paymasterContext: scsContext,
        userOperation: {
          estimateFeesPerGas: async () => ({
            maxFeePerGas: BigInt(10000000),
            maxPriorityFeePerGas: BigInt(10000000),
          }),
        },
      });
      setStartaleClient(client);
      addLine("Startale account client instantiated");
    } catch (err) {
      console.error("Client init failed", err);
      setLoadingText("");
      addLine("Error initializing kernel client");
      addLine(`Error: ${(err as Error).message}`);
    }
  };

  return (
    <StartaleContext.Provider value={{ startaleAccount, startaleClient }}>
      {children}
    </StartaleContext.Provider>
  );
}
