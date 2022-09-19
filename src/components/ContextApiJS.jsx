import React, { useState} from "react";
import HomeContext from "./HomeContext";
import ProfileContext from "./ProfileContext";
import { UserData } from "../context/GlobalContext";
export default function ContextApiJS() {
  const [name, setName] = useState('Andres')

  return (
  <div className="App">
    <div>
      <h1>ContextApiJS</h1>
      <UserData.Provider value={{name, setName}}>
      <HomeContext />
      <ProfileContext/>
      </UserData.Provider>
    </div>
  </div>
  )
}
