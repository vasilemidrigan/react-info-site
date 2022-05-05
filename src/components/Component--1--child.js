export default function Component1Child(props) {
  const bgColor = {
    backgroundColor: props.on ? "#36AE7C" : "#EB5353",
  };

  return <div className="component1Child" style={bgColor}></div>;
}
