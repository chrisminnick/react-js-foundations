import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class PureComponentExample extends React.PureComponent {
  render() {
    return (
      <>
        <div>foo</div>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';

class PureComponentExample extends React.PureComponent {
    render() {
      return <div>foo</div>;
    }
}

export default PureComponentExample;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default PureComponentExample;
