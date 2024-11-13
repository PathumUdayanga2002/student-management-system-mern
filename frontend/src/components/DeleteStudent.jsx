import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const DeleteStudent = () => {
  const [Id, setId] = useState("");
  const [getId, setGetId] = useState("");
  const [oneStudent, setOneStudent] = useState(null);

  const getStudent = (e) => {
    e.preventDefault();
    axios
      .get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/student/get/${getId}`
      )
      .then((res) => {
        setOneStudent(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteStudent = (e) => {
    e.preventDefault();
    axios
      .delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/student/delete/${Id}`
      )
      .then(() => {
        alert(`${Id} delete successful`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <h1>Delete Student</h1>
      <Form onSubmit={deleteStudent}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="name">Student ID</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Id"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Delete
        </Button>
      </Form>
      <h1>Get one Student</h1>
      <Form onSubmit={getStudent}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="name">Student ID</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Id"
            onChange={(e) => {
              setGetId(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get student
        </Button>
        {oneStudent && (
          <div className="container mt-5">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={oneStudent._id}>
                    <td>{oneStudent._id}</td>
                    <td>{oneStudent.name}</td>
                    <td>{oneStudent.age}</td>
                    <td>{oneStudent.gender}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Form>
    </div>
  );
};

export default DeleteStudent;
