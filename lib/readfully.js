
function readFully(stream, callback) {
  var buffers = [];
  (function readChunk() {
    do {
      var buffer = stream.read(null);
      if(buffer) {
        buffers.push(buffer);
      }
    } while(buffer);
    stream.once('readable', readChunk)
  })();
  stream.on('end', function() {
    console.log(buffers.length);
    callback(Buffer.concat(buffers));
  })
}

var req = require("http").request({
  hostname: 'nodejs.org',
  port: 80,
  path: '/api/all.html',
  method: 'GET'
}, function(res) {
  readFully(res, function(buffer) {
    console.log(buffer.toString());
  });
});

req.on('error', function(error) {
  console.error(error);
})

req.end();