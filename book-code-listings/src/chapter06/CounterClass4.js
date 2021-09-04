import {Component} from 'react';

class CounterClass4 extends Component {
  constructor(props){
    super(props);
    this.state = {count:0};
    this.testCount = 0;
    this.incrementTwice = this.incrementTwice.bind(this);
  }

  incrementTwice(){
    this.setState((current)=>{return {count: current.count + 1};});
    this.testCount++;
    this.setState((current)=>{return {count: current.count + 1};});
    this.testCount++;
    console.log("Count should be: " + this.testCount);
  }

  render(){
    return(
      <>
      <button onClick={this.incrementTwice}>{this.state.count}</button>
      <pre>
{`import {Component} from 'react';

class CounterClass4 extends Component {
  constructor(props){
    super(props);
    this.state = {count:0};
    this.testCount = 0;
    this.incrementTwice = this.incrementTwice.bind(this);
  }

  incrementTwice(){
    this.setState((current)=>{return {count: current.count + 1};});
    this.testCount++;
    this.setState((current)=>{return {count: current.count + 1};});
    this.testCount++;
    console.log("Count should be: " + this.testCount);
  }

  render(){
    return(
      <button onClick={this.incrementTwice}>{this.state.count}</button>
    )
  }

}
export default CounterClass4;`}
      </pre>
      </>
    )
  }

}
export default CounterClass4;