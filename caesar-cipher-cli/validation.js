const throwError = require('./errors');
const fs = require('fs');

function checOutputkFileExists(path) {
  fs.access(path, fs.F_OK, err => {
    if (err)
      throwError('outputFileDoesntExists');

    return true;
  })
}

function checInputkFileExists(path) {
  fs.access(path, fs.F_OK, err => {
    if (err)
      throwError('inputFileDoesntExists');

    return true;
  })
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
