import { ethers } from "ethers";
import vaultFactoryContract from "../abi/VaultFactory.json";
import vaultContract from "../abi/Vault.json";

const TESTNET_ADDRESS = "0x3db847E4D3B6117e8ed060C8e45e2e680d5E2AAD";
const MAINNET_ADDRESS = "0x3db847E4D3B6117e8ed060C8e45e2e680d5E2AAD"; // TODO: change to mainnet and put these in vercel env variables

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
