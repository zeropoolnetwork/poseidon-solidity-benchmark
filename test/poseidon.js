const Test_Poseidon_2_8_55 = artifacts.require('Test_Poseidon_2_8_55');
const Poseidon_2_8_55 = artifacts.require('Poseidon_2_8_55');

const Test_Poseidon_6_8_56 = artifacts.require('Test_Poseidon_6_8_56');
const Poseidon_6_8_56 = artifacts.require('Poseidon_6_8_56');

const Test_EcOps = artifacts.require('Test_EcOps');


contract('test_poseidon_2_8_55', (accounts) => {
  let test_poseidon_2_8_55;
  beforeEach(async () => {
    const poseidon_2_8_55 = await Poseidon_2_8_55.new();
    await Test_Poseidon_2_8_55.link(Poseidon_2_8_55, poseidon_2_8_55.address);
    test_poseidon_2_8_55 = await Test_Poseidon_2_8_55.new();
  });

  it("Should process test_poseidon_2_8_55", async () => {
    let res = await test_poseidon_2_8_55.test();
    console.log(`Gas used: ${res.receipt.gasUsed.toString()}`);

  });
})


contract('test_poseidon_6_8_56', (accounts) => {
    let test_poseidon_6_8_56;
    beforeEach(async () => {
      const poseidon_6_8_56 = await Poseidon_6_8_56.new();
      await Test_Poseidon_6_8_56.link(Poseidon_6_8_56, poseidon_6_8_56.address);
      test_poseidon_6_8_56 = await Test_Poseidon_6_8_56.new();
    });
  
    it("Should process test_poseidon_6_8_56", async () => {
      let res = await test_poseidon_6_8_56.test();
      console.log(`Gas used: ${res.receipt.gasUsed.toString()}`);
  
    });
})


contract('Test_EcOps', (accounts) => {
    let test_ecops;
    beforeEach(async () => {
      test_ecops = await Test_EcOps.new();
    });
  
    it("Should process test_ecops", async () => {
      let res = await test_ecops.test();
      console.log(`Gas used for ecmul: ${res.receipt.gasUsed.toString()}`);
  
    });
})


