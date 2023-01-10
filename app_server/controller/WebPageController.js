/****  Constructor
module.exports = function(parameter){
    console.log("Constructor has been worked");
}
****/
var path = require('path');
module.exports.index = function(request, response){
    var alphabet = ['A','B','C'];
    response.render('index', {
        message: 'hi, I am controller.',
        symbols: alphabet
    });
};

module.exports.login = function(request, response){
    console.log(request.Hi);
    response.render('login');
};

