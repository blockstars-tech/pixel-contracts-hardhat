import { artifacts, network } from "hardhat";

async function main() {
  const BigBoardNFTContract = artifacts.require("BigBoardNFT");

  return BigBoardNFTContract.new();
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
