import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class BasicFigure extends Component {
  render() {
    return (
      <>
        <div className="listing-result">
          <figure>
            <img src="images/cat.png" alt="a cat" />
            <figcaption>This is a picture of a cat.</figcaption>
          </figure>
        </div>
        <CodeAndText />
      </>
    );
  }
}

function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`import {Component} from 'react';

class BasicFigure extends Component {

  render() {
    return(
      <figure>
        <img src="images/cat.png" alt="a cat" />
        <figcaption>This is a picture of a cat.</figcaption>
      </figure>
    );
  }
}

export default BasicFigure;
`}
    </SyntaxHighlighter>
  );
}

export default BasicFigure;
