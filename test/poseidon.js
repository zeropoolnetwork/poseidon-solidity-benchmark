

const Test_Poseidon_2_8_53 = artifacts.require('Test_Poseidon_2_8_53');
const Test_Poseidon_3_8_53 = artifacts.require('Test_Poseidon_3_8_53');
const Test_Poseidon_4_8_54 = artifacts.require('Test_Poseidon_4_8_54');
const Test_Poseidon_5_8_54 = artifacts.require('Test_Poseidon_5_8_54');
const Test_Poseidon_6_8_54 = artifacts.require('Test_Poseidon_6_8_54');


// 



// const Test_Poseidon_6_8_54 = artifacts.require('Test_Poseidon_6_8_54');
// const Poseidon_6_8_54 = artifacts.require('Poseidon_6_8_54');

const Test_EcOps = artifacts.require('Test_EcOps');


contract('test_poseidon_2_8_53', (accounts) => {
  let test_poseidon_2_8_53;
  beforeEach(async () => {
    test_poseidon_2_8_53 = await Test_Poseidon_2_8_53.deployed();
  });

  it("Should process test_poseidon_2_8_53", async () => {
    let res = await test_poseidon_2_8_53.test.call();
    console.log(`Gas used: ${res.toString()}`);
    console.log(res.toNumber());
  });
})

contract('test_poseidon_3_8_53', (accounts) => {
  let test_poseidon_3_8_53;
  beforeEach(async () => {
    test_poseidon_3_8_53 = await Test_Poseidon_3_8_53.deployed();
  });

  it("Should process test_poseidon_3_8_53", async () => {
    let res = await test_poseidon_3_8_53.test.call();
    console.log(`Gas used: ${res.toString()}`);
    console.log(res.toNumber()/2);
  });
})

contract('test_poseidon_4_8_54', (accounts) => {
  let test_poseidon_4_8_54;
  beforeEach(async () => {
    test_poseidon_4_8_54 = await Test_Poseidon_4_8_54.deployed();
  });

  it("Should process test_poseidon_4_8_54", async () => {
    let res = await test_poseidon_4_8_54.test.call();
    console.log(`Gas used: ${res.toString()}`);
    console.log(res.toNumber()/3);
  });
})

contract('test_poseidon_5_8_54', (accounts) => {
  let test_poseidon_5_8_54;
  beforeEach(async () => {
    test_poseidon_5_8_54 = await Test_Poseidon_5_8_54.deployed();
  });

  it("Should process test_poseidon_5_8_54", async () => {
    let res = await test_poseidon_5_8_54.test.call();
    console.log(`Gas used: ${res.toString()}`);
    console.log(res.toNumber()/4);
  });
})

contract('test_poseidon_6_8_54', (accounts) => {
  let test_poseidon_6_8_54;
  beforeEach(async () => {
    test_poseidon_6_8_54 = await Test_Poseidon_6_8_54.deployed();
  });

  it("Should process test_poseidon_6_8_54", async () => {
    let res = await test_poseidon_6_8_54.test.call();
    console.log(`Gas used: ${res.toString()}`);
    console.log(res.toNumber()/5);
  });
})



// contract('test_poseidon_3_8_53', (accounts) => {
//     let test_poseidon_3_8_53;
//     beforeEach(async () => {
//       updatePoseidonArtifact(3, 8, 53);
//       const Poseidon_3_8_53 = artifacts.require('Poseidon_3_8_53');
//       const poseidon_3_8_53 = await Poseidon_3_8_53.new();
//       await Test_Poseidon_3_8_53.link(Poseidon_3_8_53, poseidon_3_8_53.address);
//       test_poseidon_3_8_53 = await Test_Poseidon_3_8_53.new();
//     });
  
//     it("Should process test_poseidon_3_8_53", async () => {
//       let res = await test_poseidon_3_8_53.test();
//       console.log(`Gas used: ${res.receipt.gasUsed.toString()}`);
  
//     });
// })


// contract('test_poseidon_4_8_54', (accounts) => {
//   let test_poseidon_4_8_54;
//   beforeEach(async () => {
//     updatePoseidonArtifact(4, 8, 54);
//     const Poseidon_4_8_54 = artifacts.require('Poseidon_4_8_54');
//     const poseidon_4_8_54 = await Poseidon_4_8_54.new();
//     await Test_Poseidon_4_8_54.link(Poseidon_4_8_54, poseidon_4_8_54.address);
//     test_poseidon_4_8_54 = await Test_Poseidon_4_8_54.new();
//   });

//   it("Should process test_poseidon_4_8_54", async () => {
//     let res = await test_poseidon_4_8_54.test();
//     console.log(`Gas used: ${res.receipt.gasUsed.toString()}`);

//   });
// })



contract('Test_EcOps', (accounts) => {
    let test_ecops;
    beforeEach(async () => {
      test_ecops = await Test_EcOps.deployed();
    });
  
    it("Should process test_ecops", async () => {
      let res = await test_ecops.test.call();
      console.log(`Gas used for ecmul: ${res.toString()}`);
  
    });
})


