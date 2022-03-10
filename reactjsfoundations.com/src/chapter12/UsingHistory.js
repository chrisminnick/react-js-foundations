import React from 'react';
import { useHistory } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NavMenu(props) {
  const history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`import React from "react";
import {
  useHistory
} from "react-router-dom";

function NavMenu(props) {

  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
    
  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default NavMenu;`}</SyntaxHighlighter>
    </>
  );
}

export default NavMenu;
