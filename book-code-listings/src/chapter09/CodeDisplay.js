import React,{Component} from 'react';

class CodeDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.codeField = React.createRef();
    this.copyCode = this.copyCode.bind(this);
  }
    
  copyCode(){
    this.codeField.current.select();
    document.execCommand('copy');
    alert("code copied");
  }

  render(){
    return (
        <>
        <input value={this.props.yourCode} 
               ref={this.codeField} /><br />
        <button onClick={this.copyCode}>Copy your Code</button>
        </>
      );
  }

}

export default CodeDisplay;