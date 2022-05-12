pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./RTOKEN_EXAMPLE.sol"; 
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract GrapeBox {

  SEEDS seeds;

  constructor(address _SEEDS_REF_) payable {
    seeds = SEEDS(_SEEDS_REF_)
    // what should we do on deploy?
  }

  function enter(uint256 amount) {
    // IERC20(seeds.underlying()).safeTransferFrom(msg.sender, address(seeds), amount)
    seeds.mint(mintAmount);
  }

  // to support receiving ETH by default
  receive() external payable {}
  fallback() external payable {}
}
