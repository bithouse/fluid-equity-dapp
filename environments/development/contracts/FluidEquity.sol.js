// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"CancelRoom","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"v","type":"uint256"},{"name":"r","type":"uint256"},{"name":"c","type":"uint256"},{"name":"f","type":"uint256"}],"name":"setHouse","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"rentRoom","outputs":[],"type":"function"}],
    binary: "606060405261014c806100126000396000f3606060405260e060020a6000350463110175fd8114610031578063284988eb1461005b578063d8f479d51461009c575b005b61002f60015473ffffffffffffffffffffffffffffffffffffffff33811691161461011857610002565b6000805473ffffffffffffffffffffffffffffffffffffffff191633179055600480356003556024359081905560055560443560065560643560075561002f565b61002f60085460ff166000146100b157610002565b60065434146100bf57610002565b60055460019010156100d9576008805460ff191660011790555b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600160056000505403600560005081905550565b6005805460010190556008805460ff191690556002805473ffffffffffffffffffffffffffffffffffffffff19163317905556",
    unlinked_binary: "606060405261014c806100126000396000f3606060405260e060020a6000350463110175fd8114610031578063284988eb1461005b578063d8f479d51461009c575b005b61002f60015473ffffffffffffffffffffffffffffffffffffffff33811691161461011857610002565b6000805473ffffffffffffffffffffffffffffffffffffffff191633179055600480356003556024359081905560055560443560065560643560075561002f565b61002f60085460ff166000146100b157610002565b60065434146100bf57610002565b60055460019010156100d9576008805460ff191660011790555b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600160056000505403600560005081905550565b6005805460010190556008805460ff191690556002805473ffffffffffffffffffffffffffffffffffffffff19163317905556",
    address: "0xb382b6698e0a141da9934d667b55d480640d5409",
    generated_with: "2.0.8",
    contract_name: "FluidEquity"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("FluidEquity error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("FluidEquity error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("FluidEquity error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("FluidEquity error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.FluidEquity = Contract;
  }

})();
