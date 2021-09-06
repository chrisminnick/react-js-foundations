import {Component} from 'react';

class CoffeeMachine extends Component {
    constructor(props){
      super(props);
      this.state={
        brewing:false
      }
      this.toggleBrewing = this.toggleBrewing.bind(this);
    }
    
    toggleBrewing = function(){
      this.setState({brewing:!this.state.brewing});
    }
  
    render(){
  
      return(
        <>
        The Coffee Maker is {this.state.brewing?'on':'off'}.<br />
        <button onClick={this.toggleBrewing}>toggle brewing state</button>
        <pre>
          {`import {Component} from 'react';

class CoffeeMachine extends Component {
    constructor(props){
      super(props);
      this.state={
        brewing:false
      }
      this.toggleBrewing = this.toggleBrewing.bind(this);
    }
    
    toggleBrewing = function(){
      this.setState({brewing:!this.state.brewing});
    }
  
    render(){
  
      return(
        <>
        The Coffee Maker is {this.state.brewing?'on':'off'}.<br />
        <button onClick={this.toggleBrewing}>toggle brewing state</button>
        </>
      );
    }
}

export default CoffeeMachine;
  `}
        </pre>
        </>
      );
    }
}

export default CoffeeMachine;
  