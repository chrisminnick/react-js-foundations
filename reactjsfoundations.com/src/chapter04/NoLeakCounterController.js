import { useState } from 'react';
import NoLeakCounter from './NoLeakCounter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NoLeakCounterController() {
  const [displayCounter, setDisplayCounter] = useState(true);

  function toggleCounter() {
    setDisplayCounter(!displayCounter);
  }

  return (
    <>
      <div>
        {displayCounter ? <NoLeakCounter /> : null}
        <button onClick={toggleCounter}>Toggle Count</button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import NoLeakCounter from './NoLeakCounter';

function NoLeakCounterController() {
  const [displayCounter,setDisplayCounter] = useState(true);

  function toggleCounter(){
      setDisplayCounter(!displayCounter);
  };

  return (
    <div className="App">
      {displayCounter ? <NoLeakCounter /> : null}
      <button onClick={toggleCounter}>Toggle Count</button>
    </div>
  );
}
export default NoLeakCounterController;
`}
      </SyntaxHighlighter>
    </>
  );
}
export default NoLeakCounterController;
