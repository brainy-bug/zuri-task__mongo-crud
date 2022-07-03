const express = require('express');

const {
    httpGetAllTasks,
    httpAddNewTask,
    httpAbortTask,
    httpEditTask
} = require('../todo/todo.controller')

const tasksRouter = express.Router();

tasksRouter.get('/', httpGetAllTasks)
tasksRouter.post('/', httpAddNewTask)
tasksRouter.delete('/:id', httpAbortTask)
tasksRouter.put('/:id', httpEditTask);


module.exports = tasksRouter