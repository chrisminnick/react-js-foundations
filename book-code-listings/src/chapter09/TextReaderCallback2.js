import {Component} from 'react';

class TextReaderCallback extends Component {
  
  constructor(props) {
    super(props);
    this.textView = null;

    this.focusTextView = () => {
      if (this.textView) this.textView.focus();
    };
  }
    
  componentDidMount(){
    this.focusTextView();
  }

  render(){
    return (
      <>
        <textarea style={{width:'380px',height:'400px'}} ref={(e)=>this.textView = e} value={this.props.bookText} />
      <pre>
        {`import {Component} from 'react';

class TextReaderCallback extends Component {
  
  constructor(props) {
    super(props);
    this.textView = null;

    this.focusTextView = () => {
      if (this.textView) this.textView.focus();
    };
  }
    
  componentDidMount(){
    this.focusTextView();
  }

  render(){
    return (
        <textarea style={{width:'380px',height:'400px'}} ref={(e)=>this.textView = e} value={this.props.bookText} />
    );
  }

}

export default TextReaderCallback;`}
      </pre>
      </>
    );
  }

}

export default TextReaderCallback;