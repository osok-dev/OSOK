import { useContractFunction } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";
import { vaultContractInterface } from "../contracts";

export function useSetTarget() {
  const vaultAddress = useGetVaultAddress();

  if (!vaultAddress) {
    throw new Error("Vault address was undefined");
  }

  const contract = new Contract(vaultAddress, vaultContractInterface);
  const { state, send } = useContractFunction(contract, "setTarget", {
    transactionName: "Set Target",
  });
  return { state, send };
}
