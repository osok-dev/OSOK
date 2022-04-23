import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

export const formatBalance = (balance: BigNumber | undefined) => {
  if (!balance) {
    return 0;
  }

  const balanceFloat = parseFloat(formatEther(balance));
  const rounded = balanceFloat.toFixed(3);

  return `${rounded} BNB`;
};
