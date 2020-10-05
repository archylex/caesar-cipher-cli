const fs = require('fs');
const transform = require('./transform');

function streamFile(input, output, action, shift) {
  fs.createReadStream(input, 'utf-8')
    .pipe(new transform.CaesarCipher(action, shift))
    .pipe(fs.createWriteStream(output, { flags: 'a+' }));
}

function streamFromFile(input, action, shift) {
  fs.createReadStream(input, 'utf-8')
    .pipe(new transform.CaesarCipher(action, shift))
    .pipe(process.stdout);
}

function streamToFile(input, output, action, shift) {
  input
    .pipe(new transform.CaesarCipher(action, shift))
    .pipe(process.stdout);
}

module.exports = {
  streamFile: streamFile,
  streamFromFile: streamFromFile,
  streamToFile: streamToFile
}
