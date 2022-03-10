import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ReactMemoExample(props) {
  return (
    <>
      <p>
        Hi, {props.firstName}. This component returns the same thing when given
        the same props.
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';

function ReactMemoExample(props){
  return (<p>Hi, {props.firstName}. This component returns the same thing when given the same props.</p>);
}

export default React.memo(ReactMemoExample);
`}
      </SyntaxHighlighter>
    </>
  );
}

export default React.memo(ReactMemoExample);
