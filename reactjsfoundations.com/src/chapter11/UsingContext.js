import React from 'react';
import { ThemeContext } from './theme-context';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function App() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <h1>Welcome to my app.</h1>
      </header>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';
import { ThemeContext } from './theme-context'

function App() {
  const { theme } = React.useContext(ThemeContext)
  return (
    <>
      <header
        className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <h1>Welcome to my app.</h1>
      </header>
    </>
  )
}

export default App;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default App;
