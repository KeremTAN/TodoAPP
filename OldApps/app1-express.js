var http = require('http');
var fs = require('fs'); 
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
//client'ın css dosyalarına erişebilmesi için public dizinini static yaptık. 

app.get('/', function(request, response){
    fs.readFile('index.html', function(error, data) {
        response.write(data);
        response.end('response is closed!'); 
    });
});

app.get('/login', function(request, response){
    fs.readFile('login.html', function(error, data) {
        response.write(data);
        response.end('response is closed!');
    });
});

app.listen(8000);