import { useState } from 'react';
import LeakyCounter from './LeakyCounter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import LeakyCounter from './LeakyCounter';

function CounterController() {
  const [displayCounter,setDisplayCounter] = useState(true);

  function toggleCounter(){
      setDisplayCounter(!displayCounter);
  };

  return (
    <div>
      {displayCounter ? <LeakyCounter /> : null}
      <button onClick={toggleCounter}>Toggle Count</button>
    </div>
  );
}
export default CounterController;
`}
      </SyntaxHighlighter>
    </>
  );
}
export default CounterController;
