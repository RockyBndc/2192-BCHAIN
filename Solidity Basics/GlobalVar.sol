// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GlobalVariables {
    function globalVars() external view returns (address, address, uint, uint, uint, uint) {
        address sender = msg.sender;
        address blockCoin = block.coinbase;
        uint blockNum = block.number;
        uint timestamp = block.timestamp;
        uint gasPrice = tx.gasprice;
        uint blockGas = block.gaslimit;
        return (sender,  blockCoin, blockNum, timestamp, gasPrice, blockGas);
        }
}

/*Understanding Solidity's global variables such as msg.sender, block.coinbase, block.number, block.timestamp,
tx.gasprice, and block.gaslimit is crucial for developing secure and efficient smart contracts on the Ethereum blockchain.*/