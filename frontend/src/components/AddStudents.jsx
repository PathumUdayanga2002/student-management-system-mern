import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const AddStudents = () => {
  // we must create state for the input fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  // now we create function on submit button

  const submitData = (e) => {
    e.preventDefault();

    //crate the object new student
    const newStudent = {
      name,
      age,
      gender,
    };

    // console.log(newStudent);
    // "${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/student/add"
    //`${import.meta.env.VITE_BACKEND_URL}/student/add`
    // send data to backend using axios http request
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/student/add`,
        newStudent
      )
      .then(() => {
        alert("new stuent added successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className=" container mt-5">
      {" "}
      {/* /* onsubmit event is update in every click on submit button*/}
      <Form onSubmit={submitData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="name">Student Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)} // onchange event is update in every change in input fields
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="age">Student Age</Form.Label>
          <Form.Control
            type="text"
            id="age"
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="gender">Student Gender</Form.Label>
          <Form.Control
            type="text"
            id="gender"
            placeholder="Enter gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddStudents;
