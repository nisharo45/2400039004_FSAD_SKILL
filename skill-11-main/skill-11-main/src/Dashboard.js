
import React, {useState} from "react";
import LocalUserList from "./LocalUserList";
import UserList from "./UserList";
import FakePostList from "./FakePostList";

function Dashboard(){

 const [page,setPage] = useState("home");

 return(
  <div className="container">

   <div className="nav">
    <button onClick={()=>setPage("local")}>Local Users</button>
    <button onClick={()=>setPage("api")}>Users API</button>
    <button onClick={()=>setPage("posts")}>Fake API Posts</button>
   </div>

   {page==="local" && <LocalUserList/>}
   {page==="api" && <UserList/>}
   {page==="posts" && <FakePostList/>}

  </div>
 );
}

export default Dashboard;
