import axios from "axios";
import React, { useEffect, useState } from "react";

const Allstudent = () => {
  //  create state for the store data (backend respons data)
  const [allStudent, setAllStudent] = useState([]);

  //   get data from backend use the useEffect hook, get data as a array
  useEffect(() => {
    const getAllStudent = () => {
      axios
        .get("${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/student/")
        .then((res) => {
          setAllStudent(res.data);
          //   console.log(res.data);
        })
        .catch((err) => {
          console.log(err.massage);
        });
    };
    getAllStudent();
  }, []);

  return (
    <div className=" container mt-5">
      <div>
        {/* display data in table in frontend */}
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
            {allStudent.map((student) => (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allstudent;
