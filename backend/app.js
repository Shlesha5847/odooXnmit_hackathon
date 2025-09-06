const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require("path");
const config = require('config');
require("dotenv").config();
const mongoose = require("./config/mongoose-connect");


const cors = require('cors'); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const userRoute = require("./routes/userRouter");
const projectRoute = require("./routes/projectRouter");
const taskRoute = require("./routes/taskRouter");

const isLogged = require("./middlewares/isLoggedin");

app.get("/",(req,res)=>{
    console.log("Heyyy");
});

app.use("/",userRoute);
app.use("/project", isLogged , projectRoute);
app.use("/task", isLogged, taskRoute);

app.listen(5000, () => {
    console.log("server running on port 5000");
});