import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class CodeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };

    this.codeField = React.createRef();
    this.copyCode = this.copyCode.bind(this);
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ message: '' }), 3000);
  }

  copyCode() {
    this.codeField.current.select();
    document.execCommand('copy');
    this.setState({ message: 'code copied!' });
  }

  render() {
    return (
      <>
        <input value={this.props.yourCode} ref={this.codeField} />{' '}
        {this.state.message}
        <br />
        <button onClick={this.copyCode}>Copy your Code</button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React,{Component} from 'react';

class CodeDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.state={message:''};

    this.codeField = React.createRef();
    this.copyCode = this.copyCode.bind(this);
  }
  
  componentDidUpdate(){
    setTimeout(() => this.setState({message:''}), 3000);
  }
    
  copyCode(){
    this.codeField.current.select();
    document.execCommand('copy');
    this.setState({message:'code copied!'});
  }

  render(){
    return (
      <>
        <input value={this.props.yourCode} 
               ref={this.codeField} /> {this.state.message}<br />
        <button onClick={this.copyCode}>Copy your Code</button>
      </>
    );
  }

}

export default CodeDisplay;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default CodeDisplay;
