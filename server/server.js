var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var querystring = require('querystring');
var http = require('http');
var server = http.Server(app);
var path = require('path');

var fs = require('fs');

var sounds = require('./sounds.js');

// -- SERVE STATIC FILES and JSON

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/sounds', function (req, res) {
  res.send(sounds);
});

// -- START SERVER

var port = process.env.PORT || 3030; //like del
console.log('Listening on port', port);
server.listen(port);
