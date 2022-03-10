import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Listing0102() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { personName:'Murray' };
  }

  render() {
    return React.createElement('h1', null, 'Hello, ' + this.state.personName);
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(HelloWorld), domContainer);`}
    </SyntaxHighlighter>
  );
}

export default Listing0102;
