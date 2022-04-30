import vaultContract from "../abi/Vault.json";
import { ethers } from "ethers";
import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";
import { useCall } from "@usedapp/core";

const abi = vaultContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useTargetAddress(): string {
  const vaultAddress = useGetVaultAddress();
  const contract = new Contract(vaultAddress, contractInterface);

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
