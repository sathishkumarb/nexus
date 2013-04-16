var read = require("./readfully");

var clients = exports.clients = [];
var log = exports.log = [];

var send = exports.send = function(message, socket) {
  log.push(message);
  clients.forEach(function(client) {
    if(client != socket) {
      client.write(message);
    }
  });
}

var server = require('net').createServer(function(socket) {
  clients.push(socket);
  read(socket, function() {
    clients.splice(clients.indexOf(socket), 1);
  }, function(chunk) {
    var message = chunk.toString().trim();
    console.log(message);
    send(message, socket);
  }, true);
});

server.listen(8000);

server.on('close', function() {
  // cleanup
});