import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NavBar(props) {
  return (
    <>
      <div>{props.children}</div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function NavBar(props){
    return (
      <div>
        {props.children}
      </div>
    )
  }
export default NavBar;
`}
      </SyntaxHighlighter>
    </>
  );
}
export default NavBar;
