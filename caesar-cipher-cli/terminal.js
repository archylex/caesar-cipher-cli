const chalk = require('chalk');
const fs = require('fs');
const { pipeline, Readable } = require("stream");
const transform = require('./transform');
const readline = require('readline');
const { encode, decode} = require('./caesar');

function terminal(action, shift) {
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt(chalk.blue('text> '));
  rl.prompt();

  rl.on('line', function(line) {
    if (action === 'encode')
      console.log(encode(line.trim(), shift));
    else
      console.log(decode(line.trim(), shift));
    rl.prompt();
  }).on('close', function() {
    console.log('\nGoodbye!');
    process.exit(0);
  });
}

function terminalToFile(output, action, shift) {
  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.setPrompt(chalk.blue('text> '));
  rl.prompt();

  rl.on('line', function(line) {
    let data = '';

    if (action === 'encode')
      data = encode(line.trim(), shift);
    else
      data = decode(line.trim(), shift);

    fs.appendFile(output, data + '\n',
      { encoding: "utf-8", mode: 0o666, flag: "a" },
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    rl.prompt();
  }).on('close', function() {
    console.log('\nGoodbye!');
    process.exit(0);
  });
}

module.exports = {
  getStdIn: terminal,
  getStdOut: terminalToFile
};
