import React, { useState } from "react";

export default function FormsReact() {
  const  [objData, setObjData] = useState({})

  const getInputs = (value, name) => {
    const data = {[name]: value}
    setObjData({...objData, ...data})
  };

  const submit = (e) => {
    e.preventDefault()
    console.log(objData)
    setObjData({})
  }

  return (
    <div className="form-group">
      <h1>Forms</h1>
      <form onSubmit={submit}>
        <div className="form-group">
        <input
          placeholder="Write name"
          type="text"
          name="name"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        </div>
        <div className="form-group">
        <input
          placeholder="Write age"
          type="number"
          name="age"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        </div>
        <div className="form-group">

        <input
          placeholder="Write hobbie"
          type="text"
          name="hobbie"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        </div>
        <div className="form-group">

        <input
          placeholder="Write a Date"
          type="date"
          name="date"
          onChange={(e) => getInputs(e.target.value, e.target.name)}
        />
        </div>
        <div className="form-group">
        
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
