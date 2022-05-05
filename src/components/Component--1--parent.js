import React from "react";
// Import Components
import Component1Child from "./Component--1--child";
// Import Data
import boxes from "../boxes";

export default function Component1Parent() {
  const [squares, setSquares] = React.useState(boxes);

  const renderBoxes = squares.map((el) => {
    return <Component1Child key={el.id} on={el.on} />;
  });

  return <div className="component1Parent">{renderBoxes}</div>;
}
