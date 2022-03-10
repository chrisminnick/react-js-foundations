import { useState, useEffect } from 'react';
import './style.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Clicker3() {
  const [count, setCount] = useState(
    Number(localStorage.getItem('counter')) || 0
  );

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  return (
    <>
      <div className="container">
        <h1 className="current-count">{count}</h1>
        <button className="increment-button" onClick={incrementCount}>
          +
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useEffect} from 'react';
import './style.css';

function Clicker3(){
    const [count,setCount] = useState(Number(localStorage.getItem('counter')) || 0);

    const incrementCount = ()=>{
        setCount((prev)=>prev+1);
    }
    
    useEffect(()=>{
        localStorage.setItem('counter',count);
    },[count]);

    return(
        <div className="container">
            <h1 className="current-count">{count}</h1>
            <button className="increment-button"
                    onClick={incrementCount}>+</button>
        </div>
    )
}

export default Clicker3;`}
      </SyntaxHighlighter>
    </>
  );
}

export default Clicker3;
