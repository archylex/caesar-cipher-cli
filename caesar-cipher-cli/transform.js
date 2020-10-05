const fs = require('fs');
const { encode, decode} = require('./caesar');

const stream = require('stream');

class CaesarCipher extends stream.Transform {
  constructor(caesarShift = 0, options = {}) {
    options = Object.assign({}, options, {
      decodeString: false
    });
    super(options);
    stream.Transform.call(this);
    this.shift = caesarShift;
  }

  _transform(chunk, encoding, callback) {
    this.push(encode(chunk.toString(), this.shift));
    callback();
  }
}

module.exports = {
  CaesarCipher: CaesarCipher
};
