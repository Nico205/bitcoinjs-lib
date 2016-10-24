// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

module.exports = {
  machinecoin: {
    messagePrefix: '\x18Machinecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x05,
    wif: 0xb2
  },
  bitcoin: machinecoin
}
