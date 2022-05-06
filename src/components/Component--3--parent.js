import React from "react";
// Import Components
import Component3Child from "./Component--3--child";
// Import objects data
import boxes from "../boxes";

export default function Component1Parent() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    /**
     * Challenge: use setSquares to update the
     * correct square in the array.
     *
     * Make sure not to directly modify state!
     */
    console.log(`BOX ID - ${id}`);

    // 1. Declaring a new array
    // 2. Loop through prevSquares, if the id of the current object is
    //    the same as the id of the object in the iteration then update
    //    it (replace object.on property to opposite)
    //    else push the square without modifications
    // 3. Return the update array

    setSquares((prevSquares) => {
      const newArr = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentObj = prevSquares[i];
        if (currentObj.id === id) {
          const updatedObj = {
            ...currentObj,
            on: !currentObj.on,
          };
          newArr.push(updatedObj);
        } else {
          newArr.push(currentObj);
        }
      }
      return newArr;
    });
  }

  const renderBoxes = squares.map((el) => {
    return (
      <Component3Child handleClick={toggle} id={el.id} key={el.id} on={el.on} />
    );
  });

  return <div className="component1Parent">{renderBoxes}</div>;
}
