require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note right provide gesture merry flock switch'; 
let testAccounts = [
"0xf2e208ae2f7bcec1c6e4311f386b553e072baaa3d9f3f723cf7511fa1e85cb08",
"0x73e48392b496decc334b786815c131cc34440134b2533ecb09576e89bc4144bf",
"0x1d23e85062215d4810e723892934cffef8dd23a8a0b781c15870d01b9c36abeb",
"0x30fee33945f3007fa726421e2021093a3ab35304ddd1b879b35271e0f5defe9d",
"0xcdd2a9755e19ab2d89431439c95c15eba88a40f777d5ab5d67e9573e6ae51469",
"0x633eac5de141b420c2b7408148518b9123babe29447bec87524f19637c49e511",
"0xcde7374cfaebb0d214d434f9d949e5da9589f570c080c8c4ead2b934162917c7",
"0x2095f144babe6def5add5aea2926eafefe418612dbe2eebbba27d1d5f215e0fe",
"0xf09771005d3ea518c4a3d9593038f20a8c50c3d5453152c8f218cfcb170ffd49",
"0xb0a1c8d7f379b3050d4fc30a8215944b1b68cd9e4dc38bc3e614151bf80b8888"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
