const express = require('express');
const routerLogin = express.Router();
const loginController = require('../controllers/loginController');

routerLogin.post('/login', loginController.todoLogin);

module.exports  = routerLogin;