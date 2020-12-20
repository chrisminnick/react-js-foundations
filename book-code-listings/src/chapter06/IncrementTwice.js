import {Component} from 'react';

class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {count:0};
    this.countCopy = 0;
    this.incrementTwice = this.incrementTwice.bind(this);
  }

  incrementTwice(){
    this.setState({count: this.state.count + 1});
    this.countCopy++;
    this.setState({count: this.state.count + 1});
    this.countCopy++;
    console.log("Count should be: " + this.countCopy);
  }

  render(){
    return(
      <button onClick={this.incrementTwice}>{this.state.count}</button>
    )
  }

}
export default CounterClass;