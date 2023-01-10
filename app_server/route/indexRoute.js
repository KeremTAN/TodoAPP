
var express = require('express');
var router = express.Router();
var controller = require('../controller/WebPageController');

/*  This is application level middleware. */
router.use(function(request, res, next){
    request.Hi = 'Hii'; 
    next();
});

router.get('/',controller.index);
router.get('/login', controller.login);

module.exports=router;