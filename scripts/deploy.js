// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  await buyMeACoffee.deployed();

  console.log("BuyMeACoffee deployed to: ", buyMeACoffee.address);

  //change owner of withdraw
  console.log(await buyMeACoffee.owner())
  console.log(await buyMeACoffee.current_withdraw())
  console.log("==== Change in Withdraw Address ===");
  await buyMeACoffee.changeOwner("0x70a210aFa1fC1258C9C3f7da1C382E81a56A9194");
  console.log(await buyMeACoffee.current_withdraw())  
}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

