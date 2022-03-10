import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Search(props) {
  const [term, setTerm] = useState('');

  const updateTerm = (searchTerm) => {
    setTerm(searchTerm);
  };

  return (
    <>
      <input
        type="text"
        value={term}
        onChange={(e) => {
          updateTerm(e.target.value);
        }}
      />
      <br />
      You're searching for: {term}
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';

function Search(props){
  
    const [term,setTerm] = useState('');

    const updateTerm = (searchTerm)=>{
      setTerm(searchTerm);
    }
    
    return(
      <>
        <input type="text" value={term} onChange={(e)=>{updateTerm(e.target.value)}} /><br />
        You're searching for: {term}
      </>
    );
  }
  
  export default Search;
  `}
      </SyntaxHighlighter>
    </>
  );
}

export default Search;
