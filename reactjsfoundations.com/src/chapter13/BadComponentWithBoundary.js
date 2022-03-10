import ErrorBoundary from './ErrorBoundary';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function BadComponentContainer() {
  return (
    <>
      <ErrorBoundary>
        <BadComponent />
      </ErrorBoundary>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import ErrorBoundary from './ErrorBoundary';

function BadComponentContainer(){
    return (
        <ErrorBoundary>
            <BadComponent />
        </ErrorBoundary>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
  `}
      </SyntaxHighlighter>
    </>
  );
}

function BadComponent() {
  return { oops: 'this is not good' };
}

export default BadComponentContainer;
