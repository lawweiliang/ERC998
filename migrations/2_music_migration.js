
const globalVar = require('../global_variable/global_variable.js');
const metaboomContract = artifacts.require('Metaboom');


module.exports = async (deployer, network, [alice, bob]) => {
  await deployer.deploy(metaboomContract);
  metaboomContractInstance = await metaboomContract.deployed();
  await metaboomContractInstance.createNft(alice, globalVar.tokenLink.charmander);
}

