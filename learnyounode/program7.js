var http = require('http');
var RequestUrlPath = process.argv[2];

// var options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST'
// };

var req = http.request(RequestUrlPath, function(res) {
  // console.log('STATUS: ' + res.statusCode);
  // console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
