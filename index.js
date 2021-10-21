require("dotenv").config();

const express = require("express");
const { connection } = require("./connection");
const { User } = require("./models/users")
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());
app.use("/user", userRouter)

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.authenticate();
    User.sync({alter: true})
    console.log("Connected to Database");
});


