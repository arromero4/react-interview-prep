import React, { useState } from "react";

export default function DynamicInputs() {

  const [inputs, setInputs ] = useState({})

  const getInputValues = (data) =>{
    let { name, value } = data.target
    let input = {[name]: value}
    setInputs({...inputs, ...input})
  }
  const showInput = () =>{
    console.log(inputs)
  }

  return (
    <div className="App">
      <div className="container d-grid border p-1 gap-2">
        <input type="text" placeholder="Name" name="name" onChange={getInputValues}/>
        <input type="number" placeholder="Age" name="age" onChange={getInputValues}/>
        <input type="number" placeholder="Years of experience" name="yoe" onChange={getInputValues}/>
        <button className="btn btn-primary" onClick={showInput}>Add</button>
      </div>
    </div>
  );
}
