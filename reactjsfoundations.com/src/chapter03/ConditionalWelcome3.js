import Header from './Header';
import Login from './Login';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Welcome({ loggedIn }) {
  return (
    <>
      <div className="listing-result">{loggedIn ? <Header /> : <Login />}</div>
      <CodeAndText />
    </>
  );
}
function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
      {`import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}){
    return(
      <div>
        {loggedIn?<Header />:<Login />}
      </div>
    )
}
  
export default Welcome;`}
    </SyntaxHighlighter>
  );
}
export default Welcome;
