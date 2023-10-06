const express = require('express');
const {TaskController} = require('../controller/TaskController');
const taskRouter = express.Router();
const {authenticateToken}=require("../middleware/authentication")

// Route to add a new task
taskRouter.post('/addtasks',authenticateToken, TaskController.addTask);

// Route to retrieve all tasks
taskRouter.get('/gettasks',authenticateToken, TaskController.getAllTasks);

// Route to retrieve a specific task by ID
taskRouter.get('/tasks/:id',authenticateToken, TaskController.getTaskById);

// Route to update a specific task by ID
taskRouter.put('/tasks/:id',authenticateToken, TaskController.updateTaskById);

// Route to delete a specific task by ID
taskRouter.delete('/tasks/:id',authenticateToken, TaskController.deleteTaskById);


module.exports = {taskRouter};
