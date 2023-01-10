var http = require('http');
var fs = require('fs'); 
var path = require('path');
var express = require('express');
var app = express();
var router = require('./app_server/route/indexRoute');
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app_server/views'))
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(ejsLayouts);

/*  This is application level middleware.
*   Middleware is that middle function is written by us.
*   We have to use next object to connect middlewares each others.
*   app.USE is used for all request. We can use app.GET, app.POST.
*/
app.use(function(req, res, next){
    console.log("Request url : "+req.url);
    console.log("Date time : "+Date.now());
    next(); // call after middleware
});



app.use('/index', router);

app.listen(8000);