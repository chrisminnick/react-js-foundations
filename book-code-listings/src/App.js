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
import Farms from './chapter04/Farm/Farms';
import ImprovedFarms from './chapter04/Farm/ImprovedFarms';
import CreateReactClass from './chapter04/CreateReactClass';
import ReactClassComponent from './chapter04/ReactClassComponent';
import UnboundFunction from './chapter04/UnboundFunction';
import BoundFunction from './chapter04/BoundFunction';
import ClassComponentState from './chapter04/ClassComponentState';
import SetStateAsync from './chapter04/SetStateAsync';
import BasicFigure from './chapter04/BasicFigure';
import FigureList from './chapter04/FigureList';
import FigureListProps from './chapter04/FigureListProps';
import ToDoClass from './chapter04/ToDoClass';
import ToDoFunction from './chapter04/ToDoFunction';
import {ToDoFunctionSimple} from './chapter04/ToDoFunctionSimple';
import Counter from './chapter04/Counter';
import LoginForm from './chapter04/LoginForm/LoginForm';
import ThingsThatAreFunny from './chapter04/ThingsThatAreFunny';
import ThingsThatILike from './chapter04/ThingsThatILike';
import CloneElementExample from './chapter04/clone-element/App'
import LeakyCounter from './chapter04/LeakyCounter';
import CounterController from './chapter04/CounterController';
import NoLeakCounterController from './chapter04/NoLeakCounterController';
import ShallowCompare from './chapter04/ShallowCompare';
import PureComponent from './chapter04/PureComponent';
import ReactMemoExample from './chapter04/ReactMemoExample';

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
                  <Link to="/listing405">Listing 4-05</Link>
                </li>
                <li>
                  <Link to="/listing407">Listing 4-07</Link>
                </li>      
                <li>
                  <Link to="/listing408">Listing 4-08</Link>
                </li> 
                <li>
                  <Link to="/listing409">Listing 4-09</Link>
                </li>  
                <li>
                  <Link to="/listing410">Listing 4-10</Link>
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
                  <Link to="/listing417">Listing 4-17</Link>
                </li>
                <li>
                  <Link to="/listing418">Listing 4-18</Link>
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
                <li>
                  <Link to="/listing422">Listing 4-22</Link>
                </li>
                <li>
                  <Link to="/listing423">Listing 4-23</Link>
                </li>
                <li>
                  <Link to="/listing424">Listing 4-24</Link>
                </li>
                <li>
                  <Link to="/listing425">Listing 4-25</Link>
                </li>
                <li>
                  <Link to="/listing431">Listing 4-31</Link>
                </li>
                <li>
                  <Link to="/listing432">Listing 4-32</Link>
                </li>
                <li>
                  <Link to="/listing433">Listing 4-33</Link>
                </li>
                <li>
                  <Link to="/listing434">Listing 4-34</Link>
                </li>  
                <li>
                  <Link to="/listing435">Listing 4-35</Link>
                </li>  
                <li>
                  <Link to="/listing436">Listing 4-36</Link>
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
          <Route path="/listing405">
            <Farms />
          </Route>
          <Route path="/listing407">
            <ImprovedFarms />
          </Route>
          <Route path="/listing408">
            <CreateReactClass />
          </Route>
          <Route path="/listing409">
            <ReactClassComponent />
          </Route>
          <Route path="/listing410">
            <UnboundFunction />
          </Route>    
          <Route path="/listing411">
            <BoundFunction />
          </Route>                  
          <Route path="/listing412">
            <ClassComponentState />
          </Route>
          <Route path="/listing413">
            <SetStateAsync />
          </Route>
          <Route path="/listing414">
            <BasicFigure />
          </Route>
          <Route path="/listing415">
            <FigureList />
          </Route>
          <Route path="/listing416">
            <FigureListProps />
          </Route>
          <Route path="/listing417">
            <FigureListProps />
          </Route>
          <Route path="/listing418">
            <ToDoClass />
          </Route>
          <Route path="/listing419">
            <ToDoFunction />
          </Route>
          <Route path="/listing420">
            <ToDoFunctionSimple />
          </Route>
          <Route path="/listing421">
            <Counter />
          </Route>
          <Route path="/listing422">
            <LoginForm />
          </Route>
          <Route path="/listing423">
            <ThingsThatAreFunny />
          </Route>
          <Route path="/listing424">
            <ThingsThatILike />
          </Route>
          <Route path="/listing425">
            <CloneElementExample />
          </Route>
          <Route path="/listing431">
            <LeakyCounter />
          </Route>
          <Route path="/listing432">
            <CounterController />
          </Route>
          <Route path="/listing433">
            <NoLeakCounterController />
          </Route>
          <Route path="/listing434">
            <ShallowCompare />
          </Route>
          <Route path="/listing435">
            <PureComponent />
          </Route>
          <Route path="/listing436">
            <ReactMemoExample />
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
