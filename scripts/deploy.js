const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying GovernanceToken with deployer:", deployer.address);

  const GovernanceToken = await hre.ethers.getContractFactory("GovernanceToken");
  const token = await GovernanceToken.deploy("Governance Token", "GT", 1000000);

  await token.deployed();

  console.log("✅ GovernanceToken deployed at:", token.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
