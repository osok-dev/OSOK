import vaultContract from "../abi/Vault.json";
import { ethers } from "ethers";
import { useContractFunction } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";

const abi = vaultContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useWithdrawFromVault() {
  const vaultAddress = useGetVaultAddress();
  const contract = new Contract(vaultAddress, contractInterface);
  const { send, state } = useContractFunction(contract, "withdraw", {
    transactionName: "Withdraw",
  });
  return { send, state };
}
