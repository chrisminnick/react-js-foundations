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
    <>
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
      <h1>Conditional Rendering with Element Variables</h1>
      <p>
        The &amp;&amp; operator relies on the fact that any operand in
        JavaScript can be converted to a Boolean true or a Boolean false. The
        following values evaluate to <code>false</code>:
      </p>
      <ul>
        <li>false (Boolean false)</li>
        <li>0 (The number 0)</li>
        <li>-0 (The number -0)</li>
        <li>0n (The BigInt zero)</li>
        <li>'' (Empty string)</li>
        <li>null (The absense of a value)</li>
        <li>undefined (The undefined data type)</li>
        <li>NaN (Not a number)</li>
      </ul>
      <p>
        Values that evaluate to a Boolean false are said to be "falsy." All
        other values evaluate to a Boolean true and are known as "truthy."
      </p>
      <p>
        If the operand on the left of JavaScript's &amp;&amp; operator evaluates
        to a Boolean false, the value on the left is returned. If the operand on
        the left evaluates to a Boolean true, the operand on the right is
        evaluated. If the operand on the right evaluates to a Boolean true, the
        value on the right is returned.
      </p>
    </>
  );
}
export default Welcome;
