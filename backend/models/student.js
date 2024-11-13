//create module for add student data
//this module connect to the mogodb, then we import mongoose
const mongoose = require("mongoose");

//imprt student schema
const schema = mongoose.Schema;

// we add the student data into the schema module
//we create schema as a object student details
const studentSchema = new schema({
  name: {
    type: String,
    required: true, //name is necessary fireld
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
// routes walin ena data model haraha thama yanne ee data yawanna ona dable structure ek thamin dn hadanna yanne

//export model neccessary part
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
