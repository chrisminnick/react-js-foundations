import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function RenderCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  return (
    <>
      This component will count how many times it renders.
      <button onClick={() => setCount((prev) => prev + 1)}>Update State</button>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState} from 'react';

function RenderCounter(){

  const [count,setCount] = useState(0);
  
  useEffect(()=>{console.log(count)});

  return(
    <>
      This component will count how many times it renders.
      <button onClick={()=>setCount((prev)=>prev+1)}>Update State</button>
    </>
  );
}

export default RenderCounter;`}
      </SyntaxHighlighter>
    </>
  );
}

export default RenderCounter;
