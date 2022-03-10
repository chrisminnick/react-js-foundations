import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>The current count is: {count}.</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add 1
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>The current count is: {count}.</p>
      <button onClick = {()=>{setCount(count+1)}}>
        Add 1
      </button>
    </div>
  );
}

export default Counter;`}
      </SyntaxHighlighter>
    </>
  );
}

export default Counter;
