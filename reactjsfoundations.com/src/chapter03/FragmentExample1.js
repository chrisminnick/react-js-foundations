import { Fragment } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function MyComponent() {
  return (
    <Fragment>
      <h1>The heading</h1>
      <h2>The subheading</h2>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {Fragment} from 'react';

function MyComponent(){
  return(
    <Fragment>
      <h1>The heading</h1>
      <h2>The subheading</h2>
    </Fragment>
  );
}

export default MyComponent;
`}
      </SyntaxHighlighter>
    </Fragment>
  );
}

export default MyComponent;
