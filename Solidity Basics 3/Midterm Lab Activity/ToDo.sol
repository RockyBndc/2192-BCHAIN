// RAQUEL ANN P. BONDOC
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./4_Structs_demo.sol";

contract Todos {
    Todo[] public todos;

    function somefunc() external {
        Todo memory task1 = Todo("Hello", true);

        todos.push(task1);
    }
}