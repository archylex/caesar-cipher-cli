const fs = require('fs');
const commands = require('./commands');
const transform = require('./transform');

const params = commands();


fs.createReadStream(params.input, 'utf-8')
  .pipe(new transform.CaesarCipher())
  .pipe(fs.createWriteStream(params.output, { flags: 'a+' }));
