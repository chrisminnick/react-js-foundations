import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ShallowCompare extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <>
        <div>foo</div>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class ShallowCompare extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return <div>foo</div>;
  }
}

export default ShallowCompare;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default ShallowCompare;
