import React from "react";
import { createRef } from "react";

export default function UncontrolledControled() {
  let name = React.createRef();
  let age = React.createRef();
  const getInput = (e) => {
    console.log(e.target.value)
  }

  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };

  return (
    <div className="App">
      <div className="container d-grid border p-1 gap-2">
        <h1>Uncontrolled Component</h1>
        <input type="text" placeholder="Name" name="name" ref={name} />
        <input type="number" placeholder="Age" name="age" ref={age} />

      </div>
      <div className="container d-grid border p-1 gap-2">
        <h1>Controlled Component</h1>
        <input type="text" placeholder="Name" name="name" onChange={getInput}/>
        <input type="number" placeholder="Age" name="age" onChange={getInput}/>
        
      </div>
      <button onClick={submit} className="btn btn-primary">Add</button>
    </div>
  );
}
