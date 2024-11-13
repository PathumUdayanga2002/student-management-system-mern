// import framwork (express, mongoose, cors, dotenv) and assign to variable them create express app
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config(); //read the .env

// define a port for server 5000 port is used by default local host my computer port number, but this app is host in another server user can use any port number(process.env.PORT)
const PORT = process.env.PORT || 5000;

// use cors
app.use(cors());
//use  body parser
app.use(bodyParser.json());

//load router js file in specific route when we enter /student load the student.js file will be exicute
const studentRouter = require("./routes/student.js");
app.use("/student", studentRouter);

const URL = process.env.MONGODB_URL;

// connect mongo db this option

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
// create connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// app load the port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
