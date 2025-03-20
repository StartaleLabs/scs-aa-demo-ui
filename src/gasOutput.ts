import { http, createPublicClient } from "viem";
import { soneiumMinato } from "viem/chains";
import { AA_CONFIG } from "./config";

const { MINATO_RPC } = AA_CONFIG;

const chain = soneiumMinato;
const publicClient = createPublicClient({
  transport: http(MINATO_RPC),
  chain,
});

export async function gasOutput(
  channel: (text: string) => void,
  address: `0x${string}`,
  prefix?: string,
): Promise<void> {
  const balance = await publicClient.getBalance({ address });
  channel(`${prefix ? `${prefix} ` : ""} ${balance}`);
}
