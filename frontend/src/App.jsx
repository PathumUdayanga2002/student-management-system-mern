import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddStudents from "./components/AddStudents";
import Allstudent from "./components/Allstudent";
import DeleteStudent from "./components/DeleteStudent";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Allstudent /> */}

      <div>
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}

          <Route path="/delete" exact element={<DeleteStudent />} />
          <Route path="/add" exact element={<AddStudents />} />
          <Route path="/" exact element={<Allstudent />} />
          {/* //best practice in home page last emplement */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
