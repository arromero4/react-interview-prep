import React from "react";

export default function InlineConditional() {
    let age = 31;
    let name = "stark";

  return (
  <div>
    {
    age < 30
    ? (<h1>"Yikes you are young!"</h1>)
    : name === "stark" && age === 31
    ? (<h1>"Im old and my name is Stark"</h1>)
    : (<h1>"You are old as I am"</h1>)
    }
    </div>
    )
}
