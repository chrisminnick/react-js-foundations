import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function TimerRestartFun(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let time = 0;
    const interval = setInterval(() => {
      console.log(time++);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <p>
        Check the console to see the timer.
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState} from 'react';

function TimerRestartFun(props){

    const [count,setCount] = useState(0);

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
          console.log(time++);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (<p>Check the console to see the timer.
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
      </p>
      );
}

export default TimerRestartFun;`}
      </SyntaxHighlighter>
    </>
  );
}

export default TimerRestartFun;
