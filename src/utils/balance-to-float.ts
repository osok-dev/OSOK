import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

export const balanceToFloat = (balance: BigNumber | undefined): number => {
  let bal = balance;
  if (!balance) {
    return 0;
  }

  const balanceFloat = parseFloat(formatEther(bal!));

  return balanceFloat;
};
