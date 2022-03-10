import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function MyComponent() {
  return (
    <>
      <h1>The heading</h1>
      <h2>The subheading</h2>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function MyComponent(){
    return(
      <>
        <h1>The heading</h1>
        <h2>The subheading</h2>
      </>
    );
  }
  
export default MyComponent;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default MyComponent;
