var dirpath = process.argv[2];
var ext = process.argv[3];

var df = require('./print_directory_filtered')(dirpath, ext, WriteOutput); // Load custom module with command line a

function WriteOutput(errId, MatchingFilenames) {
    if (errId) {
        console.log("Error reading directory")
    }
    MatchingFilenames.forEach(function(row) {
        console.log(row);
    });
}
