import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SometimesBad() {
  const [message, setMessage] = useState();

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) {
      setMessage({ error: 'there has been an error' });
    } else {
      setMessage('great');
    }
  };
  return (
    <>
      <div>
        <button onClick={handleClick}>Mystery Button</button>
        {message}
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import ErrorBoundary from './ErrorBoundary';
import {useState} from 'react';

function SometimesBad(){
  const [message,setMessage] = useState();
  
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1){
      setMessage({error:"there has been an error"});
    } else {
      setMessage("great");
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Mystery Button</button>
      {message}
    </div>
  );
}

export default SometimesBad;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default SometimesBad;
