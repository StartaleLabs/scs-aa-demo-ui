import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import type { Module } from "@rhinestone/module-sdk";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  type StartaleAccountClient,
  type StartaleSmartAccount,
  createSCSPaymasterClient,
  createSmartAccountClient,
  getSmartSessionsValidator,
  toStartaleSmartAccount,
} from "@startale-scs/aa-sdk";
import { http, createPublicClient } from "viem";
import { soneiumMinato } from "viem/chains";
import { AA_CONFIG } from "../config";
import { useOutput } from "./OutputProvider";

const chain = soneiumMinato;
const publicClient = createPublicClient({ transport: http(AA_CONFIG.MINATO_RPC), chain });

export const StartaleContext = createContext<{
  startaleAccount?: StartaleSmartAccount;
  startaleClient?: StartaleAccountClient;
  logout: () => void;
  isRecoveryModuleInstalled: boolean;
  checkIsRecoveryModuleInstalled: () => Promise<void>;
  isSessionsModuleInstalled: boolean;
  checkIsSessionsModuleInstalled: () => Promise<void>;
} | null>(null);

export function useStartale() {
  const ctx = useContext(StartaleContext);
  if (!ctx) throw new Error("useStartale must be used within StartaleProvider");
  return ctx;
}

export function StartaleProvider({ children }: { children: React.ReactNode }) {
  const { primaryWallet } = useDynamicContext();
  const authenticated = useIsLoggedIn();
  const { addLine, clearLines, setLoadingText, setSmartAccountAddress } = useOutput();

  const [startaleAccount, setStartaleAccount] = useState<StartaleSmartAccount>();
  const [startaleClient, setStartaleClient] = useState<StartaleAccountClient>();
  const [isRecoveryModuleInstalled, setIsRecoveryModuleInstalled] = useState(false);
  const [isSessionsModuleInstalled, setIsSessionsModuleInstalled] = useState(false);
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
    if (!authenticated || !primaryWallet?.address) {
      cleanUp();
      return;
    }
    getSmartAccountInstance();
  }, [primaryWallet?.address, authenticated]);

  useEffect(() => {
    const checkModules = async () => {
      if (!startaleClient) return;
      await checkIsRecoveryModuleInstalled();
      await checkIsSessionsModuleInstalled();
    };
    checkModules();
  }, [startaleClient?.account?.address]);

  const cleanUp = () => {
    clearLines();
  };

  const logout = () => {
    clearLines();
    setStartaleAccount(undefined);
    setStartaleClient(undefined);
    setSmartAccountAddress("");
    setLoadingText("");
  };

  const getSmartAccountInstance = async () => {
    if (!primaryWallet) {
      addLine("No embedded wallet found");
      return;
    }

    //@ts-ignore
    const walletClient = await primaryWallet.getWalletClient();
    console.log("Wallet client: ", walletClient);
    const instance = await toStartaleSmartAccount({
      signer: walletClient,
      chain,
      transport: http(),
      index: BigInt(813367),
    });

    setStartaleAccount(instance);
    setSmartAccountAddress(instance.address);
    await initClient(instance);
  };

  const scsContext = { calculateGasLimits: true, paymasterId: "pm_test_managed" };

  const scsPaymasterClient = createSCSPaymasterClient({
    transport: http(AA_CONFIG.PAYMASTER_SERVICE_URL) as any,
  });

  const initClient = async (account: StartaleSmartAccount) => {
    try {
      const client = createSmartAccountClient({
        account,
        transport: http(AA_CONFIG.BUNDLER_URL),
        client: publicClient,
        paymaster: scsPaymasterClient,
        paymasterContext: scsContext,
      });
      setStartaleClient(client);
      client.signMessage;
      addLine("Startale account client instantiated");
    } catch (err) {
      console.error("Client init failed", err);
      setLoadingText("");
      addLine("Error initializing kernel client");
      addLine(`Error: ${(err as Error).message}`);
    }
  };

  const checkIsRecoveryModuleInstalled = async () => {
    console.log("Checking if recovery module is installed");
    console.log("Current state: ", isRecoveryModuleInstalled);
    console.log("Startale client: ", startaleClient);
    if (!startaleClient) return;
    if (isRecoveryModuleInstalled) return;
    // Social recovery module
    const socialRecoveryModule: Module = {
      address: AA_CONFIG.ACCOUNT_RECOVERY_MODULE_ADDRESS,
      module: AA_CONFIG.ACCOUNT_RECOVERY_MODULE_ADDRESS,
      initData: "0x",
      deInitData: "0x",
      type: "validator",
      additionalContext: "0x",
    };
    console.log("Social Recovery Module: ", socialRecoveryModule);
    console.log("Calling isModuleInstalled");
    const recoveryModuleInstalled = await startaleClient.isModuleInstalled({
      module: socialRecoveryModule,
    });
    console.log("Recovery module installed AAAAA: ", recoveryModuleInstalled);
    setIsRecoveryModuleInstalled(recoveryModuleInstalled);
  };

  const checkIsSessionsModuleInstalled = async () => {
    if (!startaleClient) return;
    const sessionsModule = getSmartSessionsValidator({});
    const isSmartSessionsModuleInstalled = await startaleClient.isModuleInstalled({
      module: sessionsModule,
    });
    if (isSmartSessionsModuleInstalled) {
      setIsSessionsModuleInstalled(true);
    }
  };

  return (
    <StartaleContext.Provider
      value={{
        startaleAccount,
        startaleClient,
        isRecoveryModuleInstalled,
        checkIsRecoveryModuleInstalled,
        isSessionsModuleInstalled,
        checkIsSessionsModuleInstalled,
        logout,
      }}
    >
      {children}
    </StartaleContext.Provider>
  );
}
