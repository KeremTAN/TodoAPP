var http = require('http');
var fs = require('fs'); 
var router = new Object(); // All objects are hashmap in JS

var homeController = function(request, response){
    fs.readFile('index.html', function(error, data) {
        response.write(data);
        response.end('response is closed!'); 
    });
}

var loginController = function(request, response){
    fs.readFile('login.html', function(error, data) {
        response.write(data);
        response.end('response is closed!');
    });
}

router["/"]= homeController;
router["/login"]= loginController;

var server = http.createServer(function(request, response){
   if(request.url in router)
    router[request.url](request, response);
});

//create port
server.listen(8000);