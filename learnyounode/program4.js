// My First Async I/O

var fs = require('fs'); // Load fs module from core library
var filepath = process.argv[2]; // Skip first 2 values that include system info
var totalNewLines = undefined;

StartReadFile(StartConsoleLog);

function StartReadFile(callback) {
  fs.readFile(filepath, function StartProcessFile(errId, contents) {
    if (errId) {
      return console.error(errId);
    }
    totalNewLines = contents.toString().split("\n").length - 1; // subtract 1 because last line doesn't end in newline

    callback();
  });
}

function StartConsoleLog() {
  console.log(totalNewLines);
}
