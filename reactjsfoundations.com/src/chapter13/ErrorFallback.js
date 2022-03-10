import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {error.message}
      </SyntaxHighlighter>
    </div>
  );
}
export default ErrorFallback;
