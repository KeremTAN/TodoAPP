var http = require('http'); //http module is loaded.
var fs = require('fs'); //file system - io proccess

//when server is created,
//a function must be written for responsing message to client.
var server = http.createServer(function(request, response){
   // response.write('Hi');  //write method response our message to clien
   if(request.url=='/'){
        fs.readFile('index.html', function(error, data) {
            response.write(data);
            response.end('response is closed!'); // there is always end
        });
    }
    if(request.url=='/login'){
        fs.readFile('login.html', function(error, data) {
            response.write(data);
            response.end('response is closed!'); // there is always end
        });
    }
});

//create port
server.listen(8000);
