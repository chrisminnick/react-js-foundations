import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
    };
  }

  render() {
    return (
      <>
        <form>
          <label>
            Enter your email address:
            <input
              value={this.state.emailAddress}
              onChange={(e) => {
                this.setState({ emailAddress: e.target.value });
              }}
              type="text"
            />
          </label>
        </form>
        <p>Your email address: {this.state.emailAddress}</p>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      emailAddress:''
    }
  }

  render(){

    return(  
      <>
      <form>
        <label>Enter your email address:
          <input value={this.state.emailAddress} onChange={(e)=>{this.setState({emailAddress:e.target.value})}} type="text" />
        </label>
      </form>
      <p>Your email address: {this.state.emailAddress}</p>
      </>
    )
  }
}

export default SignUp;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default SignUp;
