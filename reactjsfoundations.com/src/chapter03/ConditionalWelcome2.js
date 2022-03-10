import Header from './Header';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Welcome({ loggedIn }) {
  return (
    <>
      <div className="listing-result">
        {loggedIn && <Header />}
        Note: if you don't see the welcome messsage, you're not logged in.
      </div>
      <CodeAndText />
    </>
  );
}

function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`import Header from './Header';

function Welcome({loggedIn}){
    return (
      <div>
        {loggedIn&&<Header />}
        Note: if you don't see the welcome messsage,
        you're not logged in.
      </div>
    )
  }
  
export default Welcome;`}
    </SyntaxHighlighter>
  );
}
export default Welcome;
