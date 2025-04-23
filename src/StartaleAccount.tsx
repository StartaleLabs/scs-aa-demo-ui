import {
    type NexusAccount,
    type NexusClient,
    toNexusAccount,
  } from "@biconomy/abstractjs";
// Above is todo in the sdk

  import { createSmartAccountClient, toStartaleSmartAccount } from "startale-aa-sdk";
  
  import { usePrivy, useWallets } from "@privy-io/react-auth";
  
  import { useEffect, useRef, useState } from "react";
  import { createPublicClient, createWalletClient, custom } from "viem";
  import { type GetPaymasterDataParameters, createPaymasterClient } from "viem/account-abstraction";
  import { soneiumMinato } from "viem/chains";
  import { http } from "wagmi";
  import { SmartSessionSection } from "./SmartSession";
  import { SocialRecoverySection } from "./SocialRecovery";
  import { AA_CONFIG } from "./config";
  
  const {
    MOCK_ATTESTER_ADDRESS,
    NEXUS_K1_VALIDATOR_FACTORY_ADDRESS,
    NEXUS_K1_VALIDATOR_ADDRESS,
    MINATO_RPC,
    BUNDLER_URL,
    PAYMASTER_SERVICE_URL,
  } = AA_CONFIG;
  
  const scsContext = { calculateGasLimits: true, policyId: "sudo" };
  
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
    const { authenticated } = usePrivy();
    const { wallets } = useWallets();
    const [startaleAccount, setNexusAccount] = useState<NexusAccount>();
    const [startaleClient, setNexusClient] = useState<NexusClient>();
  
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
      if (!wallets[0]?.address) {
        setNexusAccount(undefined);
        setNexusClient(undefined);
        clearLines();
        return;
      }
  
      getSmartAccountInstance();
    }, [wallets[0]?.address]);
  
    useEffect(() => {
      if (wallets.length > 0) {
        console.log("wallets", wallets);
      }
    }, [wallets]);
  
    useEffect(() => {
      if (startaleAccount) {
        initClient();
      }
    }, [startaleAccount]);
  
    useEffect(() => {
      if (startaleClient) {
        addLine("Nexus client instantiated");
  
        console.log("Nexus client instance:", startaleClient);
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
      setNexusAccount(undefined);
      setNexusClient(undefined);
      addLine("User logged out");
      addLine("Nexus account and client cleaned up");
    };
  
    const getSmartAccountInstance = async () => {
      const provider = await wallets[0].getEthereumProvider();
  
      const walletClient = createWalletClient({
        account: wallets[0].address as `0x${string}`,
        chain: soneiumMinato, // or use `chain` if it's your custom viem chain
        transport: custom(provider),
      });
      const startaleAccountInstance = await toStartaleSmartAccount({
          signer: walletClient as any, 
          chain: chain as any,
          transport: http() as any,
          index: BigInt(10000295),
      });
  
      console.log("startaleAccountInstance", startaleAccountInstance);
      addLine(`Startale account created: ${startaleAccountInstance.address}`);
      setNexusAccount(startaleAccountInstance as any);
    };
  
    const initClient = async () => {
      try {
        const nexusClientInstance = createSmartAccountClient({
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
        setNexusClient(nexusClientInstance as any);
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
              nexusClient={startaleClient}
              addLine={addLine}
              setLoadingText={setLoadingText}
              handleErrors={handleErrors}
            />
            <SmartSessionSection
              nexusClient={startaleClient}
              addLine={addLine}
              setLoadingText={setLoadingText}
              handleErrors={handleErrors}
            />
          </div>
        )}
      </div>
    );
  }
  