import React,{Component} from 'react';

class TextReader extends Component {
  
  constructor(props) {
    super(props);
    this.textView = React.createRef();
  }
    
  componentDidMount(){
    this.textView.current.focus();
  }

  render(){
    return (
      <>
        <textarea style={{width:'380px',height:'400px'}} ref={this.textView} value={this.props.bookText} />
      <pre>
        {`import React,{Component} from 'react';

class TextReader extends Component {
  
  constructor(props) {
    super(props);
    this.textView = React.createRef();
  }
    
  componentDidMount(){
    this.textView.current.focus();
  }

  render(){
    return (
        <textarea style={{width:'380px',height:'400px'}} ref={this.textView} value={this.props.bookText} />
      );
  }

}

export default TextReader;`}
      </pre>
      </>
      );
  }

}

export default TextReader;