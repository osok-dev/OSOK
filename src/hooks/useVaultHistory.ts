import { useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { vaultContractInterface } from "../contracts";
import { useGetVaultAddress } from "./useGetVaultAddress";

export function useVaultHistory(): any[] | undefined {
  const vaultAddress = useGetVaultAddress();
  if (!vaultAddress) {
    throw new Error("Vault address was undefined");
  }
  const contract = new Contract(vaultAddress, vaultContractInterface);
  const { value, error } =
    useCall(
      vaultAddress && {
        contract,
        method: "getHistory",
        args: [],
      }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
}
