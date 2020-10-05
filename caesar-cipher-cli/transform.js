const fs = require('fs');
const { encode, decode} = require('./caesar');

const stream = require('stream');

class CaesarCipher extends stream.Transform {
  constructor(options = {}) {
    options = Object.assign({}, options, {
      decodeString: false
    })
    super(options);
  }

  _transform(chunk, encoding, callback) {
    this.push(encode(chunk.toString(), 2));
    callback();
  }
}

module.exports = {
  CaesarCipher: CaesarCipher
};
