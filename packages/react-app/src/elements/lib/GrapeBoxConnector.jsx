function notImplemented(name) {
  throw new Error(`not implemented: ${name || arguments.callee.function.name}`);
}

// The goal of this class is to pretend to interact with the smart contract
// The react app would use this class and we will eventually swap it out with the right one
class GrapeBoxConnector {
  constructor({ contractReader, contractWriter }) {
    this.contractReader = contractReader;
    this.contractWriter = contractWriter;
  }

  txPrefs() {
    return {
      // this is where you would set gas overrides and stuff
    };
  }

  //#region props
  /** @returns {Promise<BigNumber>} */
  async checkBalance() {
    return notImplemented(this.function.name || "checkBalance");
  }

  /** @returns {Promise<BigNumber>} */
  async amountHarvestedNow() {
    return notImplemented("amountHarvestedNow");
  }

  /** @returns {Promise<BigNumber>} */
  async amountHarvestedTotal(txPrefs = this.txPrefs()) {
    return notImplemented();
  }
  //#endregion

  ReadContractValue(methodName) {
    return notImplemented();
  }
}

// class RealGrapeBox extends AbstractGrapeBox {
//
// }

class ContractGrapeBoxConnector extends GrapeBoxConnector {
  /**
   * @param {ethers.Contract} contract
   */
  constructor({ contract, contractWriter, contractReader }) {
    super(...arguments);

    this.contract = contract; // TODO: is this needed?
    this.contractReader = contractReader;
    this.contractWriter = contractWriter;
  }

  /** @returns {Promise<BigNumber>} */
  async amountHarvestedTotal(txPrefs = this.txPrefs()) {
    return this.contract.amountHarvestedTotal(txPrefs);
  }

  ReadContractValue(methodName) {
    return useContractReader(this.contractReader, "GrapeBox", methodName);
  }
}

class MockGrapeBoxConnector extends GrapeBoxConnector {
  props = {
    amountHarvestedNow: "0.02",
    amountHarvestedTotal: "15.2",
    amountHarvestedPrevious: "15.0",
    amountRewardedNow: "0.13",
    amountRewardedTotal: "0.20",
    amountRewardedPrevious: "0.7",

    lifetimeMinor: 0,

    effectiveAPRNow: "25%",
    effectiveAPRTotal: "19%",
    effectiveAPRPrevious: "12%",

    amountDepositedTotal: "5000",
    amountBalanceNow: "5015.2",

    dateFirstJoined: "24.2.2022.",
    dateLastHarvested: "11.5.2022.",
    quantityOfHarvests: "",
  };

  constructor(params) {
    super(...arguments);

    Object.keys(this.params).forEach(name => {
      this[name] = async function () {
        return this.params[name];
      };
    });
  }

  // async quantityOfHarvests() {
  //   return this['quantityOfHarvests'];
  // // }

  // async checkBalance() {
  //   return 10;
  // }

  // async amountHarvestedNow() {
  //   return 100;
  // }

  // async amountHarvestedTotal({ txPrefs = this.txPrefs() }) {
  //   return 1000;
  // }

  async ReadContractValue(methodName, ...args) {
    return this[methodName](...args);
  }
}

const utils = {
  // TODO: put your math boilerplate here.
  calculateYearAmount(asdfds) {

  },
};

export { utils };

// export {GrapeBox: MockGrapeBox};

export default MockGrapeBoxConnector;
