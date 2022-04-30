console.log("\n\n\n", process.env.NODE_ENV);

// Possibly a more robust way to go about this
const isDev = process.env.NODE_ENV === "development";
const contract = isDev
  ? "<FILL TESTNET ADDRESS HERE>"
  : "<FILL MAINNET ADDRESS HERE>";

export const vaultFactoryContractAddress = contract;
