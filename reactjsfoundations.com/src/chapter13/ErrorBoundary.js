import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true }; //normally, you'd set this initial value to false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops! There's been an error.</h1>
          <SyntaxHighlighter language="javascript" style={github}>
            {`import {Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };  
  }


  render() {

    if (this.state.hasError) {
      return <h1>Oops! There's been an error.</h1>;   
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;`}
          </SyntaxHighlighter>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
