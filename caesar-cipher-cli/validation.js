const throwError = require('./errors');
const fs = require('fs');

function checOutputkFileExists(path) {
  try {
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
    return true
  } catch (err) {
    throwError('outputFileDoesntExists');
    return false;
  }
}

function checInputkFileExists(path) {
  try {
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
    return true
  } catch (err) {
    throwError('inputFileDoesntExists');
    return false;
  }
}

function checkAction(action) {
  if (action) {
    if (typeof action === 'string' && (action === 'encode' || action === 'decode'))
      return true;
    else
      throwError('actionerr');
  } else
    throwError('noaction');
}

function checkShift(shift) {
  if (shift) {
    if (!isNaN(shift) && Number.isInteger(Number(shift)))
      return true;
    else
      throwError('shifterr');
  } else
    throwError('noshift');
}

module.exports = {
  isInputFileExists: checInputkFileExists,
  isOutputFileExists: checOutputkFileExists,
  checkAction: checkAction,
  checkShift: checkShift
}
