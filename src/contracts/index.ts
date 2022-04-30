const TESTNET_ADDRESS = "0x3db847E4D3B6117e8ed060C8e45e2e680d5E2AAD";
const MAINNET_ADDRESS = "";

// Possibly a more robust way to go about this
const isDev = process.env.NODE_ENV === "development";
const contract = isDev ? TESTNET_ADDRESS : MAINNET_ADDRESS;

export const vaultFactoryContractAddress = contract;
