import vaultFactoryContract from "../abi/VaultFactory.json";
import { ethers } from "ethers";
import { vaultFactoryContractAddress } from "../contracts";
import { useCall, useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

const abi = vaultFactoryContract.abi;
const contractInterface = new ethers.utils.Interface(abi);
const contract = new Contract(vaultFactoryContractAddress, contractInterface);

export function useGetVaultAddress(): string {
  const { account } = useEthers();

  const { value, error } =
    useCall({
      contract,
      method: "getVaultAddress",
      args: [account],
    }) ?? {};
  if (error) {
    console.error(error.message);
    // return undefined;
  }
  return value?.[0];
}
