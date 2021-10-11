require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid gloom tape slab chest note museum uncle install beach system gift'; 
let testAccounts = [
"0x8cb88944b25c86dc9d413b51455e62553b41002b6d9e3125ecb7516d578c1d79",
"0xae50d1864b1c20b4121f557154ea2494cb572b25b8e567fe7b54e9c4b0641bb9",
"0x395596b91e9a4e25cfc6b7b66d7bf2c77d2bd2934e811eb1c78ebb740cc9139e",
"0xb0c48ab893adc48d69e600642763ef52f1b77f82d46063535182e48af95a7e02",
"0xebb20f43a47f73cd36f5c172fb4a7bcd68e3fdda2a16926bbefe98be155e47df",
"0x7b2ab5eb89a36d44f12d2f9ec318e9dea39544c082cc1a4ff8cea854c01f184b",
"0xf5989db170135733323b91a1be794aeab2f73e9c48c69dca2122bd26e779af39",
"0xe8df197c38a14b2fd91a91e0413dd78fb7abf37b1dbec5be5bbeb27676a7010f",
"0xf30364434c936c4703e6661305fff626d24b8a95d99c097eb75a462eec46f30e",
"0x018e6f9919f77e1a5563637203fa9c5dac65de063e4ce479fff2929b5f437d12"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

