const express = require('express');

const {
    httpGetAllTasks,
    httpAddNewTask,
    httpDeleteTask,
    httpEditTask
} = require('../controllers/todo.controller')

const tasksRouter = express.Router();

tasksRouter.get('/', httpGetAllTasks)
tasksRouter.post('/', httpAddNewTask)
tasksRouter.delete('/:id', httpDeleteTask)
tasksRouter.put('/:id', httpEditTask);


module.exports = tasksRouter