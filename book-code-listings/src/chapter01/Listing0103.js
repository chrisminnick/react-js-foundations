import React from 'react';
import './App.css';

function App() {
  const [personName,setPersonName] = React.useState('');

  return (
    <div>
      <h1>Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)} />

      <pre>{`import React from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
