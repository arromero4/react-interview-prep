import React from "react";
import { useContext } from "react";
import { UserData } from "../context/GlobalContext";
export default function HomeContext() {
  let {name} = useContext(UserData)
  return (
    <div>
      <h1>HomeContext</h1>
      <h2>The name is: {name}</h2>
    </div>
  );
}
