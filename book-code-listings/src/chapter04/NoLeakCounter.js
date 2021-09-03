import {Component} from 'react';

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
        return (
        <>
        <p>The current count is: {this.state.count}.</p>
        <pre>
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
        </pre>
        </>);
    }
}
export default NoLeakCounter;