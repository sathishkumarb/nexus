var fs = require("fs");

exports.run = function(module) {
  try {
    var packageJSON = fs.readFileSync(module + "package.json");
    var package = JSON.parse(packageJSON);
    module = package.scripts && package.scripts.test;
  } catch(e) {
  }
  var tests = require(module);
  console.log("Testing: " + module);
  for(var test in tests) {
    try {
      tests[test]();
      console.log(test + " PASSED");
    } catch(e) {
      console.log(test + " FAILED" + (e.message ? ': ' + e.message : ''))
    }
  }
  console.log();
}

if (require.main === module) {
 exports.run(process.argv[2]);
}