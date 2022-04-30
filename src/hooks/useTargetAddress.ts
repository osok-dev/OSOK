import vaultContract from "../abi/Vault.json";
import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";

const abi = vaultContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useTargetAddress(): string {
  const vaultAddress = useGetVaultAddress();

  const [hasTarget]: any =
    useContractCall({
      abi: contractInterface,
      address: vaultAddress,
      method: "targetAddress",
      args: [],
    }) ?? [];
  return hasTarget;
}
