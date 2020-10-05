const chalk = require('chalk');

process.on('noaction', err => {
  process.stderr.write(chalk.red('A required action parameter was not specified.\n'), () => process.exit(2));
});

process.on('actionerr', err => {
  process.stderr.write(chalk.red('The action name was incorrect.\n'), () => process.exit(2));
});

process.on('noshift', err => {
  process.stderr.write(chalk.red('A required shift parameter was not specified.\n'), () => process.exit(2));
});

process.on('shifterr', err => {
  process.stderr.write(chalk.red('The shift value was incorrect.\n'), () => process.exit(2));
});

process.on('outputFileDoesntExists', err => {
  process.stderr.write(chalk.red('The output file doesn\'t exists.\n'), () => process.exit(2));
});

process.on('inputFileDoesntExists', err => {
  process.stderr.write(chalk.red('The input file doesn\'t exists.\n'), () => process.exit(2));
});

function throwError(error) {
  process.emit(error)
};

module.exports = throwError;
