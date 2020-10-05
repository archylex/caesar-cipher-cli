function commands() {
  const throwError = require('./errors');
  const validation = require('./validation');
  const chalk = require('chalk');
  const parseArgs = require('minimist')(process.argv, {
    string: ['a', 's', 'i', 'o'],
    alias: { a: 'action', s: 'shift', i: 'input', o: 'output' }
  });
  let params = {};

  if (validation.checkAction(parseArgs.action))
    params.action = parseArgs.action;

  if (validation.checkShift(parseArgs.shift))
    params.shift = parseArgs.shift;

  if (parseArgs.input) {
    if (validation.isInputFileExists(parseArgs.input))
      params.input = parseArgs.input;
  } else {
    console.log(chalk.blue('Enter the text to encrypt/decrypt.'));
  }

  if (parseArgs.output)
    if (validation.isOutputFileExists(parseArgs.output))
      params.output = parseArgs.output;

  return params;
}

module.exports = commands;
