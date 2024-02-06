// SPDX-License-Identifier: GPL-3.0
// compiler version must be greater than or equal to 0.8.20 and less than 0.9.0
pragma solidity ^0.8.7;

//Data Types - values and references

contract ValueTypes {
    bool public b = true;
    uint public u = 123;

    int public minInt = type(int).min;
    int public maxInt = type(int).max;
    address public addr = 0xD2D75cf1a4Ac4dAf3B670398Fd1b5B03cD06eCb0;
    bytes32 public b32 = 0x626c756500000000000000000000000000000000000000000000000000000000;
}