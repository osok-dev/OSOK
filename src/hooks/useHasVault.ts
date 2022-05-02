import {
  vaultFactoryContractAddress,
  vaultFactoryContractInterface,
} from "../contracts";
import { useCall, useEthers } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

export function useHasVault(): boolean | undefined {
  const { account } = useEthers();
  const contract = new Contract(
    vaultFactoryContractAddress,
    vaultFactoryContractInterface
  );

  const { value, error } =
    useCall({
      contract,
      method: "hasVault",
      args: [account],
    }) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
}
