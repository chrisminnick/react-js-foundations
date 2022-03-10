import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class CounterClass2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 0 };
    this.incrementCount1 = this.incrementCount1.bind(this);
    this.incrementCount2 = this.incrementCount2.bind(this);
  }

  incrementCount1() {
    this.setState({ count1: this.state.count1 + 1 });
  }
  incrementCount2() {
    this.setState({ count2: this.state.count2 + 1 });
  }

  render() {
    return (
      <>
        <button onClick={this.incrementCount1}>
          Count 1: {this.state.count1}
        </button>
        <button onClick={this.incrementCount2}>
          Count 2: {this.state.count2}
        </button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class CounterClass2 extends Component {
  constructor(props){
    super(props);
    this.state = {count1:0,count2:0};
    this.incrementCount1 = this.incrementCount1.bind(this);
    this.incrementCount2 = this.incrementCount2.bind(this);

  }

  incrementCount1(){
    this.setState({count1: this.state.count1 + 1});
  }
  incrementCount2(){
    this.setState({count2: this.state.count2 + 1});
  }

  render(){
    return(
    <>
        <button onClick={this.incrementCount1}>Count 1: {this.state.count1}</button>
        <button onClick={this.incrementCount2}>Count 2: {this.state.count2}</button>
    </>
    )
  }

}
export default CounterClass2;`}
        </SyntaxHighlighter>
      </>
    );
  }
}
export default CounterClass2;
