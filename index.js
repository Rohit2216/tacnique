const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const {userRouter}=require("./routes/userRoutes")
const cors = require("cors");
const { taskRouter } = require("./routes/taskRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({ "msg": "Welcome to Tacnique!" }); 
});

app.use('/users', userRouter);
app.use('/task', taskRouter);


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
