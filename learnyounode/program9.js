const http = require('http');
var bl = require('bl');
var HttpResponse = [undefined, undefined, undefined];

StartHttpGet(0);
StartHttpGet(1);
StartHttpGet(2);

function StartHttpGet(ArgIndex) {
    var RequestUrlPath = process.argv[2 + ArgIndex]
    var req = http.request(RequestUrlPath, function(res) {
        res.pipe(bl(function(err, data) { // Use BufferList to callback after stream is finished
            if (err) {
                WriteOutput(ArgIndex, err);
                return;
            }
            WriteOutput(ArgIndex, data.toString()); // callback on successfully getting server response
        }))
    });

    req.on('error', function(e) {
        // console.error(e.message);
        WriteOutput(ArgIndex, e.message.toString());
        return;
    });

    req.end();
}

function WriteOutput(ArgIndex, data) {
    if (HttpResponse[ArgIndex] == undefined) {
        HttpResponse[ArgIndex] = data; // Save HTTP response as string
    }
    if (HttpResponse.every(function(element) { // Check if all HTTP respones are stored
            return element != undefined;
        })) {
        HttpResponse.forEach(function(element) { // Write all HTTP responses to console
            console.log(element);
        });
    }
}
