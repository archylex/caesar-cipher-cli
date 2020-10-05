const commands = require('./commands.js');
const file = require('./streams.js');
const terminal = require('./terminal.js');

const params = commands();
const shift = Number(params.shift);

if (params.input && params.output) {
  file.streamFile(params.input, params.output, params.action, shift);
} else if (params.input){
  file.streamFromFile(params.input, params.action, shift);
} else if (params.output){
  terminal.getStdOut(params.output, params.action, shift);
} else {
  terminal.getStdIn(params.action, shift);
}
