import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function CountUp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Add One</button>
        {count}
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';

function CountUp(){
  const [count,setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Add One</button>
      {count}
    </div>
  );
}

export default CountUp;`}
      </SyntaxHighlighter>
    </>
  );
}

export default CountUp;
