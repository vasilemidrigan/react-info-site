import React from "react";

// JSX elements are objects!
const element = <p>hey there!</p>;

export default function DeclVsImper() {
  console.log("element:", element);
  // Output:
  // {$$typeof: Symbol(react.element), type: 'p', key: null, ref: null, props: {…}, …}
  // $$typeof: Symbol(react.element)
  // key: null
  // props: {children: 'hey there!'}
  // ref: null
  // type: "p"
  // _owner: null
  // _store: {validated: false}
  // _self: undefined
  // _source: {fileName: '/Users/vasilemidrigan/Programming/projects/react-basics/src/components/decl_vs_imper.js', lineNumber: 3, columnNumber: 17}
  // [[Prototype]]: Object
}
