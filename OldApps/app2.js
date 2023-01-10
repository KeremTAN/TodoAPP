var http = require('http');
var fs = require('fs'); 
var express = require('express');
var app = express();
var webController = require('./WebPageController')

app.use('/public', express.static(__dirname + '/public'));

app.get('/', webController.index);
app.get('/login', webController.login);

app.listen(8000);