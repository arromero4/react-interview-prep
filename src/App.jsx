import "./App.css";
import React, { useState } from "react";
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
import InnerHTMLReact from "./components/InnerHTMLReact";
import ReactFragments from "./components/ReactFragments";
import RestApiRequest from "./components/RestApiRequest";
import DebouncingJS from "./components/DebouncingJS";
import ContextApiJS from "./components/ContextApiJS";
import ClassNamesJS from "./components/ClassNamesJS";
import UsersHoc from "./components/UsersHoc";
import PostHoc from "./components/PostHoc";
import LazyLoading from "./components/LazyLoading";

function App() {
  const [name, setName] = useState('Stark')

  const ChangeName = () =>{
    setName('Andres')
  }

  const Lorem = React.lazy(() => import ('./components/LazyLoading'))


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
      <hr />
      <InnerHTMLReact/>
      <hr />
      <ReactFragments/>
      <hr />
      <RestApiRequest/>
      <hr />
      <DebouncingJS/>
      <hr />
      <ContextApiJS/>
      <hr />
      <ClassNamesJS/>
      <hr />
      <UsersHoc/>
      <hr />
      <PostHoc/>
      <hr />
      <LazyLoading/>
    </>
  );
}

export default App;
