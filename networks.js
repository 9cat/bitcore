var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  addressVersion: 0x41,
  magic: hex('c1c1c1c1'),
  genesisBlock: {
    height: 0,
    nonce: 24706485,
    version: 1,
    hash: hex('c741436d354a9fb337fbd79e4b2750732571f00e8b78d04493f9e9283cf4ad0b'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1395705600,
    merkle_root: hex('deceb268776c85c006c65804eb53e55960a85aaf75e366a5c7b0bf961b6defec'),
    bits: 486604799
  },
 
  proofOfWorkLimit: hex("00000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"),
  checkpoints: [], // need to put checkpoint blocks here
  addressPubkey: 0,
  addressScript: 5,
  keySecret: 128,
};

exports.testnet = {
  name: 'testnet',
  addressVersion: 0x6f,
  magic: hex('0b110907'),
  genesisBlock: {
    height: 0,
    nonce: 414098458,
    version: 1,
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    bits: 486604799,
  },
  genesisBlockTx: module.exports.livenet.genesisBlockTx,
  proofOfWorkLimit: module.exports.livenet.proofOfWorkLimit,
  checkpoints: [], // need to put checkput blocks here
  addressPubkey: 111,
  addressScript: 196,
  keySecret: 239,
};
