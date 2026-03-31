
import React, { useState } from "react";

function StudentManager() {

  const [students, setStudents] = useState([
    { id: 1, name: "Ganesh", course: "AIML" },
    { id: 2, name: "Rahul", course: "CSE" },
    { id: 3, name: "Haritha", course: "ECE" },
    { id: 4, name: "Vamsi", course: "IT" },
    { id: 5, name: "Monvitha", course: "AIML" }
  ]);

  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    course: ""
  });

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  const addStudent = () => {
    if (!newStudent.id || !newStudent.name || !newStudent.course) return;

    setStudents([...students, newStudent]);

    setNewStudent({
      id: "",
      name: "",
      course: ""
    });
  };

  const deleteStudent = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  return (
    <div className="container">

      <h2>Add Student</h2>

      <input
        type="text"
        name="id"
        placeholder="ID"
        value={newStudent.id}
        onChange={handleChange}
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newStudent.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={newStudent.course}
        onChange={handleChange}
      />

      <button className="add" onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <button className="delete" onClick={() => deleteStudent(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default StudentManager;
