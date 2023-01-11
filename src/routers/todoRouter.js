const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const checkToken = require('../../auth');

router.get('/todo', checkToken, todoController.todoGetAll);
router.get('/todo/:id', checkToken, todoController.todoGetById);
router.post('/todo', checkToken, todoController.todoAdd);
router.put('/todo/:id', checkToken, todoController.todoUpdate);
router.delete('/todo/:id', checkToken, todoController.todoDelete);

module.exports = router;