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
      <h1>Conditional Rendering with &amp;&amp;</h1>
      <p>
        The <code>&amp;&amp;</code> operator relies on the fact that any operand
        in JavaScript can be converted to a Boolean <code>true</code> or a
        Boolean <code>false</code>. The following values evaluate to{' '}
        <code>false</code>:
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
        Values that evaluate to a Boolean <code>false</code> are said to be
        "falsy." All other values evaluate to a Boolean <code>true</code> and
        are known as "truthy."
      </p>
      <p>
        If the operand on the left of JavaScript's <code>&amp;&amp;</code>{' '}
        operator evaluates to a Boolean <code>false</code>, the value on the
        left is returned. If the operand on the left evaluates to a Boolean{' '}
        <code>true</code>, the operand on the right is evaluated. If the operand
        on the right evaluates to a Boolean <code>true</code>, the value on the
        right is returned.
      </p>
      <p>
        In the above example, if the value of <code>loggedIn</code> is{' '}
        <code>false</code>, the statement will return <code>false</code> and
        nothing will render. If <code>loggedIn</code> is <code>true</code>, the
        component on the right will render.
      </p>
      <p>
        Using the <code>&amp;&amp;</code> operator is a quick and easy way to
        conditionally render a component. Unlike using an <code>if/else</code>{' '}
        statement, a <code>switch</code> statement, or the ternary operator,
        using <code>&amp;&amp;</code> doesn't provide a way to choose between 2
        or more components to render.
      </p>
    </>
  );
}
export default Welcome;
