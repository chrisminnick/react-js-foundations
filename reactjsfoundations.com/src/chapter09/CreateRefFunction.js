import { useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function TextReader(props) {
  const textView = useRef(null);

  return (
    <>
      <textarea ref={textView} value={props.bookText} />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useRef} from 'react';

function TextReader(props) {

  const textView = useRef(null);

  return (
    <textarea ref={textView} value={props.bookText} />
  );

}

export default TextReader;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default TextReader;
