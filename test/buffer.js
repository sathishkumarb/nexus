var assert = require("assert");

exports.copy = function() {
  var a = new Buffer("abc"), b = new Buffer(3);
  a.copy(b);
  for(var i = 0; i < a.length; i ++) {
    assert(a[i] == b[i]);
  }
}