import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [personName, setPersonName] = React.useState('');

  return (
    <div>
      <div className="listing-result">
        <h1>Hello {personName}</h1>
        <input type="text" onChange={(e) => setPersonName(e.target.value)} />
      </div>
      <CodeAndText />
    </div>
  );
}

function CodeAndText() {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={github}
    >{`import React from 'react';

function App() {
  const [personName,setPersonName] = React.useState('');

  return (
    <div className="App">
      <h1>Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)} />
    </div>
  );
}

export default App;`}</SyntaxHighlighter>
  );
}

export default App;
