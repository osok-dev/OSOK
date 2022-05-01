import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";
import { useCall } from "@usedapp/core";
import { vaultContractInterface } from "../contracts";

export function useTargetAddress(): string {
  const vaultAddress = useGetVaultAddress();

  if (!vaultAddress) {
    throw new Error("Vault address was undefined");
  }

  const contract = new Contract(vaultAddress, vaultContractInterface);

  const { value, error } =
    useCall({
      contract,
      method: "getTarget",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    // return undefined;
  }
  return value?.[0];
}
