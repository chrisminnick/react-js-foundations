import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ButtonContainer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyButton count={count} setCount={setCount} />
      <br />
      count value: {count}
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';

function ButtonContainer(){

  const [count,setCount] = useState(0);

  return (
    <>
      <MyButton count = {count} setCount = {setCount} /><br />
      count value: {count}
    </>
  );
}

function MyButton(props){
  return (
    <button onClick = {()=>props.setCount(props.count+1)}>
      Add 1 to the Count
    </button>
  );
}

export {ButtonContainer,MyButton};
`}
      </SyntaxHighlighter>
    </>
  );
}

function MyButton(props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>
      Add 1 to the Count
    </button>
  );
}

export default ButtonContainer;
