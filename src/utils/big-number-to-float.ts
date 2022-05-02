import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers";

export const bigNumberToFloat = (
  num: BigNumber | undefined,
  decimalPoints: number = 6
  ): number => {
  if (!num) {
    return 0;
  }

  let ethValue = parseFloat(utils.formatEther(num.toString()));
  // var roundedEthValue = ethValue.toFixed(decimalPoints);
  // faster than toFixed() and doesn't pad zeroes
  // const roundedEthValue = Math.round(ethValue * 100) / 100; 
  
  return ethValue;
};
