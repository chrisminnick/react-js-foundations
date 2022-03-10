import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class BasicFigureProps extends Component {
  render() {
    return (
      <>
        <div className="listing-result">
          <figure>
            <img
              style={{ width: '150px' }}
              src={this.props.filename}
              alt={this.props.caption}
            />
            <figcaption>{this.props.caption}</figcaption>
          </figure>
        </div>

        {this.props.nocode ? '' : <CodeAndText />}
      </>
    );
  }
}

function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`import {Component} from 'react';

class BasicFigureProps extends Component {

  render() {
    return(
      <figure>
        <img style={{width:"150px"}} src={this.props.filename} alt={this.props.caption} />
        <figcaption>{this.props.caption}</figcaption>
      </figure>
    );
  }
}

export default BasicFigureProps;
`}
    </SyntaxHighlighter>
  );
}

export default BasicFigureProps;
