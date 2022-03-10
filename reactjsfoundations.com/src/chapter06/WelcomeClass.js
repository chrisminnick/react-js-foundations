import PropTypes from 'prop-types';
import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class WelcomeClass extends Component {
  static propTypes = {
    firstName: PropTypes.string,
  };

  render() {
    return (
      <>
        <h1>Welcome, {this.props.firstName}!</h1>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import PropTypes from 'prop-types';
import {Component} from 'react';

class WelcomeClass extends Component {

  static propTypes = {
    firstName: PropTypes.string
  }

  render(){
    return(<h1>Welcome, {this.props.firstName}!</h1>);
  }
}

export default WelcomeClass;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default WelcomeClass;
