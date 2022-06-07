import { artifacts, network } from "hardhat";

if (!process.env.DEFAULT_OWNER_OF_TOKENS) {
  throw new Error('Please specify default owner of tokens in your .env');
}

async function main() {
  let proxyRegistryAddress = '0xa5409ec958c83c3f309868babaca7c86dcb077c1';

  if (network.name === 'rinkeby') {
    proxyRegistryAddress = '0xf57b2c51ded3a29e6891aba85459d600256cf317';
  }

  const CreatureContract = artifacts.require("Creature");
  const creature = await CreatureContract.new(
    proxyRegistryAddress,
    process.env.DEFAULT_OWNER_OF_TOKENS
  );

  console.log("Pixel contract deployed to:", creature.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
