import vaultFactoryContract from "../abi/VaultFactory.json";
import { ethers } from "ethers";
import { vaultFactoryContractAddress } from "../contracts";
import { useContractCall, useEthers } from "@usedapp/core";

const abi = vaultFactoryContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useHasVault(): boolean {
  const { account } = useEthers();

  const [hasVault]: any =
    useContractCall({
      abi: contractInterface,
      address: vaultFactoryContractAddress,
      method: "hasVault",
      args: [account],
    }) ?? [];
  return hasVault;
}
