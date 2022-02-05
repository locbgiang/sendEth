// https://eth-ropsten.alchemyapi.io/v2/1AVgmIR8Qesfg8Ode1G20I1T16cPQhST

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1AVgmIR8Qesfg8Ode1G20I1T16cPQhST',
      accounts: ['46022be6b2b848c48d784fd782f5718f80529d44401a69c63fd34d79579feeee'],
    },
  },
};