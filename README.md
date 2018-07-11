# web3.js-1403
Demo for issue:
https://github.com/ethereum/web3.js/issues/1403

PR: 
https://github.com/ethereum/web3.js/pull/1627

## Environment
- parity v1.10
- solidity 0.4.24
- web3-1.0.0-beta.33

## Contract code
```
pragma solidity ^0.4.21;

contract DemoContract {
    event BooleanEvent(bool value);

    function emitFalse() public {
        emit BooleanEvent(false);
    }
}
```

## js code
```javascript
contract.methods.emitFalse()
  .send({ from: fromAddress })
  .on('confirmation', function (confirmationNumber, receipt) {
    // prints {"0":null,"value":null}
    console.log(JSON.stringify(receipt.events.BooleanEvent.returnValues))
    process.exit(0)
  })
```
