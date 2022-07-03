
const hre = require("hardhat");

async function main() {

  const Medfile = await hre.ethers.getContractFactory("Medfile");
  const medfile = await Medfile.deploy();

  await medfile.deployed();

  console.log("Medfile deployed to:", medfile.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
