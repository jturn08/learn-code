// My First I/O

var fs = require('fs'); // Load fs module from core library

var filepath = process.argv[2];
var contents = fs.readFileSync(filepath);
var totalNewLines = contents.toString().split("\n").length - 1; // subtract 1 because last line doesn't end in newline
console.log(totalNewLines);
