import React from 'react';
import { withRouter } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NavMenu(props) {
  function handleClick() {
    props.history.push('/home');
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
  withRouter
} from "react-router-dom";

function NavMenu(props) {
    function handleClick() {
        props.history.push("/home");
      }
    
      return (
          <button type="button" onClick={handleClick}>
            Go home
          </button>
      );
}

export default withRouter(NavMenu);`}</SyntaxHighlighter>
    </>
  );
}

export default withRouter(NavMenu);
