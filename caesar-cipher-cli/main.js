const commands = require('./commands');
const { encode, decode} = require('./caesar');

const params = commands();

console.log(encode('Aa', params.shift));
