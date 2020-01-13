const Test_Poseidon_2_8_55 = artifacts.require('Test_Poseidon_2_8_55');
const Test_Poseidon_6_8_56 = artifacts.require('Test_Poseidon_6_8_56');
const Test_Poseidon_8_8_84 = artifacts.require('Test_Poseidon_8_8_84');
const Test_EcOps = artifacts.require('Test_EcOps');
const { updatePoseidonArtifact } = require("../src/poseidongenerated.js");


module.exports = async function (deployer) {
  await updatePoseidonArtifact(2, 8, 55);
  const Poseidon_2_8_55 = artifacts.require('Poseidon_2_8_55');
  await deployer.deploy(Poseidon_2_8_55);
  await deployer.link(Poseidon_2_8_55, Test_Poseidon_2_8_55);
  await deployer.deploy(Test_Poseidon_2_8_55);

  await updatePoseidonArtifact(6, 8, 56);
  const Poseidon_6_8_56 = artifacts.require('Poseidon_6_8_56');
  await deployer.deploy(Poseidon_6_8_56);
  await deployer.link(Poseidon_6_8_56, Test_Poseidon_6_8_56);
  await deployer.deploy(Test_Poseidon_6_8_56);

  await deployer.deploy(Test_EcOps);


//   await updatePoseidonArtifact(8, 8, 84);
//   const Poseidon_8_8_84 = artifacts.require('Poseidon_8_8_84');
//   await deployer.deploy(Poseidon_8_8_84);
//   await deployer.link(Poseidon_8_8_84, Test_Poseidon_8_8_84);
//   await deployer.deploy(Test_Poseidon_8_8_84);
};