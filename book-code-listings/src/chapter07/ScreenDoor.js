import {Component} from 'react';

class ScreenDoor extends Component {
    constructor(props){
      super(props);
      this.state={
        isOpen:true
      }
    }
    render(){
      return(
        <>
        <button onClick={()=>this.setState({isOpen:!this.state.isOpen})}>
            {this.state.isOpen?'Close the Door':'Open the Door'}
        </button>
        <pre>
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
        </pre>
        </>
      )
    }
  }
  
  export default ScreenDoor;
  