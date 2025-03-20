import type { NexusClient } from "@biconomy/abstractjs";
import { type Module, getSocialRecoveryValidator } from "@rhinestone/module-sdk";
import { useEffect, useState } from "react";
import { createPublicClient, encodeFunctionData } from "viem";
import { soneiumMinato } from "viem/chains";
import { http } from "wagmi";
import { Section } from "./Section";
import { SocialRecoveryAbi } from "./abi/SocialRecovery";
import { AA_CONFIG } from "./config";
const { MINATO_RPC, ACCOUNT_RECOVERY_MODULE_ADDRESS } = AA_CONFIG;

const chain = soneiumMinato;

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

export function SocialRecoverySection({
  nexusClient,
  addLine,
  setLoadingText,
  handleErrors,
}: {
  nexusClient: NexusClient;
  addLine: (line: string) => void;
  setLoadingText: (text: string) => void;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [isRecoveryModuleInstalled, setIsRecoveryModuleInstalled] = useState(false);
  const [guardians, setGuardians] = useState<`0x${string}`[]>([]);
  const [guardian, setGuardian] = useState<`0x${string}` | "">("");

  useEffect(() => {
    if (nexusClient) {
      checkIsRecoveryModuleInstalled();
    }
  }, [nexusClient?.account?.address]);

  const checkIsRecoveryModuleInstalled = async () => {
    // Social recovery module
    const socialRecoveryModule: Module = {
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      module: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      initData: "0x",
      deInitData: "0x",
      type: "validator",
      additionalContext: "0x",
    };
    console.log("Social Recovery Module: ", socialRecoveryModule);

    const recoveryModuleInstalled = await nexusClient.isModuleInstalled({
      module: socialRecoveryModule,
    });

    if (recoveryModuleInstalled) {
      await getGuardians();
      addLine("Recovery Module already installed.");
    } else {
      setGuardians([]);
    }

    setIsRecoveryModuleInstalled(recoveryModuleInstalled);
  };

  const getGuardians = async () => {
    const accountGuardians = (await publicClient.readContract({
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      abi: SocialRecoveryAbi,
      functionName: "getGuardians",
      args: [nexusClient.account.address],
    })) as `0x${string}`[];
    console.log("Account Guardians: ", accountGuardians);
    setGuardians(accountGuardians);
  };

  const handleAddNewGuardian = async () => {
    try {
      if (!nexusClient) {
        throw new Error("Nexus client not initialized");
      }
      if (!isRecoveryModuleInstalled) {
        await installRecoveryModule();
      } else {
        await addNewGuardianToExisting();
      }
    } catch (error) {
      console.error("Error adding new guardian", error);
      handleErrors(error as Error, "Error adding new guardian");
    }
  };

  const addNewGuardianToExisting = async () => {
    console.log("adding guardian to existing");
    const calls = [
      {
        to: ACCOUNT_RECOVERY_MODULE_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: SocialRecoveryAbi,
          functionName: "addGuardian",
          args: [guardian],
        }),
      },
    ];
    const addGuardianUserOpHash = await nexusClient.sendUserOperation({
      callData: await nexusClient.account.encodeCalls(calls),
    });

    await nexusClient.waitForUserOperationReceipt({
      hash: addGuardianUserOpHash,
    });

    console.log("Guardian added successfully");
    addLine("Guardian added successfully");
    setGuardian("");
    await getGuardians();
  };

  const installRecoveryModule = async () => {
    if (!guardian || !isValidEthereumAddress(guardian)) {
      console.error("Guardian address is required");
      return;
    }
    try {
      const socialRecoveryModule = getSocialRecoveryValidator({
        guardians: [guardian as `0x${string}`],
        threshold: 1,
      });

      setLoadingText("Installing recovery module");

      const installModuleUserOpHash = await nexusClient.installModule({
        module: socialRecoveryModule,
      });

      await nexusClient.waitForUserOperationReceipt({
        hash: installModuleUserOpHash,
      });

      addLine("Recovery Module installed successfully");
      setIsRecoveryModuleInstalled(true);
      await getGuardians();
      setLoadingText("");
    } catch (error) {
      console.error("Error installing recovery module", error);
      handleErrors(error as Error, "Error installing recovery module");
    }
  };

  const handleRemoveGuardian = async (guardian: `0x${string}`) => {
    const SENTINEL_ADDRESS = "0x0000000000000000000000000000000000000001";
    const index = guardians.indexOf(guardian);
    if (index < 0) {
      console.error("Guardian not found in list");
      return;
    }

    const prevGuardian = index === 0 ? SENTINEL_ADDRESS : guardians[index - 1];

    const calls = [
      {
        to: ACCOUNT_RECOVERY_MODULE_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: SocialRecoveryAbi,
          functionName: "removeGuardian",
          args: [prevGuardian, guardian],
        }),
      },
    ];
    const removeGuardianUserOpHash = await nexusClient.sendUserOperation({
      callData: await nexusClient.account.encodeCalls(calls),
    });

    await nexusClient.waitForUserOperationReceipt({
      hash: removeGuardianUserOpHash,
    });

    console.log("Guardian removed successfully");
    addLine("Guardian removed successfully");
    await getGuardians();
  };

  return (
    <Section title="Add guardians for social recovery">
      {guardians.length > 0 && <div>Guardians:</div>}
      <div className="inputGroup">
        {guardians.map((guardian, index) => (
          <div className="guardianWrapper" key={`guardian_${index}`}>
            <div>{guardian}</div>
            <button
              type="button"
              onClick={() => {
                handleRemoveGuardian(guardian);
              }}
            >
              X
            </button>
          </div>
        ))}
        <div className="inputGroup">
          <div className="addressInput">
            <label htmlFor="guardian">New address:</label>
            <input
              name="guardian"
              type="text"
              value={guardian}
              onChange={(e) => setGuardian(e.target.value as `0x${string}`)}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            if (guardian) {
              handleAddNewGuardian();
            }
          }}
        >
          Add Guardian
        </button>
      </div>
    </Section>
  );
}

const isValidEthereumAddress = (address: string): boolean => /^0x[a-fA-F0-9]{40}$/.test(address);
