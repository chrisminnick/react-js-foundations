import { useState, useEffect } from "react";
import "./style.css";

function Clicker2() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 className="current-count">{count}</h1>
        <button className="increment-button" onClick={incrementCount}>
          +
        </button>
      </div>
      
    </>
  );
}

export default Clicker2;
