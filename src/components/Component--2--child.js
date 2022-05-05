import React from "react";

export default function Component1Child(props) {
  // Derived State
  // It isn't recomended to use derived state(the line below)
  const [handleOn, setHandleOn] = React.useState(props.on);
  // instead there's a best practice to pass the toggle function
  // to our parent component and change props from there
  // (see Component--3--parent.js and Component--3--child.js )
  const bgColor = {
    backgroundColor: handleOn ? "#36AE7C" : "#EB5353",
  };

  function handleClick() {
    setHandleOn((prevHandleOn) => !prevHandleOn);
  }

  return (
    <div
      className="component1Child"
      onClick={handleClick}
      style={bgColor}
    ></div>
  );
}
