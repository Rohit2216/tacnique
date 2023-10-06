const express = require('express');
const userRouter = express.Router();
const {UserController} = require('../controller/UserController');
const {authenticateToken}=require("../middleware/authentication")

userRouter.post('/register', UserController.registerUser);
userRouter.post('/login', UserController.loginUser);
userRouter.get('/get',authenticateToken, UserController.getUserDetails);
userRouter.get('/',authenticateToken, UserController.getAllUsers);

module.exports = {userRouter};
