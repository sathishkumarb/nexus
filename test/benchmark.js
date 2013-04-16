var EventEmitter = require('events').EventEmitter;

function MyEmitter(timeout) {
  var that = this;
  (function beacon() {
    that.emit('ping');
    if(that.running) {
      setTimeout(beacon, timeout);
    }
  })();
}

MyEmitter.prototype = new EventEmitter();

MyEmitter.prototype.kill = function() {
  this.running = false;
}

/*
 var emitter = new MyEmitter(100);
 emitter.on('ping', function() {
    console.log('ping');
 });
 */

module.exports = function(callback) {
  setTimeout(function() {
    callback();
  }, 100);
}

