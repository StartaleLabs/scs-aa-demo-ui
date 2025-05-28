import { getSocialRecoveryMockSignature, getSocialRecoveryValidator } from "@rhinestone/module-sdk";
import { useEffect, useState } from "react";
import type { StartaleAccountClient } from "startale-aa-sdk";
import { createPublicClient, encodeFunctionData } from "viem";
import { entryPoint07Address, getUserOperationHash } from "viem/account-abstraction";
import { soneiumMinato } from "viem/chains";
import { http } from "wagmi";
import { Section } from "./Section";
import { ECDSAValidatorAbi } from "./abi/ECDSAValidator";
import { SocialRecoveryAbi } from "./abi/SocialRecovery";
import { AA_CONFIG } from "./config";
import { gasOutput } from "./gasOutput";
import { useOutput } from "./providers/OutputProvider";
import { useStartale } from "./providers/StartaleAccountProvider";
const { MINATO_RPC, ACCOUNT_RECOVERY_MODULE_ADDRESS } = AA_CONFIG;

const chain = soneiumMinato;

const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

export function SocialRecoverySection({
  startaleClient,
  handleErrors,
}: {
  startaleClient: StartaleAccountClient;
  handleErrors: (error: Error, message: string) => void;
}) {
  const [guardians, setGuardians] = useState<`0x${string}`[]>([]);
  const [guardian, setGuardian] = useState<`0x${string}` | "">("");
  const { addLine, setLoadingText } = useOutput();
  const { checkIsRecoveryModuleInstalled, isRecoveryModuleInstalled } = useStartale();

  const displayGasOutput = async () => {
    await gasOutput(
      (text) => {
        console.log("got text: ", text);
        console.log("Calling addLine with: ", text.trim(), "important");
        addLine(text.trim(), "warning");
      },
      startaleClient.account.address,
      "Smart account balance:",
    );
  };

  useEffect(() => {
    if (isRecoveryModuleInstalled) {
      getGuardians();
    } else {
      setGuardians([]);
    }
  }, [isRecoveryModuleInstalled]);

  // const injectedWallet = useMemo(() => {
  //   return wallets.find((w) => w.connectorType === "injected");
  // }, [wallets]);

  const getGuardians = async () => {
    const accountGuardians = (await publicClient.readContract({
      address: ACCOUNT_RECOVERY_MODULE_ADDRESS,
      abi: SocialRecoveryAbi,
      functionName: "getGuardians",
      args: [startaleClient.account.address],
    })) as `0x${string}`[];
    console.log("Account Guardians: ", accountGuardians);
    setGuardians(accountGuardians);
  };

  const handleAddNewGuardian = async (address?: `0x${string}`) => {
    try {
      if (!startaleClient) {
        throw new Error("Startale client not initialized");
      }
      if (!isRecoveryModuleInstalled) {
        await installRecoveryModule(address || (guardian as `0x${string}`));
      } else {
        await addNewGuardianToExisting(address || (guardian as `0x${string}`));
      }
    } catch (error) {
      console.error("Error adding new guardian", error);
      handleErrors(error as Error, "Error adding new guardian");
    }
  };

  const addNewGuardianToExisting = async (address: `0x${string}`) => {
    setLoadingText("Adding guardian");

    await displayGasOutput();

    const calls = [
      {
        to: ACCOUNT_RECOVERY_MODULE_ADDRESS,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: SocialRecoveryAbi,
          functionName: "addGuardian",
          args: [address],
        }),
      },
    ];
    const addGuardianUserOpHash = await startaleClient.sendUserOperation({
      callData: await startaleClient.account.encodeCalls(calls),
    });

    await startaleClient.waitForUserOperationReceipt({
      hash: addGuardianUserOpHash,
    });

    console.log("Guardian added successfully");
    addLine("Guardian added successfully");
    setLoadingText("");
    setGuardian("");
    await getGuardians();
    await displayGasOutput();
  };

  const changeECDSAValidatorOwner = async (address: `0x${string}`) => {
    if (!address || !isValidEthereumAddress(address)) {
      console.error("Guardian address is required");
      return;
    }
    try {
      console.log("Changing ECDSA validator owner");

      const socialRecoveryModule = getSocialRecoveryValidator({
        guardians: guardians,
        threshold: 1,
      });

      // Todo: Fix and use in proper way
      // This is done to be able to use sdk native helper getNonce for active validator as social recovery
      // But it may conflict with other things since singer is not passed and it's not properly converted toValidator module.
      startaleClient.account.setModule(socialRecoveryModule as any);

      // Now it uses internal helper
      const nonceNew = await startaleClient.account.getNonce({});

      console.log("Nonce for ECDSA validator: (fixed)", nonceNew);

      const transferOwnershipData = encodeFunctionData({
        abi: ECDSAValidatorAbi,
        functionName: "transferOwnership",
        args: [address],
      });

      const calls = [
        {
          to: AA_CONFIG.ECDSA_VALIDATOR_ADDRESS,
          target: AA_CONFIG.ECDSA_VALIDATOR_ADDRESS,
          value: BigInt(0),
          data: transferOwnershipData,
          callData: transferOwnershipData,
        },
      ];
      console.log("Calls to change ECDSA validator owner: ", calls);

      const userOpParams = {
        account: startaleClient.account,
        calls,
        nonce: nonceNew,
        signature: getSocialRecoveryMockSignature({
          threshold: 1,
        }),
      };
      console.log("User operation parameters: ", userOpParams);
      const userOperation = await startaleClient.prepareUserOperation(userOpParams);

      // RevieW: Fix currently fails with AA23

      const userOpHashToSign = getUserOperationHash({
        chainId: chain.id,
        entryPointAddress: entryPoint07Address,
        entryPointVersion: "0.7",
        userOperation,
      });

      console.log("User operation hash to sign: ", userOpHashToSign);

      // Note: This should be signed by the guardian/s

      // if (!injectedWallet || injectedWallet.address !== address) {
      //   console.error("Injected wallet not found or does not match the guardian address");
      //   return;
      // }
      // const signature = await injectedWallet.sign(userOpHashToSign);

      // const finalSig = encodePacked(
      //   Array(1).fill('bytes'),
      //   Array(1).fill(signature),
      // )

      // userOperation.signature = finalSig;
      // console.log("User operation with signature: ", userOperation);

      // Check if anything changes in this route..cause so far we already have paymaster sig
      // if sendUserOperation call changes anything or tries to sign it again using active module it could cause problems
      // ideally we could just append signature then make sendSignedUserOperation call or send using rpc eth_sendUserOperation directly (refer to userop-examples repo)
      // Todo: need to find neat ways and test more.
      const userOpHash = await startaleClient.sendUserOperation(userOperation);

      // Lastest failure simulation:
      // https://dashboard.tenderly.co/livingrock7/project/simulator/b0c33852-4323-43c2-ad90-dc73dcbf4d37/debugger
      const receipt = await startaleClient.waitForUserOperationReceipt({
        hash: userOpHash,
      });

      console.log("User operation receipt: ", receipt);
      addLine("ECDSA validator owner changed successfully");
      setLoadingText("");
    } catch (error) {
      console.error("Error changing ECDSA validator owner", error);
      handleErrors(error as Error, "Error changing ECDSA validator owner");
    }
  };

  const installRecoveryModule = async (address: `0x${string}`) => {
    if (!address || !isValidEthereumAddress(address)) {
      console.error("Guardian address is required");
      return;
    }
    try {
      const socialRecoveryModule = getSocialRecoveryValidator({
        guardians: [address],
        threshold: 1,
      });

      console.log("Social recovery module: ", socialRecoveryModule);

      setLoadingText("Installing recovery module and adding guardian");

      const installModuleUserOpHash = await startaleClient.installModule({
        module: socialRecoveryModule,
      });

      await startaleClient.waitForUserOperationReceipt({
        hash: installModuleUserOpHash,
      });

      addLine("Recovery Module installed successfully");
      addLine("Guardian added successfully");
      await checkIsRecoveryModuleInstalled();
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

    setLoadingText("Removing guardian");
    await displayGasOutput();
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
    const removeGuardianUserOpHash = await startaleClient.sendUserOperation({
      callData: await startaleClient.account.encodeCalls(calls),
    });

    await startaleClient.waitForUserOperationReceipt({
      hash: removeGuardianUserOpHash,
    });

    addLine("Guardian removed successfully");
    setLoadingText("");
    await displayGasOutput();
    await getGuardians();
  };

  // const connectExternalWallet = async () => {
  //   try {
  //     const wallet = await connectWallet();
  //     console.log("Connected wallet: ", wallet);
  //   } catch (error) {
  //     console.error("Error connecting wallet", error);
  //   }
  // };

  return (
    <>
      {/* <Section title="Connect your wallet">
        <div className="inputGroup">
          <p>Connect an external wallet or add the address manually to act as a guardian.</p>
          {injectedWallet ? (
            <>
              <p>Injected wallet detected: {injectedWallet.address}</p>

              <button
                type="button"
                className="primaryButton"
                onClick={() => {
                  handleAddNewGuardian(injectedWallet.address as `0x${string}`);
                }}
                style={{ width: "100%" }}
              >
                Add as guardian
              </button>
            </>
          ) : (
            <button onClick={connectExternalWallet} type="button" disabled={!ready}>
              connect
            </button>
          )}
        </div>
      </Section> */}
      <Section title="Manually add guardians">
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
            <label htmlFor="guardian">New address:</label>
            <input
              name="guardian"
              type="text"
              placeholder="0x..."
              className="textInput"
              value={guardian}
              onChange={(e) => setGuardian(e.target.value as `0x${string}`)}
            />
          </div>
        </div>
        <button
          type="button"
          className="primaryButton"
          onClick={() => {
            if (guardian) {
              handleAddNewGuardian();
            }
          }}
        >
          Add Guardian
        </button>
      </Section>
      <Section title="Recover account">
        <p>To recover your account, you need to provide the address of one of your guardians.</p>
        <div className="inputGroup">
          <label htmlFor="guardian">Guardian address:</label>
          <select
            name="guardian"
            value={guardian}
            onChange={(e) => {
              const selectedGuardian = e.target.value as `0x${string}`;
              if (isValidEthereumAddress(selectedGuardian)) {
                setGuardian(selectedGuardian);
              } else {
                setGuardian("");
              }
            }}
          >
            <option value="">Select a guardian</option>
            {guardians.map((guardian, index) => (
              <option key={`guardian_${index}`} value={guardian}>
                {guardian}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="primaryButton"
          disabled={true}
          onClick={() => {
            changeECDSAValidatorOwner(guardian as `0x${string}`);
          }}
        >
          Recover Account
        </button>
        <div>
          <pre>
            Note: Actually changing the owner is out of scope for this demo. The button is disabled.
          </pre>
        </div>
      </Section>
    </>
  );
}

const isValidEthereumAddress = (address: string): boolean => /^0x[a-fA-F0-9]{40}$/.test(address);
