const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('601911f0ace8707504d1bf478bf91736e291f3ba535227322a172fe96aa30604')
const myWalletAddress = myKey.getPublic('hex')

let pytorch = new Blockchain()

// code to mine blocks

// console.log('Mining block 1...')
// pytorch.addBlock(new Block('24/08/2002', {amount: 100}))

// console.log('Mining block 2...')
// pytorch.addBlock(new Block('25/04/2002', {amount: 300}))

const tx1 = new Transaction(myWalletAddress, 'public', 5)
tx1.signTransaction(myKey)
pytorch.addTransaction(tx1)

console.log('\n Starting the miner...')
pytorch.minePendingTransactions(myWalletAddress)
console.log('\n Balance of Shrey is', pytorch.getBalanceOfAddress(myWalletAddress))