const fs = require('fs');
const commands = require('./commands');
const transform = require('./transform');
const terminal = require('./terminal');

const params = commands();

const shift = Number(params.shift);

if (params.input) {
fs.createReadStream(params.input, 'utf-8')
  .pipe(new transform.CaesarCipher(shift))
  .pipe(fs.createWriteStream(params.output, { flags: 'a+' }));
} else {
  terminal.getStdIn(shift);  
}
