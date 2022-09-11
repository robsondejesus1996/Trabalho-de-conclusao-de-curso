require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/97LbN7GZgI_cMw-Hs2LdA-FaYsa-Odzd', 
      accounts: ['8178e5ec4cddee34a69f48befec1674e8625b3adfe1e31cd8cabec0feeb51de0']
    }
  }
};
