pragma solidity ^0.4.21;

contract DemoContract {
    event BooleanEvent(bool value);

    function emitFalse() public {
        emit BooleanEvent(false);
    }
}
