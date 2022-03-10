import Header from './Header';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Welcome() {
  let header = <Header />;
  return (
    <>
      <div>{header}</div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import Header from './Header';

function Welcome(){

  let header = <Header />;
  return(
    <div>
      {header}
    </div>
  );
}
export default Welcome;
`}
      </SyntaxHighlighter>
    </>
  );
}
export default Welcome;
