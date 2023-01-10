const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todo', todoController.todoGetAll);
router.post('/todo',todoController.todoAdd);

module.exports = router;