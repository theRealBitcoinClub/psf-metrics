/*
  This file contains utility functions for interacting with the Bitcoin Files
  Protocol (BFP):
  https://github.com/simpleledger/slp-specifications/blob/master/bitcoinfiles.md

  This file contains functions based on these examples:
  https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/bfp
*/

const BCHJS = require('@psf/bch-js')

class BFP {
  constructor (config) {
    this.bchjs = new BCHJS()
  }

  helloWorld () {
    console.log('Hello world.')
  }
}

module.exports = BFP
