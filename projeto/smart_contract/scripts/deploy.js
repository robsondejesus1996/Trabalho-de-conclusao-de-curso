const main = async() => {

  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions deployed to:", transactionsContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async() =>{

  try {

    await main();
    process.exit(0);
    
  } catch (error) {
    console.log(error)
    process.exit(1);
    
  }

}

runMain();
