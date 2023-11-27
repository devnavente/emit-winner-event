// import testing libraries: https://www.chaijs.com/guide/styles/ 
const { expect, assert } = require("chai");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestEmitWinner", function () {
  it("should emit winner", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const EmitWinner = await ethers.getContractFactory("EmitWinner");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await EmitWinner.deploy();

    // wait for contract to be deployed and validated!
    await contract.deployed();

    contract.on("Winner", () => {
        return true;
    });

    // emit the winner!
    await contract.emitWinner();

    setTimeout(() => {
        return false;
    }, 5000);
      
  });
});