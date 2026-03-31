
import React,{useEffect,useState} from "react";
import axios from "axios";

function StudentList(){

 const [students,setStudents]=useState([]);
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [course,setCourse]=useState("");

 const loadStudents=()=>{
  axios.get("http://localhost:8086/students")
  .then(res=>setStudents(res.data));
 }

 useEffect(()=>{
  loadStudents();
 },[]);

 const addStudent=()=>{
  axios.post("http://localhost:8086/students",{name,email,course})
  .then(()=>{
   setName("");
   setEmail("");
   setCourse("");
   loadStudents();
  });
 }

 const deleteStudent=(id)=>{
  axios.delete("http://localhost:8086/students/"+id)
  .then(()=>loadStudents());
 }

 return(
  <div>

  <h3>Add Student</h3>

  <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
  <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
  <input placeholder="Course" value={course} onChange={e=>setCourse(e.target.value)} />
  <button onClick={addStudent}>Add</button>

  <h3>Student List</h3>

  <table border="1">
  <thead>
  <tr>
  <th>ID</th>
  <th>Name</th>
  <th>Email</th>
  <th>Course</th>
  <th>Action</th>
  </tr>
  </thead>

  <tbody>
  {students.map(s=>(
   <tr key={s.id}>
    <td>{s.id}</td>
    <td>{s.name}</td>
    <td>{s.email}</td>
    <td>{s.course}</td>
    <td>
     <button onClick={()=>deleteStudent(s.id)}>Delete</button>
    </td>
   </tr>
  ))}
  </tbody>

  </table>

  </div>
 );
}

export default StudentList;
