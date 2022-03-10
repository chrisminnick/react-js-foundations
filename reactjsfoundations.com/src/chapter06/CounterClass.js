import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <button onClick={this.increment}>{this.state.count}</button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {count:0};
    this.increment = this.increment.bind(this);
  }
  increment(){
    this.setState({count: this.state.count + 1});
  }
  render(){
    return(
      <button onClick={this.increment}>{this.state.count}</button>
    )
  }
}
export default CounterClass;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}
export default CounterClass;
