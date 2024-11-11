#!/usr/bin/env node

const bip39 = require('bip39')
const mnemonic = bip39.entropyToMnemonic('00000000000000000000000000000000')
// => abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
console.log(mnemonic) // prints 24 words
// reversible
bip39.mnemonicToEntropy(mnemonic)
// => '00000000000000000000000000000000'
console.log(bip39.mnemonicToEntropy(mnemonic))
