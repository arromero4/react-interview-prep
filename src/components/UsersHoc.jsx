import React from "react";
import HighOrderComponent from "./HighOrderComponent.jsx";

function UsersHoc({data}) {
  
  return <div>
    <h2>Users</h2>
    <ul>
    {
      data.slice(0,10).map((user) =>{
        return <li key={user.id}>{user.name}</li>
      })
    }
    </ul>
   
  </div>
}

const UsersComp = HighOrderComponent('Users', UsersHoc, "users")
export default UsersComp