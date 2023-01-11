const express = require('express');
const routerLogin = express.Router();
const loginController = require('../controllers/loginUserController');

routerLogin.post('/login', loginController.todoLogin);

module.exports  = routerLogin;