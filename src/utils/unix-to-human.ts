import { BigNumber } from "@ethersproject/bignumber";

export const unixToHuman = (unix: BigNumber): string => {
    const dateObject = new Date(
        unix.toNumber() * 1000 // to ms format
        );
    
    return dateObject.toLocaleString();
};
