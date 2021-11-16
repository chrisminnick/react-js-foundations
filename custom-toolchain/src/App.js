import React from "react";

const App = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const { x, y } = position;

  return (
    <div
      role="mouseArea"
      style={{ width: "500px", height: "500px" }}
      onMouseMove={onMouseMove}
    >
      <h1 role="report">
        x: {x} y: {y}
      </h1>
    </div>
  );
};

export default App;
