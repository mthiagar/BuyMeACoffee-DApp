// scripts/withdraw.js

const hre = require("hardhat");
const abi = require("../artifacts/contracts/BuyMeACoffee.sol/BuyMeACoffee.json");

async function main() {
    const contractAddress = "0x38788513594e1D1F58e79C396569CbF974d4c21B";
    const contractABI = abi.abi;

    const provider = new hre.ethers.providers.AlchemyProvider("goerli", process.env.GOERLI_API_KEY);
    const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const buyMeACoffee = new hre.ethers.Contract(contractAddress, contractABI, signer);

    //await buyMeACoffee.changeOwner("0x70a210aFa1fC1258C9C3f7da1C382E81a56A9194");
    console.log(await buyMeACoffee.current_withdraw())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });