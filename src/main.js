'use strict'

const Web3 = require('web3')
const contractAbi = require('./DemoContract.json')

const web3 = new Web3('ws://localhost:8546')
const fromAddress = '0x00ea169ce7e0992960d3bde6f5d539c955316432'
const contractAddress = '0xB18BcaA1C15140CDC09d19939e76063aC8DC430C'
const contract = new web3.eth.Contract(contractAbi, contractAddress)

contract.methods.emitFalse()
  .send({ from: fromAddress })
  .on('confirmation', function (confirmationNumber, receipt) {
    // prints {"0":null,"value":null}
    console.log(JSON.stringify(receipt.events.BooleanEvent.returnValues))
    process.exit(0)
  })
