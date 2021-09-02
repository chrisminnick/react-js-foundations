import {Component} from 'react';

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
      <>
      <div>
        <p>The current count is: {this.state.count}.</p>
        <button onClick = {()=>{this.incrementCount(this.state.count+1)}}>
          Add 1
        </button>
      </div>
      <pre>
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
        <button onClick = {()=>{this.incrementCount(this.state.count+1)}}>
          Add 1
        </button>
      </div>
    );
  }
}

export default ClassComponentState;`}
      </pre>
      </>
    );
  }
}

export default ClassComponentState;