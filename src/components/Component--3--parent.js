import React from "react";
// Import Components
import Component3Child from "./Component--3--child";
// Import objects data
import boxes from "../boxes";

export default function Component1Parent() {
  const [squares, setSquares] = React.useState(boxes);

  // • Here's the function in the parent component that toggles the
  //     props.on
  // • In case we want to monitor which component was clicked for ex.,
  //     we can do next:
  //   1. Pass id={el.id} for our child components (in order to
  //              have access to our component id)
  //      (Line 27)
  //   2. In our child component we're running our toggle
  //              function with props.id argument, and it should be
  //              inside another anonymous function
  //      (Line 10 - file Component--3--child.js)
  function toggle(id) {
    console.log(`BOX ID - ${id}`);
  }

  const renderBoxes = squares.map((el) => {
    return (
      <Component3Child handleClick={toggle} id={el.id} key={el.id} on={el.on} />
    );
  });

  return <div className="component1Parent">{renderBoxes}</div>;
}
