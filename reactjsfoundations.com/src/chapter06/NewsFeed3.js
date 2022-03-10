import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NewsFeed3(props) {
  const [date, setDate] = useState(new Date());
  const [headlines, setHeadlines] = useState([]);

  return (
    <>
      <h1>Headlines for {date.toLocaleString()}</h1>
      ...
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react'

function NewsFeed3(props) {

const [date,setDate] = useState(new Date());
const [headlines,setHeadlines] = useState([]);
  
  return(
    <>
      <h1>Headlines for {date.toLocaleString()}</h1>
      ...
    </>
  )
}

export default NewsFeed3;`}
      </SyntaxHighlighter>
    </>
  );
}

export default NewsFeed3;
