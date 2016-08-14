var fs = require('fs'); // Load fs Node.js core module
var path = require('path'); // Load path Node.js core module

module.exports = function(dirpath, ext, callback) {
    var row = undefined;
    var MatchingFiles = [];
    ext = '.' + ext;

    StartReadDirectory();

    function StartReadDirectory() {
        fs.readdir(dirpath, function(errId, contents) {
            if (errId) {
                return callback(errId);
            }
            contents.forEach(CheckExtension);     // Call function to check if file extension matches

            callback(null, MatchingFiles);         // Success, no errors. Return error==null and data
        })
    };

    function CheckExtension(row) {
        if (path.extname(row) == ext) {
            MatchingFiles.push(row); // Add filename to array of MatchingFiles
        }
    }
};
