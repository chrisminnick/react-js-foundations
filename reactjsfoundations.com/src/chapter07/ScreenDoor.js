import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ScreenDoor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          {this.state.isOpen ? 'Close the Door' : 'Open the Door'}
        </button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class ScreenDoor extends Component {
    constructor(props){
      super(props);
      this.state={
        isOpen:true
      }
    }
    render(){
      return(
        <button onClick={()=>this.setState({isOpen:!this.state.isOpen})}>
            {this.state.isOpen?'Close the Door':'Open the Door'}
        </button>
      )
    }
  }
  
  export default ScreenDoor;
  `}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default ScreenDoor;
