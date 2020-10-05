const fs = require('fs');

function setInput(path) {
  let inputFile = fs.createReadStream(path, 'utf-8');
  return inputFile;
}

function setOutput(path) {
  const outputFile = fs.createWriteStream(path);
  return outputFile;
}

function stream(ipath, opath) {
  let input = setInput(ipath);
  let output = setOutput(opath);
    input.pipe(output);

}
