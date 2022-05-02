import { formatEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

export const bigNumberToFloat = (num: BigNumber | undefined): number => {
  if (!num) {
    return 0;
  }

  return parseFloat(formatEther(num!));
};
