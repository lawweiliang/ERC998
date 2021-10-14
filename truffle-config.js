const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const mnemonic = process.env.MNEMONIC_PHRASE;
const infuraProjectId = process.env.INFURA_PROJECT_ID;
const etherScanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectId}`),
      network_id: 4,
      gas: 5500000,
      skipDryRun: true
    },
  },

  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: etherScanApiKey
  },
  compilers: {
    /*     solc: {
          version: "0.8.0",
          settings: {
            optimizer: {
              enabled: true, // Default: false
              runs: 1000 // Default: 200
            },
          }
        }, */
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 1000 // Default: 200
        },
      },
    }
  }
}
