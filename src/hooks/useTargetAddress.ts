import vaultContract from "../abi/Vault.json";
import { ethers } from "ethers";
// import { useContractCall } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";
import { Contract } from "@ethersproject/contracts";
import { useCall } from "@usedapp/core";

const abi = vaultContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useTargetAddress(): string | undefined {
  const vaultAddress = useGetVaultAddress();
  const contract = new Contract(vaultAddress, contractInterface);
  // const [targetAddress]: any =
  //   useContractCall({
  //     abi: contractInterface,
  //     address: vaultAddress,
  //     method: "targetAddress",
  //     args: [],
  //   }) ?? [];
  // return targetAddress;

  const { value, error } =
    useCall({
      contract,
      method: "targetAddress",
      args: [],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}
