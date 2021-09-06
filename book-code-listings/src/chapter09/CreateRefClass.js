import React,{Component} from 'react';

class TextReader extends Component {
  constructor(props) {
    super(props);
    this.textView = React.createRef();
  }
  render() {
    return (
      <textarea ref={this.textView} value={this.props.bookText} />
    );
  }
}

export default TextReader;