import React from "react";
// Import Components
import Component2Child from "./Component--2--child";
// Import objects data
import boxes from "../boxes";

export default function Component1Parent() {
  const [squares, setSquares] = React.useState(boxes);

  const renderBoxes = squares.map((el) => {
    return <Component2Child key={el.id} on={el.on} />;
  });

  return <div className="component1Parent">{renderBoxes}</div>;
}
