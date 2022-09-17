import React from "react";

export default function KeysReact() {
  const numbers = [1, 2, 3, 4, 5];
  const details = [
    {
      id: 1,
      name: "Mena",
      age: 28,
    },
    {
      id: 2,
      name: "Andres",
      age: 31,
    },
    {
      id: 3,
      name: "Salvador",
      age: 32,
    },
    {
      id: 4,
      name: "Marlen",
      age: 36,
    },
  ];

  return (
    <div>
      <div>
        <ul>
          {numbers.map((number) => {
            return <li key={number}>{number}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
          {details.map((detail) => (
            <li key={detail.id}>{detail.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
