import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listing411 from './chapter4/Listing411';
import Listing412 from './chapter4/Listing412';
import BasicFigure from './chapter4/BasicFigure';
import FigureList from './chapter4/FigureList';
import FigureListProps from './chapter4/FigureListProps';
import ThingsThatILike from './chapter4/ThingsThatILike';
import FooClass from './chapter4/Listing420';
import FooFunction from './chapter4/Listing421';

function App() {
  return (
    <Router>
      <div style={{display:"flex"}}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Chapter 4
              <ul>
                <li>
                  <Link to="/listing411">Listing 4-11</Link>
                </li>
                <li>
                  <Link to="/listing412">Listing 4-12</Link>
                </li>
                <li>
                  <Link to="/listing413">Listing 4-13</Link>
                </li>
                <li>
                  <Link to="/listing414">Listing 4-14</Link>
                </li>
                <li>
                  <Link to="/listing415">Listing 4-15</Link>
                </li>
                <li>
                  <Link to="/listing419">Listing 4-19</Link>
                </li>
                <li>
                  <Link to="/listing420">Listing 4-20</Link>
                </li>
                <li>
                  <Link to="/listing421">Listing 4-21</Link>
                </li>
              </ul>
            </li>
            
          </ul>
        </nav>
        <main style={{padding:"20px"}}>
        <Switch>
          <Route path="/listing411">
            <Listing411 />
          </Route>
          <Route path="/listing412">
            <Listing412 />
          </Route>
          <Route path="/listing413">
            <BasicFigure />
          </Route>
          <Route path="/listing414">
            <FigureList />
          </Route>
          <Route path="/listing415">
            <FigureListProps />
          </Route>
          <Route path="/listing419">
            <ThingsThatILike />
          </Route>
          <Route path="/listing420">
            <FooClass />
          </Route>
          <Route path="/listing421">
            <FooFunction />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
