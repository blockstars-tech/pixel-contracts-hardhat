import { artifacts, network } from "hardhat";

const PROXY_REGISTER_ADDRESS = {
  rinkeby: '0xf57b2c51ded3a29e6891aba85459d600256cf317',
  mainnet: "0xa5409ec958c83c3f309868babaca7c86dcb077c1"
}

async function main() {
  let proxyRegistryAddress = '0xa5409ec958c83c3f309868babaca7c86dcb077c1';

  if (network.name === 'rinkeby') {
    proxyRegistryAddress = '0xf57b2c51ded3a29e6891aba85459d600256cf317';
  }

  const CreatureContract = artifacts.require("Creature");
  const creature = await CreatureContract.new(proxyRegistryAddress);

  console.log("Pixel contract deployed to:", creature.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
