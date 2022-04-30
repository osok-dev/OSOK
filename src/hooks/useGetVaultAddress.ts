import vaultFactoryContract from "../abi/VaultFactory.json";
import { ethers } from "ethers";
import { vaultFactoryContractAddress } from "../contracts";
import { useContractCall, useEthers } from "@usedapp/core";

const abi = vaultFactoryContract.abi;
const contractInterface = new ethers.utils.Interface(abi);

export function useGetVaultAddress(): string {
  const { account } = useEthers();

  const [address]: any =
    useContractCall({
      abi: contractInterface,
      address: vaultFactoryContractAddress,
      method: "getVaultAddress",
      args: [account],
    }) ?? [];
  return address;
}
