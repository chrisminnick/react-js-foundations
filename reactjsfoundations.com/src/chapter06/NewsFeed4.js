import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NewsFeed4(props) {
  const [state] = useState({ date: new Date(), headlines: [] });

  return (
    <>
      <h1>Headlines for {state.date.toLocaleString()}</h1>
      ...
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react'

function NewsFeed4(props) {

const [state] = useState({date:new Date(),headlines:[]});
  
  return(
    <>
      <h1>Headlines for {state.date.toLocaleString()}</h1>
      ...
    </>
  )
}

export default NewsFeed4;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default NewsFeed4;
