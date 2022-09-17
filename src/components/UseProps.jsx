import React from "react";

export default function UseProps({name, ChangeName}) {
  return (
    <div>
      <h1>Name: { name}</h1>
      <button onClick={ChangeName} className="btn btn-primary">Change Name</button>
    </div>
  );
}
