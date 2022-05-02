import { Contract } from "@ethersproject/contracts";
import {
  vaultFactoryContractAddress,
  vaultFactoryContractInterface,
} from "../contracts";
import { useContractFunction } from "@usedapp/core";

export function useCreateVault() {
  const contract = new Contract(
    vaultFactoryContractAddress,
    vaultFactoryContractInterface
  );
  const { state, send } = useContractFunction(contract, "createVault", {
    transactionName: "Create Vault",
  });
  return { state, send };
}
