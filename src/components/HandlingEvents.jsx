import React from "react";
import { useState } from "react";
export default function HandlingEvents() {
const [something, useSomething] = useState('')

  const handleChange = (e) => {
    useSomething(e.target.value)
  }

  const handleSomethig = () => {
    alert(something)
    useSomething('')
  }
   
  return (
    <div>
      <h1>HandlingEvents</h1>
      <input 
      type="text" 
      placeholder="Add something..."
      onChange={handleChange}
      value={something}
      />
      <button onClick={handleSomethig}>Show</button>


      </div>
  );
}
