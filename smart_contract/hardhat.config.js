require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  0x51c6f248D5c9F5970c798442589845A991247a06

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/P7dYoFvwcmsaFvIyv7H__KwWmqhQZRpe',
      accounts: [
        '1baa0c0f60e57bdc69c24dfa8773329c48aabe64bf0e3919695b8713c61d1a7d',
      ]
    }
  }
};
