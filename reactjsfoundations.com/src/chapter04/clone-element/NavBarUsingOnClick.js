import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NavItem(props) {
  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function NavItem(props){
  return (
    <button onClick={props.onClick}>Click Me</button>
  )
}

export default NavItem;`}
      </SyntaxHighlighter>
    </>
  );
}

export default NavItem;
