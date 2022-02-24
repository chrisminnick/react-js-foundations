import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>React Router 6 Demo</h1>
      <div className="App">
        <div id="leftCol">
          <ul>
            <li>
              <Link to="item1">Item1</Link>
            </li>
            <li>
              <Link to="item2">Item2</Link>
            </li>
            <li>
              <Link to="item3">Item3</Link>
            </li>
          </ul>
        </div>
        <div id="rightCol">
          <Routes>
            <Route path="item1" element={<h1>Welcome to Item 1</h1>} />
            <Route path="item2" element={<h1>Welcome to Item 2</h1>} />
            <Route path="item3" element={<h1>Welcome to Item 3</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
