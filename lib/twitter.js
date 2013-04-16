var readFully = require("./readfully");

var req = require("https").request({
  method: 'POST',
  hostname:'stream.twitter.com',
  path:'/1/statuses/filter.json',
  auth: 'fsecurejs:jsftw13',
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}, function (res) {
  console.log(res.statusCode)
  readFully(res, null, function (buffer) {
    buffer.toString().split('\n\n').forEach(function(tweet) {
        console.log(JSON.parse(tweet).text);
    });
  });
});

req.on('error', function (error) {
  console.error(error);
})

req.write('track=' + 'security');

req.end();