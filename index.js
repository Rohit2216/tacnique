const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const {userRouter}=require("./routes/userRoutes")
const cors = require("cors");
const { taskRouter } = require("./routes/taskRoutes");
const rateLimit = require('express-rate-limit');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
  
app.use(limiter);
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({ "msg": "Welcome to Tacnique!" }); 
});

app.use('/users', userRouter);
app.use('/task', taskRouter);

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Task Management System API Documentation',
        version: '1.0.0',
        description: 'API documentation for Task Management System application',
      },
      servers: [
        {
          url: `https://tacnique-500v.onrender.com/`, // Replace with your server URL
          description: 'Development server',
        },
      ],
    },
    apis: ['./controller/*.js'], // Path to your API route files
  };
  
  const specs = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Database connected!");
    } catch (error) {
        console.log("Database not connected!");
        console.error(error);
    }
    console.log(`Server is running on port: ${process.env.port}`);
});
