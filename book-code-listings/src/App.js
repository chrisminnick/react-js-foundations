import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Collapsible from 'react-collapsible';
import * as Chapter01 from './chapter01';
import * as Chapter03 from './chapter03';
import * as Chapter04 from './chapter04';
import * as Chapter06 from './chapter06';
import * as Chapter07 from './chapter07';
import * as Chapter08 from './chapter08';
import * as Chapter09 from './chapter09';
import * as Chapter10 from './chapter10';
import * as Chapter11 from './chapter11';
import * as Chapter12 from './chapter12';
import * as Chapter13 from './chapter13';
import * as Chapter16 from './chapter16';
import * as Chapter17 from './chapter17';

function App() {
  return (
      <div style={{display:"flex"}}>
        <nav>
          <ul id="buttons">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Collapsible trigger="Chapter 1">
              <ul>
                <li>
                  <a href="/Listing01-01">Listing 1-1</a>
                </li>
                <li>
                  <a href="/Listing0102">Listing 1-2</a>
                </li>
                <li>
                  <Link to="/listing0103">Listing 1-3</Link>
                </li>
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
                  <Link to="/listing304">Listing 3-04</Link>
                </li>
                <li>
                  <Link to="/listing305">Listing 3-05</Link>
                </li>
                <li>
                  <Link to="/listing306">Listing 3-06</Link>
                </li>
                <li>
                  <Link to="/listing307">Listing 3-07</Link>
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
                  <Link to="/listing615">Listing 6-15</Link>
                </li>
                <li>
                  <Link to="/listing616">Listing 6-16</Link>
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
                  <Link to="/listing621">Listing 6-21</Link>
                </li>
                <li>
                  <Link to="/listing622">Listing 6-22</Link>
                </li>
                <li>
                  <Link to="/listing623">Listing 6-23</Link>
                </li>
                <li>
                  <Link to="/listing624">Listing 6-24</Link>
                </li>
                <li>
                  <Link to="/listing625">Listing 6-25</Link>
                </li>
                <li>
                  <Link to="/listing626">Listing 6-26</Link>
                </li>
                <li>
                  <Link to="/listing627">Listing 6-27</Link>
                </li>
                <li>
                  <Link to="/listing628">Listing 6-28</Link>
                </li>
                <li>
                  <Link to="/listing629">Listing 6-29</Link>
                </li>
                <li>
                  <Link to="/listing630">Listing 6-30</Link>
                </li>
                <li>
                  <Link to="/Reminders">Finished Reminders App</Link>
                </li>
                <li>
                  <Link to="/RemindersClass">Finished Reminders App (Class Component Version)</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 7">
                <ul>
                <li>
                  <Link to="/listing701">Listing 7-01</Link>
                </li>
                <li>
                  <Link to="/listing706">Listing 7-06</Link>
                </li>
                <li>
                  <Link to="/listing707">Listing 7-07</Link>
                </li>
                <li>
                  <Link to="/listing708">Listing 7-08</Link>
                </li>  
                <li>
                  <Link to="/listing709">Listing 7-09</Link>
                </li>                
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 8">
                <ul>
                <li>
                  <Link to="/listing801">Listing 8-01</Link>
                </li>
                <li>
                  <Link to="/listing802">Listing 8-02</Link>
                </li>
                <li>
                  <Link to="/listing803">Listing 8-03</Link>
                </li>
                <li>
                  <Link to="/listing804">Listing 8-04</Link>
                </li>
                <li>
                  <Link to="/listing805">Listing 8-05</Link>
                </li>
                <li>
                  <Link to="/listing806">Listing 8-06</Link>
                </li>
                <li>
                  <Link to="/listing807">Listing 8-07</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 9">
                <ul>
                <li>
                  <Link to="/listing903">Listing 9-03</Link>
                </li>
                <li>
                  <Link to="/listing904">Listing 9-04</Link>
                </li>
                <li>
                  <Link to="/listing905">Listing 9-05</Link>
                </li>
                <li>
                  <Link to="/listing906">Listing 9-06</Link>
                </li>
                <li>
                  <Link to="/listing907">Listing 9-07</Link>
                </li>
                <li>
                  <Link to="/listing908">Listing 9-08</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 10">
                <ul>
                <li>
                  <Link to="/listing1001">Listing 10-01</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 11">
                <ul>
                <li>
                  <Link to="/listing1101">Listing 11-01</Link>
                </li>
                <li>
                  <Link to="/listing1102">Listing 11-02</Link>
                </li>
                <li>
                  <Link to="/listing1103">Listing 11-03</Link>
                </li>
                <li>
                  <Link to="/listing1104">Listing 11-04</Link>
                </li>
                <li>
                  <Link to="/listing1105">Listing 11-05</Link>
                </li>
                <li>
                  <Link to="/listing1106">Listing 11-06</Link>
                </li>
                <li>
                  <Link to="/listing1107">Listing 11-07</Link>
                </li>
                <li>
                  <Link to="/listing1108">Listing 11-08</Link>
                </li>
                <li>
                  <Link to="/listing1109">Listing 11-09</Link>
                </li>
                <li>
                  <Link to="/listing1110">Listing 11-10</Link>
                </li>
                <li>
                  <Link to="/listing1111">Listing 11-11</Link>
                </li>
                <li>
                  <Link to="/listing1112">Listing 11-12</Link>
                </li>
                <li>
                  <Link to="/listing1113">Listing 11-13</Link>
                </li>
                <li>
                  <Link to="/listing1114">Listing 11-14</Link>
                </li>
                <li>
                  <Link to="/listing1118">Listing 11-18</Link>
                </li>
                <li>
                  <Link to="/listing1121">Listing 11-21</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 12">
                <ul>
                <li>
                  <Link to="/listing1201">Listing 12-01</Link>
                </li>
                <li>
                  <Link to="/listing1202">Listing 12-02</Link>
                </li>
                <li>
                  <Link to="/listing1203">Listing 12-03</Link>
                </li>
                <li>
                  <Link to="/listing1204">Listing 12-04</Link>
                </li>
                <li>
                  <Link to="/listing1205">Listing 12-05</Link>
                </li>
                <li>
                  <Link to="/listing1206">Listing 12-06</Link>
                </li>
                <li>
                  <Link to="/listing1207">Listing 12-07</Link>
                </li>
                <li>
                  <Link to="/listing1212">Listing 12-12</Link>
                </li>
                <li>
                  <Link to="/listing1214">Listing 12-14</Link>
                </li>
                <li>
                  <Link to="/listing1216">Listing 12-16</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 13">
                <ul>
                <li>
                  <Link to="/listing1301">Listing 13-01</Link>
                </li>
                <li>
                  <Link to="/listing1302">Listing 13-02</Link>
                </li>
                <li>
                  <Link to="/listing1303">Listing 13-03</Link>
                </li>
                <li>
                  <Link to="/listing1304">Listing 13-04</Link>
                </li>
                <li>
                  <Link to="/listing1305">Listing 13-05</Link>
                </li>
                <li>
                  <Link to="/listing1306">Listing 13-06</Link>
                </li>
                <li>
                  <Link to="/listing1307">Listing 13-07</Link>
                </li>
                <li>
                  <Link to="/listing1308">Listing 13-08</Link>
                </li>
                <li>
                  <Link to="/chapter13example">Sample App</Link>
                </li>
                <li>
                  <Link to="/chapter13example2">Sample App with Boundary</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 16">
                <ul>
                <li>
                  <Link to="/listing1605">Listing 16-05</Link>
                </li>
                <li>
                  <Link to="/listing1606">Listing 16-06</Link>
                </li>
                <li>
                  <Link to="/listing1607">Listing 16-07</Link>
                </li>
                <li>
                  <Link to="/listing1608">Listing 16-08</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 17">
                <ul>
                <li>
                  <Link to="/listing1701">Listing 17-01</Link>
                </li>
                <li>
                  <Link to="/listing1702">Listing 17-02</Link>
                </li>
                <li>
                  <Link to="/listing1707">Listing 17-07</Link>
                </li>
                <li>
                  <Link to="/listing1708">Listing 17-08</Link>
                </li>
                <li>
                  <Link to="/listing1710">Listing 17-10</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 18">
                <ul>
                <li>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 19">
                <ul>
                <li>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 20">
                <ul>
                <li>
                </li>
                </ul>
                </Collapsible>
                </li>
          </ul>
        </nav>
        <main style={{padding:"20px",width:"100%"}}>
          <h1>React JS Foundations Building User Interfaces with ReactJS: An Approachable Guide</h1>
          <p>by Chris Minnick</p>
        <Switch>
          <Route path="/listing0102">
            <>
            <h2>Listing 1-2: Changing the state data in a component</h2>
            <Chapter01.Listing0102 />
            </>
          </Route>
          <Route path="/listing0103">
            <>
            <h2>Listing 1-3: An interactive Hello, World component</h2>
            <Chapter01.Listing0103 />
            </>
          </Route>
          <Route path="/listing301">
            <>
            <h2>Listing 3-1: A React Component</h2>
            <Chapter03.Login />
            </>
          </Route>
          <Route path="/listing302">
            <>
            <h2>Listing 3-2: Using a user-defined React component in JSX</h2>
            <Chapter03.SearchBox />
            </>
          </Route>
          <Route path="/listing303">
            <>
            <h2>Listing 3-3: Custom attributes in HTML must start with data-</h2>
            <pre>{`<div data-size="XL" 
         data-color="black"
         data-description="awesome">
         My Favorite T-Shirt
    </div>
`}</pre>
            </>
          </Route>
          <Route path="/listing304">
            <>
            <h2>Listing 3-4: User-defined elements can have any attributes</h2>
            <Chapter03.MyFancyComponent />
            </>
          </Route>
          <Route path="/listing305">
            <>
            <h2>Listing 3-5: Using literal JavaScript inside of JSX</h2>
            <pre>
{`function SearchInput(props) {

return (
  <div id="search-box">
    <input  type="text" 
            name="search" 
            value={props.term}
            onChange={(e)=>{props.onChange(e.target.value)}} />
  </div>
)
}

export default SearchInput;
`}</pre>
            </>
          </Route>
          <Route path="/listing306">
          <>
            <h2>Listing 3-6:  Object literals in JSX result in double curly braces</h2>
            <Chapter03.Header />
          </>
          </Route>
          <Route path="/listing307">
            <>
              <h2>Listing 3-7: Enclose comments in curly braces</h2>
<pre>{`function Header(props){
return (
  <h1 style={{fontSize:"24px",color:"blue"}}>
    {/* Todo: Make this header dynamic */}

    Welcome to My Website
  </h1>
  )
}
export default Header;
`}</pre>
          </>
          </Route>
          <Route path="/listing308">
          <>
            <h2>Listing 3-8: Using Element Variables</h2>
            <Chapter03.Welcome />
          </>
          </Route>
          <Route path="/listing309">
          <>
            <h2>Listing 3-9: Conditional Rendering with Element Variables</h2>
            <Chapter03.ConditionalWelcome />
          </>
          </Route>
          <Route path="/listing310">
          <>
            <h2>Listing 3-10: Conditional Rendering with &&</h2>
            <Chapter03.ConditionalWelcome2 />
          </>
          </Route>
          <Route path="/listing311">
          <>
            <h2>Listing 3-11: Using the conditional operator</h2>
            <Chapter03.ConditionalWelcome3 />
          </>
          </Route>
          <Route path="/listing312">
          <>
            <h2>Listing 3-12: Using an arrow function as an event handler</h2>
            <Chapter03.CountUp />
          </>
          </Route>
          <Route path="/listing313">
          <>
            <h2>Listing 3-13: Immediately invoking a function in JSX</h2>
            <Chapter03.ImmediateInvoke />
          </>
          </Route>
          <Route path="/listing314">
          <>
            <h2>Listing 3-14: Using React.Fragment</h2>
            <Chapter03.FragmentExample1 />
          </>
          </Route>
          <Route path="/listing315">
          <>
            <h2>Listing 3-15: Using React.Fragment's Short Syntax</h2>
            <Chapter03.FragmentExample2 />
          </>
          </Route>
          <Route path="/listing401">
            <Chapter04.WelcomeMessage />
          </Route>
          <Route path="/listing402">
            <Chapter04.WelcomeTitle />
          </Route>
          <Route path="/listing403">
            <Chapter04.Cart />
          </Route>
          <Route path="/listing404">
            <Chapter04.SingleComponentCart />
          </Route>
          <Route path="/listing405">
            <Chapter04.Farms />
          </Route>
          <Route path="/listing407">
            <Chapter04.ImprovedFarms />
          </Route>
          <Route path="/listing408">
            <Chapter04.CreateReactClass />
          </Route>
          <Route path="/listing409">
            <Chapter04.ReactClassComponent />
          </Route>
          <Route path="/listing410">
            <Chapter04.UnboundFunction />
          </Route>    
          <Route path="/listing411">
            <Chapter04.BoundFunction />
          </Route>                  
          <Route path="/listing412">
            <Chapter04.ClassComponentState />
          </Route>
          <Route path="/listing413">
            <Chapter04.SetStateAsync />
          </Route>
          <Route path="/listing414">
            <Chapter04.BasicFigure />
          </Route>
          <Route path="/listing415">
            <Chapter04.FigureList />
          </Route>
          <Route path="/listing416">
            <Chapter04.FigureListProps />
          </Route>
          <Route path="/listing417">
            <Chapter04.FigureListProps />
          </Route>
          <Route path="/listing418">
            <Chapter04.ToDoClass />
          </Route>
          <Route path="/listing419">
            <Chapter04.ToDoFunction />
          </Route>
          <Route path="/listing420">
            <Chapter04.ToDoFunctionSimple />
          </Route>
          <Route path="/listing421">
            <Chapter04.Counter />
          </Route>
          <Route path="/listing422">
            <Chapter04.LoginForm />
          </Route>
          <Route path="/listing423">
            <Chapter04.ThingsThatAreFunny />
          </Route>
          <Route path="/listing424">
            <Chapter04.ThingsThatILike />
          </Route>
          <Route path="/listing425">
            <Chapter04.CloneElementExample />
          </Route>
          <Route path="/listing431">
            <Chapter04.LeakyCounter />
          </Route>
          <Route path="/listing432">
            <Chapter04.CounterController />
          </Route>
          <Route path="/listing433">
            <Chapter04.NoLeakCounterController />
          </Route>
          <Route path="/listing434">
            <Chapter04.ShallowCompare />
          </Route>
          <Route path="/listing435">
            <Chapter04.PureComponent />
          </Route>
          <Route path="/listing436">
            <Chapter04.ReactMemoExample />
          </Route>
          <Route path="/listing601">
            <Chapter06.Mutato />
          </Route>
          <Route path="/listing602">
            <Chapter06.WelcomeMessageProps firstName='Jimmy' />
          </Route>
          <Route path="/listing603">
            <Chapter06.WelcomeMessageProps firstName='Test' />
          </Route>
          <Route path="/listing604">
            <Chapter06.WelcomeClass firstName={'frank'} />
          </Route>
          <Route path="/listing608">
            <p>Uncomment the SiteLink element in App.js to see the error from passing an object to the SiteLink component.</p>
            {/* <Chapter06.SiteLink url="http://example.com" linkName={{name:'Example'}} /> */}
          </Route>
          <Route path="/listing609">
            <Chapter06.SiteLinkNode url="http://example.com" linkName="Example" />
          </Route>
          <Route path="/listing610">
            <Chapter06.BorderBox><p>The first paragraph</p>
                       {/* <p>The second paragraph</p> */}
            </Chapter06.BorderBox>
          </Route>
          <Route path="/listing611">
            <Chapter06.FamilyTree father={new Chapter06.Person("Patrick")} /> {/* propType validates */}
            {/* <Chapter06.FamilyTree father={"Patrick"} /> propType doesn't validate */}
          </Route>
          <Route path="/listing612">
            <Chapter06.FamilyTree father={new Chapter06.Person("Patrick")} pet={Chapter06.Dog} /> {/* propType validates */}
          </Route>
          <Route path="/listing613">
            <Chapter06.DisplayPrimaryColors primaryColor = "red" />
          </Route>
          <Route path="/listing614">
            <Chapter06.Contact fullName="Chris Minnick" phone="5555555555" />
            <Chapter06.Contact fullName="John Doe" phone="5555" />
          </Route>
          <Route path="/listing615">
            <Chapter06.StoresNearYou latitude="37.3230" longitude="122.0322" />
          </Route>
          <Route path="/listing616">
            <Chapter06.StoresNearYou1 />
          </Route>
          <Route path="/listing617">
            <Chapter06.StoresNearYou2 />
          </Route>
          <Route path="/listing618">
            <Chapter06.StoresNearYou3 />
          </Route>
          <Route path="/listing619">
            <Chapter06.StoresNearYou4 />
          </Route>
          <Route path="/listing620">
            <Chapter06.StoresNearYou5 />
          </Route>
          <Route path="/listing621">
            <Chapter06.NewsFeed />
          </Route>
          
          <Route path="/listing622">
            <Chapter06.NewsFeed2 />
          </Route>
          <Route path="/listing623">
            <Chapter06.NewsFeed3 />
          </Route>
          <Route path="/listing624">
            <Chapter06.NewsFeed4 />
          </Route>
          <Route path="/listing625">
            <Chapter06.CounterClass />
          </Route>
          <Route path="/listing626">
            <Chapter06.CounterClass2 />
          </Route>
          <Route path="/listing627">
            <Chapter06.CounterClass3 />
          </Route>
          <Route path="/listing628">
            <Chapter06.CounterClass4 />
          </Route>
          <Route path="/Reminders">
            <Chapter06.Reminders />
          </Route>
          <Route path="/RemindersClass">
            <Chapter06.RemindersClass />
          </Route>
          <Route path="/listing701">
            <Chapter07.EventProps />
          </Route>
          <Route path="/listing706">
            <Chapter07.ScreenDoor />
          </Route>
          <Route path="/listing707">
            <Chapter07.SearchTerm />
          </Route>
          <Route path="/listing708">
            <Chapter07.CoffeeMachine />
          </Route>
          <Route path="/listing709">
            <Chapter07.ColorWheel />
          </Route>
          <Route path="/listing801">
            <Chapter08.UncontrolledInput />
          </Route>
          <Route path="/listing802">
            <Chapter08.ControlledInput />
          </Route>
          <Route path="/listing803">
            <Chapter08.ControllingFunction />
          </Route>
          <Route path="/listing804">
            <Chapter08.ControllingClass />
          </Route>
          <Route path="/listing805">
            <Chapter08.ControllingClass2 />
          </Route>
          <Route path="/listing806">
            <Chapter08.SearchInterface />
          </Route>
          <Route path="/listing807">
            <Chapter08.BlogComment />
          </Route>
          <Route path="/listing903">
            <Chapter09.TextReader bookText={Chapter09.mobydick} />
          </Route>
          <Route path="/listing904">
            <Chapter09.TextReaderCallback bookText={Chapter09.mobydick} />
          </Route>
          <Route path="/listing905">
            <Chapter09.TextReaderCallback2 bookText={Chapter09.mobydick} />
          </Route>
          <Route path="/listing906">
            <Chapter09.CodeDisplay yourCode="8675309" />
          </Route>
          <Route path="/listing907">
            <Chapter09.AudioPlayer />
          </Route>
          <Route path="/listing908">
            <Chapter09.ScrollToDemo />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1101">
            <Chapter11.NumberGuessing />
          </Route>
          <Route path="/listing1102">
            <Chapter11.ButtonContainer />
          </Route>
          <Route path="/listing1103">
            <Chapter11.RenderCounter />
          </Route>
          <Route path="/listing1104">
            <Chapter11.TimerFun />
          </Route>
          <Route path="/listing1105">
            <Chapter11.TimerRestartFun />
          </Route>
          <Route path="/listing1106">
            <Chapter11.TimerOnceFun />
          </Route>
          <Route path="/listing1107">
          <Chapter11.TimerConditionalFun />
          </Route>
          <Route path="/listing1108">
            <Chapter11.ShippingAddress />
          </Route>
          <Route path="/listing1110">
            <Chapter11.ReducerCounter />
          </Route>
          <Route path="/listing1112">
            <Chapter11.CallMe />
          </Route>
          <Route path="/listing1113">
            <Chapter11.CallMeFixed />
          </Route>
          <Route path="/listing1114">
            <Chapter11.ShippingAddress2 />
          </Route>
          <Route path="/listing1113">
            <Chapter11.WordCount />
          </Route>
          <Route path="/listing1114">
            <Chapter11.CountingBox />
          </Route>
          <Route path="/listing1115">
            <Chapter11.WeatherWidget />
          </Route>
          <Route path="/listing1118">
            <Chapter11.ShippingAddress2 />
          </Route>
          <Route path="/listing1121">
            <Chapter11.UsingUseForm />
          </Route>         
          <Route path="/listing1201">
            <Chapter12.ChooseYourAdventure />
          </Route>
          <Route path="/listing1202">
            <Chapter12.NavMenu />
          </Route>
          <Route path="/listing1203">
            <Chapter12.NavMenuExact />
          </Route>
          <Route path="/listing1204">
            <Chapter12.NavMenuWithRouter />
          </Route>

          <Route path="/listing1206">
            <Chapter12.ComponentProp />
          </Route>
          <Route path="/listing1207">
            <Chapter12.RenderProp />
          </Route>
          <Route path="/listing1208">
            <Chapter12.ViewMatch />
          </Route>
          <Route path="/listing1209">
            <Chapter12.UserListRedirect />
          </Route>
          <Route path="/listing1214">
            <Chapter12.ViewLocation />
          </Route>
          <Route path="/listing1216">
            <Chapter12.NestedRoutes />
          </Route>

          <Route path="/listing1302">
            <Chapter13.BadComponent />
          </Route>
          <Route path="/listing1303">
            <Chapter13.BadComponentWithBoundary />
          </Route>
          <Route path="/listing1304">
            <Chapter13.ErrorBoundaryWithDidCatch><Chapter13.BadComponent /></Chapter13.ErrorBoundaryWithDidCatch>
          </Route>
          <Route path="/listing1306">
            <Chapter13.ErrorBoundaryWithLogging><Chapter13.BadComponent /></Chapter13.ErrorBoundaryWithLogging>
          </Route>
          <Route path="/listing1307">
            <Chapter13.SometimesBad />
          </Route>
          <Route path="/listing1308">
            <Chapter13.ErrorBoundaryWithReset><Chapter13.SometimesBad /></Chapter13.ErrorBoundaryWithReset>
          </Route>
          <Route path="/chapter13example">
            <Chapter13.SampleTree />
          </Route>
          <Route path="/chapter13example2">
            <Chapter13.SampleTreeWithErrorBoundary />
          </Route>
          <Route path="/listing1605">
            <Chapter16.Restful />
          </Route>
          <Route path="/listing1606">
            <Chapter16.Clicker1 />
          </Route>
          <Route path="/listing1607">
            <Chapter16.Clicker2 />
          </Route>
          <Route path="/listing1608">
            <Chapter16.Clicker3 />
          </Route>
          <Route path="/listing1609">
            <Chapter16.Clicker4 />
          </Route>
          <Route path="/listing1701">
            <Chapter17.PropDrilling story="test" />
          </Route>
          <Route path="/listing1702">
            <Chapter17.UnitsContext />
          </Route>
          <Route path="/listing1707">
            <Chapter17.DashboardProps />
          </Route>
          <Route path="/listing1708">
            <Chapter17.DashboardContext />
          </Route>
          <Route path="/listing1710">
            <Chapter17.DashboardComposition />
          </Route>
        </Switch>
      </main>
      </div>
  );
}

export default App;
