import exampleContractAbi from "../abi/ExampleContract.json";
import { ethers } from "ethers";
import { vaultFactoryContractAddress } from "../contracts";
import { useContractCall } from "@usedapp/core";

const simpleContractInterface = new ethers.utils.Interface(exampleContractAbi);

export function useEscrowExists(): boolean {
  const [hasVault]: any =
    useContractCall({
      abi: simpleContractInterface,
      address: vaultFactoryContractAddress,
      method: "hasVault",
      args: [],
    }) ?? [];
  return hasVault;
}
