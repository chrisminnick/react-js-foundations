import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function TimerFun(props) {
  useEffect(() => {
    let time = 0;
    const interval = setInterval(() => {
      console.log(time++);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <p>Check the console to see the timer.</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect} from 'react';

function TimerFun(props){

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
          console.log(time++);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (<p>Check the console to see the timer.</p>);
}

export default TimerFun;`}
      </SyntaxHighlighter>
    </>
  );
}

export default TimerFun;
