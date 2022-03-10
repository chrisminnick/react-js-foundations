import { useState } from 'react';
import './style.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Clicker1() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="current-count">{count}</h1>
        <button className="increment-button" onClick={incrementCount}>
          +
        </button>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import './style.css';

function Clicker1(){
    const [count,setCount] = useState(0);

    const incrementCount = ()=>{
        setCount((prev)=>prev+1);
    }
    
    return(
        <div className="container">
            <h1 className="current-count">{count}</h1>
            <button className="increment-button"
                    onClick={incrementCount}>+</button>
        </div>
    )
}

export default Clicker1;`}
      </SyntaxHighlighter>
    </>
  );
}

export default Clicker1;
