import ErrorBoundary from 'react-error-boundary';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {error.message}
      </SyntaxHighlighter>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb() {
  throw new Error('💥 CABOOM 💥');
}

function App() {
  const [explode, setExplode] = React.useState(false);
  return (
    <div>
      <button onClick={() => setExplode((e) => !e)}>toggle explode</button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  );
}

export default App;
