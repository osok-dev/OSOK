import vaultFactoryContract from "../abi/VaultFactory.json";
import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";

import { vaultFactoryContractAddress } from "../contracts";
import { useContractFunction } from "@usedapp/core";

const abi = vaultFactoryContract.abi;
const contractInterface = new ethers.utils.Interface(abi);
const contract = new Contract(vaultFactoryContractAddress, contractInterface);

export function useCreateVault() {
  const { state, send } = useContractFunction(contract, "createVault", {
    transactionName: "Create Vault",
  });
  return { state, send };
}
