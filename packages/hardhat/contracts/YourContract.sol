pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

interface GrapeBox {
    function depositLP() external;

    function checkBalance() external returns (uint256);
}

contract YourContract is GrapeBox {
    event SetPurpose(address sender, string purpose);

    string public purpose = "Building Unstoppable Apps!!!";

    struct Ledger {
      address user;
      uint256 lifetime;
      uint256 amountHarvestedTotal;
    }

    mapping(address => Ledger) public ledgers;

    // constructor() payable {
    //     // what should we do on deploy?
    // }

    function _sender() private view returns (address) {
      return msg.sender;
    }

    function mock_payout() public payable {
      ledgers[_sender()].lifetime += msg.value;
    }

    function lifetime() public view returns (uint256) {
      return ledgers[_sender()].lifetime;
    }

    function amountHarvestedTotal() public view returns (uint256) {
      return ledgers[_sender()].amountHarvestedTotal;
    }

    function setPurpose(string memory newPurpose) public {
        purpose = newPurpose;
        console.log(msg.sender, "set purpose to", purpose);
        emit SetPurpose(msg.sender, purpose);
    }

    function lifetimeMajor() public pure returns (uint256) {
        return 102300403204304;
    }

    function depositLP() public {
        // do nothing for now
    }

    function checkBalance() public pure returns (uint256) {
        return 10;
    }

    function amountHarvestedNow() public pure returns (uint256) {
        return 100;
    }

    // function amountHarvestedTotal() public pure returns (uint256) {
    //     return 1000;
    // }

    function lifetimeMinor() public pure returns (uint256) {
      return 3245834589345;
    }

    // to support receiving ETH by default
    receive() external payable {}

    fallback() external payable {}
}
