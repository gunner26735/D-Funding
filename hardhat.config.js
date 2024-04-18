require("@nomicfoundation/hardhat-toolbox");

const { vars } = require('hardhat/config');

const API_KEY = vars.get("ALCHMEY_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia : {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_KEY}`,
      accounts: [vars.get("PRIMARY_ACCOUNT")],
    }
  }
};
