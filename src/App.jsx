import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MapAndFilter from "./components/MapAndFilter";
import UseStatesJS from "./components/UseStatesJS";
import StateWithClass from "./components/StateWithClass";
import UseProps from "./components/UseProps";
import InlineConditional from "./components/InlineConditional";
import HandlingEvents from "./components/HandlingEvents";
import KeysReact from "./components/KeysReact";
import FormsReact from "./components/FormsReact";
import DynamicInputs from "./components/DynamicInputs";
import CSSStylesReactJS from "./components/CSSStylesReactJS";
import UncontrolledControled from "./components/UncontrolledControled";

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
      <hr />
      <KeysReact/>
      <hr />
      <FormsReact/>
      <hr />
      <DynamicInputs/>
      <hr />
      <CSSStylesReactJS/>
      <hr />
      <UncontrolledControled/>
    </>
  );
}

export default App;
