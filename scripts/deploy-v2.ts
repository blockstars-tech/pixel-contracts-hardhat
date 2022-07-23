import { artifacts, network } from "hardhat";

if (!process.env.DEFAULT_OWNER_OF_TOKENS) {
  throw new Error("Please specify default owner of tokens in your .env");
}

async function main() {
  const BigBoardNFTContract = artifacts.require("BigBoardNFT");

  return BigBoardNFTContract.new(process.env.DEFAULT_OWNER_OF_TOKENS);
}

main()
  .then(({ address }) => {
    console.log("BigBoardNFT contract deployed to:", address);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
