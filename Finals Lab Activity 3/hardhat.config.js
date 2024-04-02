/** 
* @type import ('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const {API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.3", defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-mainnet.g.alchemy.com/v2/W3swYmTVqPvJh7TEULUoH-IMt17ZkSsN",
      accounts: [`0x${"47449d0251b21ca350d70a0bfc00fbd8c6f30f43c3dbe44db16074d0980265a0"}`]
    }
  },
}