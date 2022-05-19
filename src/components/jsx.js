import React from "react";

// JSX elements are objects!

const jsxElement = (
  <div className="parent">
    <h1>Lorem, ipsum.</h1>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
);

export default function JSX() {
  return <div className="wrapper">{jsxElement}</div>;
}
