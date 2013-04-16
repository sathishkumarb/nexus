var assert = require("assert");

exports["Passing Test"] = function() {
  assert(1 + 1 == 2);
}

exports["Failing Test"] = function() {
  assert(1 + 1 == 3);
}