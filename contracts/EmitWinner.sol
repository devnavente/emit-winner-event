//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface Contract {
    event Winner(address);
    function attempt() external;
}

contract EmitWinner {
    event Winner(string);
    
    function emitWinner () public {
        address contractAddress = address(0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502);
        bytes memory data = abi.encodeWithSignature("attempt()");

        (bool success, ) = contractAddress.call(data);

        if (success) {
            emit Winner("you win!");
        }

    }
}
