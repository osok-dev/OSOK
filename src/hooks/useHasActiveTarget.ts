import vaultContract from "../abi/Vault.json";
import { ethers } from "ethers";
import { useContractCall } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";

const abi = vaultContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useHasActiveTarget(): boolean {
  const vaultAddress = useGetVaultAddress();

  const [hasTarget]: any =
    useContractCall({
      abi: contractInterface,
      address: vaultAddress,
      method: "hasTarget",
      args: [],
    }) ?? [];
  return hasTarget;
}
