import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listing0103 from './chapter01/Listing0103';
import WelcomeMessage from './chapter04/WelcomeMessage';
import WelcomeTitle from './chapter04/WelcomeTitle';
import Cart from './chapter04/ShoppingCart/Cart';
import SingleComponentCart from './chapter04/ShoppingCart/SingleComponentCart';

import Listing411 from './chapter04/Listing411';
import Listing412 from './chapter04/Listing412';
import BasicFigure from './chapter04/BasicFigure';
import FigureList from './chapter04/FigureList';
import FigureListProps from './chapter04/FigureListProps';
import ThingsThatILike from './chapter04/ThingsThatILike';
import CloneElementExample from './chapter04/clone-element/App'
import FooClass from './chapter04/Listing420';
import FooFunction from './chapter04/Listing421';

function App() {
  return (
    <Router>
      <div style={{display:"flex"}}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Chapter 0</li>
            <li>Chapter 1
              <ul>
                <li>
                  <a href="/Listing01-01">Listing 1-1</a>
                </li>
                <li>
                  <Link to="/listing0103">Listing 1-3</Link>
                </li>
              </ul>
            </li>
            <li>Chapter 4
              <ul>
                <li>
                  <Link to="/listing401">Listing 4-01</Link>
                </li>
                <li>
                  <Link to="/listing402">Listing 4-02</Link>
                </li>
                <li>
                  <Link to="/listing403">Listing 4-03</Link>
                </li>
                <li>
                  <Link to="/listing404">Listing 4-04</Link>
                </li>                
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
                  <Link to="/clone-element">Clone Element Example</Link>
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
          <Route path="/listing0103">
            <Listing0103 />
          </Route>
          <Route path="/listing401">
            <WelcomeMessage />
          </Route>
          <Route path="/listing402">
            <WelcomeTitle />
          </Route>
          <Route path="/listing403">
            <Cart />
          </Route>
          <Route path="/listing404">
            <SingleComponentCart />
          </Route>
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
          <Route path="/clone-element">
            <CloneElementExample />
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
