import { useState } from "react";
import LeakyCounter from "./LeakyCounter";

function CounterController() {
  const [displayCounter, setDisplayCounter] = useState(true);

  function toggleCounter() {
    setDisplayCounter(!displayCounter);
  }

  return (
    <>
      <div>
        {displayCounter ? <LeakyCounter /> : null}
        <button onClick={toggleCounter}>Toggle Count</button>
      </div>
      
    </>
  );
}
export default CounterController;
