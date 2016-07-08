// My First I/O

var fs = require('fs'); // Load fs module from core library

var filepath = process.argv[2]; // Skip first 2 values that include system info

fs.readFile(filepath, function calculateNewLines(errId, contents) {
    if (errId) {
        return console.error(errId);
    }
    var totalNewLines = contents.toString().split("\n").length - 1; // subtract 1 because last line doesn't end in newline
    console.log(totalNewLines);
});
