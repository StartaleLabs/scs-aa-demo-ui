  import { createSmartAccountClient, type StartaleAccountClient, type StartaleSmartAccount, toStartaleSmartAccount } from "startale-aa-sdk";
  
  import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
  
  import { useEffect, useRef, useState } from "react";
  import { createPublicClient } from "viem";
  import { type GetPaymasterDataParameters, createPaymasterClient } from "viem/account-abstraction";
  import { soneiumMinato } from "viem/chains";
  import { http } from "wagmi";
  import { SmartSessionSection } from "./SmartSession";
  import { SocialRecoverySection } from "./SocialRecovery";
  import { AA_CONFIG } from "./config";
import { isEthereumWallet } from "@dynamic-labs/ethereum";
  
  const {
    MINATO_RPC,
    BUNDLER_URL,
    PAYMASTER_SERVICE_URL,
  } = AA_CONFIG;
  
  const scsContext = { calculateGasLimits: true, paymasterId: "pm_test_self_funded" };
  
  const chain = soneiumMinato;
  
  const publicClient = createPublicClient({
    transport: http(MINATO_RPC),
    chain,
  });
  
  const paymasterClient = createPaymasterClient({
    transport: http(PAYMASTER_SERVICE_URL),
  });
  
  export function SmartAccount({
    setLoadingText,
    addLine,
    clearLines,
  }: {
    setLoadingText: (text: string) => void;
    addLine: (line: string, level?: string) => void;
    clearLines: () => void;
  }) {
    const authenticated = useIsLoggedIn();
    const { primaryWallet, handleLogOut } = useDynamicContext();
    const [startaleAccount, setStartaleAccount] = useState<StartaleSmartAccount>();
    const [startaleClient, setStartaleClient] = useState<StartaleAccountClient>();
  
    const didLogout = useRef(false);
  
    useEffect(() => {
      if (!authenticated && didLogout.current === false) {
        // First time we detect a logout
        cleanUp();
        didLogout.current = true;
      }
  
      if (authenticated && didLogout.current) {
        // Reset on login
        didLogout.current = false;
      }
    }, [authenticated]);
  
    useEffect(() => {
      if (!authenticated) {
        return;
      }
      if (!primaryWallet?.address) {
        setStartaleAccount(undefined);
        setStartaleClient(undefined);
        clearLines();
        return;
      }
  
      getSmartAccountInstance();
    }, [primaryWallet?.address]);
  
    useEffect(() => {
      if (startaleAccount) {
        initClient();
      }
    }, [startaleAccount]);
  
    useEffect(() => {
      if (startaleClient) {
        addLine("Startale account client instantiated");
  
        console.log("Startale client instance:", startaleClient);
      }
    }, [startaleClient]);
  
    const handleErrors = (error: Error, text?: string) => {
      setLoadingText("");
      addLine(text || "Something has gone wrong.");
      addLine(`Error: ${(error as Error).message}`);
      addLine(
        "Please refresh the page, try creating a new session, or create a new smart account instance with a different nonce.",
      );
    };
  
    const cleanUp = () => {
      clearLines();
      setStartaleAccount(undefined);
      setStartaleClient(undefined);
      addLine("User logged out");
      addLine("Startale account and client cleaned up");
    };
  
    const getSmartAccountInstance = async () => {
   
      if(!primaryWallet || !isEthereumWallet(primaryWallet)) {
        throw new Error("Primary wallet is not an Ethereum wallet");
      }

      const walletClient = await primaryWallet.getWalletClient();
      
      if(!walletClient) {
        throw new Error("Wallet client not found");
      }

      const startaleAccountInstance = await toStartaleSmartAccount({
          signer: walletClient, 
          chain: chain,
          transport: http(),
          index: BigInt(80660),
      });
  
      console.log("startaleAccountInstance", startaleAccountInstance);
      addLine(`Startale account created: ${startaleAccountInstance.address}`);
      setStartaleAccount(startaleAccountInstance as any);
    };
  
    const initClient = async () => {
      try {
        const startaleClientInstance = createSmartAccountClient({
          account: startaleAccount,
          transport: http(BUNDLER_URL),
          client: publicClient,
          paymaster: {
            async getPaymasterData(pmDataParams: GetPaymasterDataParameters) {
              pmDataParams.paymasterPostOpGasLimit = BigInt(100000);
              pmDataParams.paymasterVerificationGasLimit = BigInt(200000);
              pmDataParams.verificationGasLimit = BigInt(500000);
              const paymasterResponse = await paymasterClient.getPaymasterData(pmDataParams);
              return paymasterResponse;
            },
            async getPaymasterStubData(pmStubDataParams: GetPaymasterDataParameters) {
              const paymasterStubResponse =
                await paymasterClient.getPaymasterStubData(pmStubDataParams);
              paymasterStubResponse.paymasterPostOpGasLimit = BigInt(100000);
              paymasterStubResponse.paymasterVerificationGasLimit = BigInt(200000);
              return paymasterStubResponse;
            },
          },
          paymasterContext: scsContext,
          userOperation: {
            estimateFeesPerGas: async () => {
              return {
                maxFeePerGas: BigInt(10000000),
                maxPriorityFeePerGas: BigInt(10000000),
              };
            },
          },
        });
        setStartaleClient(startaleClientInstance as any);
      } catch (error) {
        console.error("Error initializing kernel client", error);
        handleErrors(error as Error, "Error initializing kernel client");
      }
    };
  
    return (
      <div className="input">
        {startaleAccount && startaleClient && (
          <div>
            <SocialRecoverySection
              startaleClient={startaleClient as any}
              addLine={addLine}
              setLoadingText={setLoadingText}
              handleErrors={handleErrors}
            />
            <SmartSessionSection
              startaleClient={startaleClient as any}
              addLine={addLine}
              setLoadingText={setLoadingText}
              handleErrors={handleErrors}
            />
          </div>
        )}
      </div>
    );
  }
  
