const fs = require('fs');
const { encode, decode} = require('./caesar');

const stream = require('stream');

class CaesarCipher extends stream.Transform {
  constructor(action = '', caesarShift = 0, options = {}) {
    options = Object.assign({}, options, {
      decodeString: false
    });
    super(options);
    stream.Transform.call(this);
    this.shift = caesarShift;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    if (this.action === 'encode')
      this.push(encode(chunk.toString(), this.shift));
    else
      this.push(decode(chunk.toString(), this.shift));

    callback();
  }
}

module.exports = {
  CaesarCipher: CaesarCipher
};
