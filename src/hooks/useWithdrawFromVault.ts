import { useContractFunction } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";
import { vaultContractInterface } from "../contracts";

export function useWithdrawFromVault() {
  const vaultAddress = useGetVaultAddress();

  if (!vaultAddress) {
    throw new Error("Vault address was undefined");
  }

  const contract = new Contract(vaultAddress, vaultContractInterface);
  const { send, state } = useContractFunction(contract, "withdraw", {
    transactionName: "Withdraw",
  });
  return { send, state };
}
