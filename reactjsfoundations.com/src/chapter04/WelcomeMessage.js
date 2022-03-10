import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WelcomeMessage() {
  return (
    <>
      Welcome!
      <SyntaxHighlighter language="javascript" style={github}>
        {`function WelcomeMessage(){
    return "Welcome!";
}
export default WelcomeMessage;`}
      </SyntaxHighlighter>
    </>
  );
}
export default WelcomeMessage;
