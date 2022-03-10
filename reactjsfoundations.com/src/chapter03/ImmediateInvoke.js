import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ImmediateInvoke() {
  return (
    <>
      <div>
        {(() => (
          <h1>The Header</h1>
        ))()}
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function ImmediateInvoke(){
    return(
        <div>
          {(()=><h1>The Header</h1>)()}
        </div>
      );
      
}
export default ImmediateInvoke;`}
      </SyntaxHighlighter>
    </>
  );
}
export default ImmediateInvoke;
