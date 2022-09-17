import React from "react";
import { useState } from "react";
export default function HandlingEvents() {
  const [something, useSomething] = useState('')

  const handleChange = (e) => {
    useSomething(e.target.value)
  }

  const handleSubmit = () => {
    alert(something)
    useSomething('')
  }
   
  return (
    <div>
      <h1>HandlingEvents</h1>
      <input 
      placeholder="Write something"
      name="something"
      onChange={handleChange}
      value={something}
      />
      <button className="btn btn-info" onClick={handleSubmit}>Show</button>

      </div>
  );
}
