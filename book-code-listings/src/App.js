import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Collapsible from 'react-collapsible';
import Listing0103 from './chapter01/Listing0103';
import Login from './chapter03/Login';
import SearchBox from './chapter03/SearchBox/SearchBox';
import MyFancyComponent from './chapter03/MyFancyComponent/MyFancyComponent';
import Header from './chapter03/Header';
import Welcome from './chapter03/Welcome';
import ConditionalWelcome from './chapter03/ConditionalWelcome';
import ConditionalWelcome2 from './chapter03/ConditionalWelcome2';
import ConditionalWelcome3 from './chapter03/ConditionalWelcome3';
import CountUp from './chapter03/CountUp';
import ImmediateInvoke from './chapter03/ImmediateInvoke';
import FragmentExample1 from './chapter03/FragmentExample1';
import FragmentExample2 from './chapter03/FragmentExample2';
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
import Mutato from './chapter06/PropsMutation/App.js';
import WelcomeMessageProps from './chapter06/WelcomeMessage';
import WelcomeClass from './chapter06/WelcomeClass';
import SiteLink from './chapter06/SiteLink';
import SiteLinkNode from './chapter06/SiteLinkNode';
import BorderBox from './chapter06/BorderBox';
import CounterClass from './chapter06/CounterClass';
import IncrementTwice from './chapter06/IncrementTwice';
import IncrementTwiceFixed from './chapter06/IncrementTwiceFixed';
import Reminders from './chapter06/Reminders/App';
import FamilyTree from './chapter06/FamilyTree';
import Person from './chapter06/Person';
import Dog from './chapter06/Dog';
import DisplayPrimaryColors from './chapter06/DisplayPrimaryColors';
import Contact from './chapter06/Contact';

function App() {
  return (
    <Router>
      <div style={{display:"flex"}}>
        <nav>
          <ul id="buttons">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Chapter 0</li>
            <li>
              <Collapsible trigger="Chapter 1">
              <ul>
                <li>
                  <a href="/Listing01-01">Listing 1-1</a>
                </li>
                <li>
                  <Link to="/listing0103">Listing 1-3</Link>
                </li>
              </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 2">
                <ul>

                </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 3">
              <ul>
                <li>
                  <Link to="/listing301">Listing 3-01</Link>
                </li>
                <li>
                  <Link to="/listing302">Listing 3-02</Link>
                </li>
                <li>
                  <Link to="/listing303">Listing 3-03</Link>
                </li>
                <li>
                  <Link to="/listing306">Listing 3-06</Link>
                </li>
                <li>
                  <Link to="/listing308">Listing 3-08</Link>
                </li>
                <li>
                  <Link to="/listing309">Listing 3-09</Link>
                </li>
                <li>
                  <Link to="/listing310">Listing 3-10</Link>
                </li>
                <li>
                  <Link to="/listing311">Listing 3-11</Link>
                </li>
                <li>
                  <Link to="/listing312">Listing 3-12</Link>
                </li>
                <li>
                  <Link to="/listing313">Listing 3-13</Link>
                </li>
                <li>
                  <Link to="/listing314">Listing 3-14</Link>
                </li>
                <li>
                  <Link to="/listing315">Listing 3-15</Link>
                </li>
              </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 4">
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
              </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 5">
                <ul>

                </ul>
              </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 6">
              <ul>
                <li>
                  <Link to="/listing601">Listing 6-01</Link>
                </li>
                <li>
                  <Link to="/listing602">Listing 6-02</Link>
                </li>
                <li>
                  <Link to="/listing603">Listing 6-03</Link>
                </li>
                <li>
                  <Link to="/listing604">Listing 6-04</Link>
                </li>
                <li>
                  <Link to="/listing608">Listing 6-08</Link>
                </li>
                <li>
                  <Link to="/listing609">Listing 6-09</Link>
                </li>
                <li>
                  <Link to="/listing610">Listing 6-10</Link>
                </li>
                <li>
                  <Link to="/listing611">Listing 6-11</Link>
                </li>
                <li>
                  <Link to="/listing612">Listing 6-12</Link>
                </li>
                <li>
                  <Link to="/listing613">Listing 6-13</Link>
                </li>
                <li>
                  <Link to="/listing614">Listing 6-14</Link>
                </li>
                <li>
                  <Link to="/listing617">Listing 6-17</Link>
                </li>
                <li>
                  <Link to="/listing619">Listing 6-19</Link>
                </li>
                <li>
                  <Link to="/listing620">Listing 6-20</Link>
                </li>
                <li>
                  <Link to="/Reminders">Finished Reminders App</Link>
                </li>
              </ul>
              </Collapsible>
            </li>
            
          </ul>
        </nav>
        <main style={{padding:"20px"}}>
        <Switch>
          <Route path="/listing0103">
            <Listing0103 />
          </Route>
          <Route path="/listing301">
            <Login />
          </Route>
          <Route path="/listing302">
            <SearchBox />
          </Route>
          <Route path="/listing303">
            <MyFancyComponent />
          </Route>
          <Route path="/listing306">
            <Header />
          </Route>
          <Route path="/listing308">
            <Welcome />
          </Route>
          <Route path="/listing309">
            <ConditionalWelcome />
          </Route>
          <Route path="/listing310">
            <ConditionalWelcome2 />
          </Route>
          <Route path="/listing311">
            <ConditionalWelcome3 />
          </Route>
          <Route path="/listing312">
            <CountUp />
          </Route>
          <Route path="/listing313">
            <ImmediateInvoke />
          </Route>
          <Route path="/listing314">
            <FragmentExample1 />
          </Route>
          <Route path="/listing315">
            <FragmentExample2 />
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
          <Route path="/listing601">
            <Mutato />
          </Route>
          <Route path="/listing602">
            <WelcomeMessageProps firstName={'Jimmy'} />
          </Route>
          <Route path="/listing603">
            <WelcomeMessageProps firstName={'false'} />
          </Route>
          <Route path="/listing604">
            <WelcomeClass firstName={'frank'} />
          </Route>
          <Route path="/listing608">
            <SiteLink url="http://example.com" linkName="Example" />
          </Route>
          <Route path="/listing609">
            <SiteLinkNode url="http://example.com" linkName="Example" />
          </Route>
          <Route path="/listing610">
            <BorderBox><p>The first paragraph</p>
                       {/* <p>The second paragraph</p> */}
            </BorderBox>
          </Route>
          <Route path="/listing611">
            <FamilyTree father={new Person("Patrick")} /> {/* propType validates */}
            {/* <FamilyTree father={"Patrick"} /> propType doesn't validate */}
          </Route>
          <Route path="/listing612">
            <FamilyTree father={new Person("Patrick")} pet={Dog} /> {/* propType validates */}
          </Route>
          <Route path="/listing613">
            <DisplayPrimaryColors primaryColor = "red" />
          </Route>
          <Route path="/listing614">
            <Contact fullName="Chris Minnick" phone="5555555" />
          </Route>
          <Route path="/listing617">
            <CounterClass />
          </Route>
          <Route path="/listing619">
            <IncrementTwice />
          </Route>
          <Route path="/listing620">
            <IncrementTwiceFixed />
          </Route>
          <Route path="/Reminders">
            <Reminders />
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
