import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand style={{ color: "red" }} href="#home">
            STUDENT MANAGEMENT SYSTEM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Link className=" nav-link" to={"/"}>
                Home
              </Link>{" "}
              {/* Link tag using navigate component without reloading broweser*/}
              <Link className=" nav-link" to={"/add"}>
                Create Student
              </Link>{" "}
              <Link className=" nav-link" to={"/delete"}>
                Delete Student
              </Link>{" "}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
