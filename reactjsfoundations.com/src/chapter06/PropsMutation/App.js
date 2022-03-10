import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function App() {
  const [theNumber, setTheNumber] = useState(0);
  return (
    <>
      <div className="listing-result">
        <PropsMutator theNumber={theNumber} setTheNumber={setTheNumber} />
      </div>
      <CodeAndText />
    </>
  );
}

function PropsMutator(props) {
  let myNumber = props.theNumber;

  const changeProp = () => {
    myNumber = myNumber + 1;
    console.log('my number is: ' + myNumber);
  };

  return (
    <>
      <h1>My number is: {myNumber}</h1>
      <h1>props.theNumber is: {props.theNumber}</h1>
      <button onClick={changeProp}>change myNumber</button>
      <br />
      <button
        onClick={() => {
          props.setTheNumber(props.theNumber + 1);
        }}
      >
        use setTheNumber
      </button>
    </>
  );
}

function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`import {useState} from 'react';

function App(){
    const [theNumber,setTheNumber] = useState(0);
    return (
        <PropsMutator theNumber = {theNumber} setTheNumber = {setTheNumber} />
    )
}

function PropsMutator(props){
  let myNumber = props.theNumber;

  const changeProp = ()=>{
    myNumber = myNumber + 1;
      console.log("my number is: " + myNumber);
    }

  return (
      <>
        <h1>My number is: {myNumber}</h1>
        <h1>props.theNumber is: {props.theNumber}</h1>
        <button onClick = {changeProp}>change myNumber</button><br />
        <button onClick={()=>{props.setTheNumber(props.theNumber + 1)}}>
          use setTheNumber
        </button>
      </>
    )
}

export default App;
`}
    </SyntaxHighlighter>
  );
}
export default App;
