import React from "react";

import Component1Parent from "./components/Component--1--parent";
import Component2Parent from "./components/Component--2--parent";
import Component3Parent from "./components/Component--3--parent";
// Import Styles
import "./index.css";

export default function App() {
  return (
    <div className="app--wrapper">
      <Component1Parent />
      <hr />
      <Component2Parent />
      <hr />
      <Component3Parent />
      <hr />
    </div>
  );
}
