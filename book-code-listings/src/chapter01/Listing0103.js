import React from "react";

function App() {
  const [personName, setPersonName] = React.useState("");

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
    <pre>{`import React from 'react';

function App() {
  const [personName,setPersonName] = React.useState('');

  return (
    <div className="App">
      <h1>Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)} />
    </div>
  );
}

export default App;`}</pre>
  )
}

export default App;
