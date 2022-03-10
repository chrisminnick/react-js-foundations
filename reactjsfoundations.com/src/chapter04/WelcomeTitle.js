import WelcomeMessage from './WelcomeMessage';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WelcomeTitle() {
  return (
    <>
      <WelcomeMessage />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import WelcomeMessage from './WelcomeMessage';

function WelcomeTitle(){
    return <WelcomeMessage />;
}

export default WelcomeTitle;`}
      </SyntaxHighlighter>
    </>
  );
}

export default WelcomeTitle;
