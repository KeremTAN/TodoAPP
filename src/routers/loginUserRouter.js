const express = require('express');
const routerLogin = express.Router();
const loginController = require('../controllers/loginUserController');

/**
 * @swagger
 * /login:
 *  post:
 *      description: Use to login the system
 *      responses:
 *          '200':
 *             description: successfull response 
 */
routerLogin.post('/login', loginController.todoLogin);

module.exports  = routerLogin;