var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var bufIndexFile = fs.readFileSync('Index.html');

app.get('/', function(request, response) {
  response.send(bufIndexFile.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
