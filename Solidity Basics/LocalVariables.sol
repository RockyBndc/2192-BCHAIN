// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LocalVariables {
    uint public i;
    uint public r; //own
    bool public b;
    address public myAddress;

    function foo() external {
        uint x = 123;
        uint q = 818;
        bool f = false;

        //more code
        x += 456;
        f = true;
        r += 2001;

        i = 123;
        b = true;
        q = 818;
        myAddress = address(1);

    }
}
//The intial print are 'b' = bool:false; 'i' = uint256:0 ; 'myAddress' = address: 0x0000000000000000000000000000000000000000; 'r' = uint256:0.
//But once the foo i clicked then you click the variable 'b', 'bi', and 'myAdress' again,
//it will display 'b' = bool:true; 'i' = uint256:123 ; 'myAddress' = address: 0x0000000000000000000000000000000000000001; 'r' = uint256:2001.