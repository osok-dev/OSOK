import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { vaultContractInterface } from "../contracts";

export function useHasActiveTarget(vaultAddress: string): boolean | undefined {
  const contract = new Contract(vaultAddress, vaultContractInterface);
  const { value, error } =
    useCall({
      contract,
      method: "hasTarget",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
}
