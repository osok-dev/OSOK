import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

export const formatBalance = (balance: BigNumber | undefined) => {
  let bal = balance;
  if (!balance) {
    bal = BigNumber.from(0);
  }

  const balanceFloat = parseFloat(formatEther(bal!));
  const rounded = balanceFloat.toFixed(3);

  return `${rounded} BNB`;
};
