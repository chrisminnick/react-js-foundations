import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function ThingsThatAreFunny(props) {
  return (
    <>
      <h1>Here are some funny things.</h1>
      {props.children}
      <SyntaxHighlighter language="javascript" style={github}>
        {`export default function ThingsThatAreFunny(props) {
    return (
      <>
        <h1>Here are some funny things.</h1>
        {props.children}
      </>
    )
}  `}
      </SyntaxHighlighter>
    </>
  );
}
