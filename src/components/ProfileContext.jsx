import React from "react";
import { useContext } from "react";
import { UserData } from "../context/GlobalContext";

export default function ProfileContext() {
  
  const {setName} = useContext(UserData)
  
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => setName("Melissa")}>Change the name</button>
    </div>
  );
}
