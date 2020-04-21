const Test_Poseidon_2_8_53 = artifacts.require('Test_Poseidon_2_8_53');
const Test_Poseidon_3_8_53 = artifacts.require('Test_Poseidon_3_8_53');
const Test_Poseidon_4_8_54 = artifacts.require('Test_Poseidon_4_8_54');
const Test_Poseidon_5_8_54 = artifacts.require('Test_Poseidon_5_8_54');
const Test_Poseidon_6_8_54 = artifacts.require('Test_Poseidon_6_8_54');

const Test_EcOps = artifacts.require('Test_EcOps');
const { updatePoseidonArtifact } = require("../src/poseidongenerated.js");


module.exports = async function (deployer) {
  await updatePoseidonArtifact(2, 8, 53);
  const Poseidon_2_8_53 = artifacts.require('Poseidon_2_8_53');
  await deployer.deploy(Poseidon_2_8_53);
  await deployer.link(Poseidon_2_8_53, Test_Poseidon_2_8_53);
  await deployer.deploy(Test_Poseidon_2_8_53);

  await updatePoseidonArtifact(3, 8, 53);
  const Poseidon_3_8_53 = artifacts.require('Poseidon_3_8_53');
  await deployer.deploy(Poseidon_3_8_53);
  await deployer.link(Poseidon_3_8_53, Test_Poseidon_3_8_53);
  await deployer.deploy(Test_Poseidon_3_8_53);

  await updatePoseidonArtifact(4, 8, 54);
  const Poseidon_4_8_54 = artifacts.require('Poseidon_4_8_54');
  await deployer.deploy(Poseidon_4_8_54);
  await deployer.link(Poseidon_4_8_54, Test_Poseidon_4_8_54);
  await deployer.deploy(Test_Poseidon_4_8_54);

  await updatePoseidonArtifact(5, 8, 54);
  const Poseidon_5_8_54 = artifacts.require('Poseidon_5_8_54');
  await deployer.deploy(Poseidon_5_8_54);
  await deployer.link(Poseidon_5_8_54, Test_Poseidon_5_8_54);
  await deployer.deploy(Test_Poseidon_5_8_54);

  await updatePoseidonArtifact(6, 8, 54);
  const Poseidon_6_8_54 = artifacts.require('Poseidon_6_8_54');
  await deployer.deploy(Poseidon_6_8_54);
  await deployer.link(Poseidon_6_8_54, Test_Poseidon_6_8_54);
  await deployer.deploy(Test_Poseidon_6_8_54);

  await deployer.deploy(Test_EcOps);


};