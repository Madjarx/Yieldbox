// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Seeds is ERC20 {
    constructor(uint256 initialSupply) ERC20("Seeds", "SEEDS") {
        _mint(msg.sender, initialSupply);
    }
}