exports.run = function(t, concurrency, total) {
  console.log("Runnning " + concurrency + " " + total)
  var count = 0, running = 0;
  var start = Date.now();
  (function runTask() {
    if(count + running < total) {
      if(running < concurrency) {
        running ++;
        t(function() {
          running --;
          count ++;
          if(count % (Math.floor(total / 10)) == 0) {
            console.log(count);
          }
          if(count == total) {
            console.log("Total: " + (Date.now() - start) / 1000 + "s");
          }
        });
      }
      setTimeout(runTask, 1);
    }
  })();
}

if (require.main === module) {
  exports.run(require(process.argv[2]), process.argv[3], process.argv[4]);
}
