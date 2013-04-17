var express = require('express');
var telnet = require('./telnet');
var read = require('./readfully');

var app = express();

app.use('/api/sdsd', express.static('./app'));

app.get('/api', function(req, res){
  res.json(telnet.log);
});

// curl -X POST -d '{"message":"hello"}' http://localhost:3000/api/
app.post('/api', function(req, res) {
  read(req, function(data) {
    telnet.send(JSON.parse(data.toString()).message);
    res.json({});
  });
})

app.listen(3000);
