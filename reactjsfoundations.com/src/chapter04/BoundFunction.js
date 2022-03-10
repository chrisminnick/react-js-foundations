import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.message = 'hello';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(this.message); // 'hello'
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from 'react';

class Foo extends React.Component{
  constructor( props ){
    super( props );
    this.message = "hello";
    this.handleClick = this.handleClick.bind(this);
  }
      
  handleClick(event){
    console.log(this.message); // 'hello'
  }
      
  render(){
    return (
      <button type="button" onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}
    
export default Foo;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default Foo;
