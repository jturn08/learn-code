const http = require('http');
var bl = require('bl');

var RequestUrlPath = process.argv[2];

var req = http.request(RequestUrlPath, function(res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }))
});

req.on('error', function(e) {
    console.error(e.message);
});

req.end();
