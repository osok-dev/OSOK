import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { vaultFactoryContractInterface } from "../contracts";

export function useVaultHistory(vaultAddress: string): any[] | undefined {
  const contract = new Contract(vaultAddress, vaultFactoryContractInterface);
  const { value, error } =
    useCall({
      contract,
      method: "getHistory",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
}
