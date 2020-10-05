const readline = require('readline');
const { encode, decode} = require('./caesar');

function terminal(shift) {
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt('text> ');
  rl.prompt();

  rl.on('line', function(line) {
    console.log(encode(line.trim(), shift))
    rl.prompt();
  }).on('close', function() {
    console.log('\nGoodbye!');
    process.exit(0);
  });
}

module.exports = {
  getStdIn: terminal
};
