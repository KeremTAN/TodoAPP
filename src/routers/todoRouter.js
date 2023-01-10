const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todo', todoController.todoGetAll);
router.get('/todo/:id', todoController.todoGetById);
router.post('/todo',todoController.todoAdd);
router.put('/todo/:id', todoController.todoUpdate);
router.delete('/todo/:id', todoController.todoDelete);

module.exports = router;