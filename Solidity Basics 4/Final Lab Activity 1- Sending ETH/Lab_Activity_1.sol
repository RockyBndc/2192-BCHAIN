//BONDOC, RAQUEL ANN P.
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract EtherWallet {
    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(_amount <= address(this).balance, "Insufficient balance");
        owner.transfer(_amount);
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}

/*You can check the amount of money in it, take money out, and put money in.
It validates that there is enough money before enabling withdrawals and is
configured so that only the wallet owner can take money out.*/