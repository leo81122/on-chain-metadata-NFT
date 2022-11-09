// require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_MUMBAI_URL = process.env.POLYGON_MUMBAI_URL;
const POLYGON_MUMBAI_API_KEY = process.env.POLYGON_MUMBAI_API_KEY;

// set proxy for access to etherscan
const proxyUrl = "http://127.0.0.1:8001"; // local proxy port
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGON_MUMBAI_API_KEY,
  },
};
