const express = require('express');

const morgan = require('morgan')

const tasksRouter = require('../routes/todo.router')

const app = express();

app.use(morgan('combined')) // for logging requests


app.use(express.json()); // JSON parsing middleware

// routes
app.use('/tasks', tasksRouter);

module.exports = app