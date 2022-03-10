import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class NoLeakCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.incrementCount();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <p>The current count is: {this.state.count}.</p>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';

class NoLeakCounter extends Component{
    constructor(){
        super();
        this.state = {count: 0};
        this.incrementCount = this.incrementCount.bind(this);
    }
    
    incrementCount(){
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
    }
    
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.incrementCount();
        },1000)
    }

    componentWillUnmount(){
      clearInterval(this.interval);
    }
    
    render(){
        return (<p>The current count is: {this.state.count}.</p>);
    }
}
export default NoLeakCounter;`}
        </SyntaxHighlighter>
      </>
    );
  }
}
export default NoLeakCounter;
