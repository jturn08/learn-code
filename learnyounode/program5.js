// Filtered ls

var fs = require('fs'); // Load fs Node.js core module
var path = require('path'); // Load path Node.js core module

var dirpath = process.argv[2];
var ext = '.' + process.argv[3];
var row = undefined;

StartReadDirectory(CheckExtension);

function StartReadDirectory(callback) {
  fs.readdir(dirpath, function processFilenames(errId, contents) {
    if (errId) {
      return console.error(errId);
    }
    contents.forEach(CheckExtension);
  });
}

function CheckExtension(row) {
  if(path.extname(row) == ext) {
    StartConsoleLog(row);
  }
}

function StartConsoleLog(text) {
  console.log(text)
}
