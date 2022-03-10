import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class TextReaderCallback extends Component {
  constructor(props) {
    super(props);
    this.textView = null;

    this.focusTextView = () => {
      if (this.textView) this.textView.focus();
    };
  }

  componentDidMount() {
    this.focusTextView();
  }

  render() {
    return (
      <>
        <textarea
          style={{ width: '380px', height: '400px' }}
          ref={(e) => (this.textView = e)}
          value={this.props.bookText}
        />
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class TextReaderCallback extends Component {
  
  constructor(props) {
    super(props);
    this.textView = null;

    this.focusTextView = () => {
      if (this.textView) this.textView.focus();
    };
  }
    
  componentDidMount(){
    this.focusTextView();
  }

  render(){
    return (
        <textarea style={{width:'380px',height:'400px'}} ref={(e)=>this.textView = e} value={this.props.bookText} />
    );
  }

}

export default TextReaderCallback;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default TextReaderCallback;
