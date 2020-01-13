const path = require("path");
const truffleArtifactor = require('truffle-artifactor');
const poseidon = require("circomlib/src/poseidon_gencontract");



async function updatePoseidonArtifact(t, nRoundsF, nRoundsP) {
  const contractsDir = path.join(__dirname, "..", "build/contracts");
  const contractName = `Poseidon_${t}_${nRoundsF}_${nRoundsP}`;

  const unlinked_binary = poseidon.createCode(t, nRoundsF, nRoundsP);
  

  await (new truffleArtifactor(contractsDir)).save({
    contractName,
    abi: poseidon.abi,
    unlinked_binary
  })
};

exports.updatePoseidonArtifact = updatePoseidonArtifact;