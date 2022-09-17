import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MapAndFilter from "./components/MapAndFilter";
import UseStatesJS from "./components/UseStatesJS";
import StateWithClass from "./components/StateWithClass";
import UseProps from "./components/UseProps";
import InlineConditional from "./components/InlineConditional";
import HandlingEvents from "./components/HandlingEvents";

function App() {
  const [name, setName] = useState('Stark')

  const ChangeName = () =>{
    setName('Andres')
  }


  return (
    <>
      <MapAndFilter />
      <hr />
      <UseStatesJS />
      <hr />
      <StateWithClass/>
      <hr />

      <UseProps name={name} ChangeName={ChangeName}/>
      <hr />
      <InlineConditional/>
      <hr />
      <HandlingEvents/>
      
    </>
  );
}

export default App;
