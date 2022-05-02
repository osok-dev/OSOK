import { ethers } from "ethers";
import vaultFactoryContract from "../abi/VaultFactory.json";
import vaultContract from "../abi/Vault.json";

const TESTNET_ADDRESS = "0x001F3228d29330B9556AF3d3e71ab4861F15E763";
const MAINNET_ADDRESS = "0x001F3228d29330B9556AF3d3e71ab4861F15E763"; // TODO: change to mainnet contract and put these in vercel env variables

// Possibly a more robust way to go about this
const isDev = process.env.NODE_ENV === "development";
const contract = isDev ? TESTNET_ADDRESS : MAINNET_ADDRESS;

export const vaultFactoryContractAddress = contract;

export const vaultFactoryContractInterface = new ethers.utils.Interface(
  vaultFactoryContract.abi
);

export const vaultContractInterface = new ethers.utils.Interface(
  vaultContract.abi
);
