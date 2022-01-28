// https://eth-ropsten.alchemyapi.io/v2/1AVgmIR8Qesfg8Ode1G20I1T16cPQhST

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1AVgmIR8Qesfg8Ode1G20I1T16cPQhST',
      accounts: ['13c72803a93fdea416195a36db011839ed242b7daaeffd0144e25259eb0e25ad'],
    },
  },
};
