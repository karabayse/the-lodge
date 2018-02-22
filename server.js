// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var moment = require('moment');
var fullcalendar = require('fullcalendar');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

// globals
var port = process.env.PORT || 4444;

// spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
