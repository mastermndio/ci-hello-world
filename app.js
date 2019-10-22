var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Goodbye People!');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
