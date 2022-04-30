import { BigNumber } from "@ethersproject/bignumber";
import { useEtherBalance } from "@usedapp/core";
import { useGetVaultAddress } from "./useGetVaultAddress";

export function useVaultBalance(): BigNumber | undefined {
  const address = useGetVaultAddress();
  const balance = useEtherBalance(address);
  return balance;
}
