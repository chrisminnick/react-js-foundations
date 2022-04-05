import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ClassComponentState extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <div>
          <p>The current count is: {this.state.count}.</p>
          <button
            onClick={() => {
              this.incrementCount();
            }}
          >
            Add 1
          </button>
        </div>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class ClassComponentState extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount(){
    this.setState({count: this.state.count + 1});
  }
  render(){
    return (
      <div>
        <p>The current count is: {this.state.count}.</p>
        <button onClick = {()=>{this.incrementCount()}}>
          Add 1
        </button>
      </div>
    );
  }
}

export default ClassComponentState;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default ClassComponentState;
