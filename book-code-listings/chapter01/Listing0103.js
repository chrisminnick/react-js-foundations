import React from "react";

function App() {
  const [personName, setPersonName] = React.useState("");

  return (
    <div>
      <div className="listing-result">
      <h1>Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)} />
      </div>
      
      
    </div>
  );
}

export default App;
