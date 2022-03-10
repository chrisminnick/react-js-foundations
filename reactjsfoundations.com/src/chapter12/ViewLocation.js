import React from 'react';
import { withRouter } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ViewLocation(props) {
  return (
    <>
      <h1>Current Location</h1>
      <ul>
        <li>pathname: {props.location.pathname}</li>
        <li>hash: {props.location.hash}</li>
        <li>search: {props.location.search}</li>
        <li>key: {props.location.key}</li>
      </ul>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewLocation(props) {

    return (
          <>
            <h1>Current Location</h1>
            <ul>
                <li>pathname: {props.location.pathname}</li>
                <li>hash: {props.location.hash}</li>
                <li>search: {props.location.search}</li>
                <li>key: {props.location.key}</li>
            
            </ul>
          </>
          
      );
}

export default withRouter(ViewLocation);`}
      </SyntaxHighlighter>
    </>
  );
}

export default withRouter(ViewLocation);
