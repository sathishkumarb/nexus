var CowBuffer = module.exports = function() {
  Buffer.constructor.apply(this, arguments);
};

CowBuffer.prototype = new Buffer(0);

console.log(new CowBuffer("test")[0])
