// Filtered ls

var fs = require('fs'); // Load fs Node.js core module
var path = require('path'); // Load path Node.js core module

var dirpath = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirpath, function processFilenames(errId, contents) {
    if (errId) {
        return console.error(errId);
    }
    contents.forEach( function(row) {
        if (path.extname(row) == ext) {
            console.log(row);
        }
    })
});
