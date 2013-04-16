var readFully = module.exports = function(stream, end, chunk) {
  var buffers = [];
  (function readChunk() {
    do {
      var buffer = stream.read(null);
      if(buffer) {
        buffers.push(buffer);
        if(chunk) {
          chunk(buffer);
        }
      }
    } while(buffer);
    stream.once('readable', readChunk)
  })();
  stream.on('end', function() {
    if(end) {
      end(Buffer.concat(buffers));
    }
  })
}
/*
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
*/