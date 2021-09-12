import './App.css';
import {Link} from "react-router-dom";
import Collapsible from 'react-collapsible';
import {routes} from './routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
      <div style={{display:"flex"}}>
        <nav>
          <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
          <ul id="buttons">

            <li>
            <Collapsible trigger="About the Book">
              <ul>
                <li>
                  <Link to="/WhereToBuy">Where to Buy It</Link>
                </li>
                <li>
                  <Link to="/AboutChrisMinnick">About Chris Minnick</Link>
                </li>
              </ul>
              </Collapsible>
              </li>
              <li>
              <Collapsible trigger="Chapter 1 - Hello, World!">
              <ul>
                {/* <li>
                  <a href="/Listing01-01">Listing 1-1</a>
                </li> */}
                <li>
                  <Link to="/Listing0102">Listing 1-2: Changing the state data in a component</Link>
                </li>
                <li>
                  <Link to="/listing0103">Listing 1-3: An interactive Hello, World component</Link>
                </li>
              </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 2 - The Foundation of React">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 3 - JSX">
              <ul>
                <li>
                  <Link to="/listing301">Listing 3-1: A React Component</Link>
                </li>
                <li>
                  <Link to="/listing302">Listing 3-2: Using a user-defined React component in JSX</Link>
                </li>
                <li>
                  <Link to="/listing303">Listing 3-3: Custom attributes in HTML must start with data-</Link>
                </li>
                <li>
                  <Link to="/listing304">Listing 3-4: User-defined elements can have any attributes</Link>
                </li>
                <li>
                  <Link to="/listing305">Listing 3-5: Using literal JavaScript inside of JSX</Link>
                </li>
                <li>
                  <Link to="/listing306">Listing 3-6:  Object literals in JSX result in double curly braces</Link>
                </li>
                <li>
                  <Link to="/listing307">Listing 3-7: Enclose comments in curly braces</Link>
                </li>
                <li>
                  <Link to="/listing308">Listing 3-8: Using Element Variables</Link>
                </li>
                <li>
                  <Link to="/listing309">Listing 3-9: Conditional Rendering with Element Variables</Link>
                </li>
                <li>
                  <Link to="/listing310">Listing 3-10: Conditional Rendering with &&</Link>
                </li>
                <li>
                  <Link to="/listing311">Listing 3-11: Using the conditional operator</Link>
                </li>
                <li>
                  <Link to="/listing312">Listing 3-12: Using an arrow function as an event handler</Link>
                </li>
                <li>
                  <Link to="/listing313">Listing 3-13: Immediately invoking a function in JSX</Link>
                </li>
                <li>
                  <Link to="/listing314">Listing 3-14: Using React.Fragment</Link>
                </li>
                <li>
                  <Link to="/listing315">Listing 3-15: Using React.Fragment's Short Syntax</Link>
                </li>
              </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 4 - All About Components">
              <ul>
                <li>
                  <Link to="/listing401">Listing 4-1: Components Define Elements</Link>
                </li>
                <li>
                  <Link to="/listing402">Listing 4-2: Components can be imported into other components</Link>
                </li>
                <li>
                  <Link to="/listing403">Listing 4-3: Using components to reduce complexity</Link>
                </li>
                <li>
                  <Link to="/listing404">Listing 4-4: Putting everything in one component</Link>
                </li>
                <li>
                  <Link to="/listing405">Listing 4-5: Passing props</Link>
                </li>
                <li>
                  <Link to="/listing406">Listing 4-6: Using props inside a component</Link>
                </li>
                <li>
                  <Link to="/listing407">Listing 4-7: An improved version of the Farm component</Link>
                </li>      
                <li>
                  <Link to="/listing408">Listing 4-8: Creating a Component with React.createClass</Link>
                </li> 
                <li>
                  <Link to="/listing409">Listing 4-9: Creating a Component Using a Class</Link>
                </li>  
                <li>
                  <Link to="/listing410">Listing 4-10: Not binding your functions results in errors</Link>
                </li>                                 
                <li>
                  <Link to="/listing411">Listing 4-11: Binding a function and using it in another class</Link>
                </li>
                <li>
                  <Link to="/listing412">Listing 4-12: Using state and setState in a Class Component</Link>
                </li>
                <li>
                  <Link to="/listing413">Listing 4-13: setState() is asynchronous</Link>
                </li>
                <li>
                  <Link to="/listing414">Listing 4-14: Rendering a figure and caption</Link>
                </li>
                <li>
                  <Link to="/listing415">Listing 4-15: The FigureList component</Link>
                </li>
                <li>
                  <Link to="/listing416">Listing 4-16: Using props to pass data to a child component</Link>
                </li>
                <li>
                  <Link to="/listing417">Listing 4-17: Using props in a class component</Link>
                </li>
                <li>
                  <Link to="/listing418">Listing 4-18: A typical class component</Link>
                </li>
                <li>
                  <Link to="/listing419">Listing 4-19: A typical function component</Link>
                </li>
                <li>
                  <Link to="/listing420">Listing 4-20: Further simplifying a function component</Link>
                </li>
                <li>
                  <Link to="/listing421">Listing 4-21: Using state in functional components</Link>
                </li>
                <li>
                  <Link to="/listing422">Listing 4-22: A component made up of three child components</Link>
                </li>
                <li>
                  <Link to="/listing423">Listing 4-23: Presenting ThingsThatAreFunny</Link>
                </li>
                <li>
                  <Link to="/listing424">Listing 4-24: Passing children into a component</Link>
                </li>
                <li>
                  <Link to="/listing425">Listing 4-25: Rendering a NavBar inside of App</Link>
                </li>
                <li>
                  <Link to="/listing426">Listing 4-26: Rendering the Children using props.children</Link>
                </li>
                <li>
                  <Link to="/listing427">Listing 4-27: Cloning the Children in NavBar.js</Link>
                </li>
                <li>
                  <Link to="/listing428">Listing 4-28: Passing onClick into the parent component</Link>
                </li>
                <li>
                  <Link to="/listing429">Listing 4-29: Making use of props in a child component</Link>
                </li>
                <li>
                  <Link to="/listing430">Listing 4-30: Comparing previous and next props in shouldComponentUpdate</Link>
                </li>
                <li>
                  <Link to="/listing431">Listing 4-31: A React component with a potential memory leak</Link>
                </li>
                <li>
                  <Link to="/listing432">Listing 4-32: Toggling the rendering of the Counter</Link>
                </li>
                <li>
                  <Link to="/listing433">Listing 4-33: Fixing a memory leak</Link>
                </li>
                <li>
                  <Link to="/listing434">Listing 4-34: Using shouldComponentUpdate() and shallowCompare()</Link>
                </li>  
                <li>
                  <Link to="/listing435">Listing 4-35: Extending React.PureComponent</Link>
                </li>  
                <li>
                  <Link to="/listing436">Listing 4-36: Using React.memo</Link>
                </li>                  
              </ul>
              </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 5 - React DevTools">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
            <li>
              <Collapsible trigger="Chapter 6 - React Data Flow">
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
                  <Link to="/listing605">Listing 6-05</Link>
                </li>
                <li>
                  <Link to="/listing606">Listing 6-06</Link>
                </li>
                <li>
                  <Link to="/listing607">Listing 6-07</Link>
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
                  <Link to="/listing618">Listing 6-18</Link>
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
                  <Link to="/listing631">Listing 6-31</Link>
                </li>
                <li>
                  <Link to="/listing632">Listing 6-32</Link>
                </li>
                <li>
                  <Link to="/listing633">Listing 6-33</Link>
                </li>
                <li>
                  <Link to="/listing634">Listing 6-34</Link>
                </li>
                <li>
                  <Link to="/listing635">Listing 6-35</Link>
                </li>
                <li>
                  <Link to="/listing636">Listing 6-36</Link>
                </li>
                <li>
                  <Link to="/listing637">Listing 6-37</Link>
                </li>
                <li>
                  <Link to="/listing638">Listing 6-38</Link>
                </li>
                <li>
                  <Link to="/listing639">Listing 6-39</Link>
                </li>
                <li>
                  <Link to="/listing640">Listing 6-40</Link>
                </li>
                <li>
                  <Link to="/listing641">Listing 6-41</Link>
                </li>
                <li>
                  <Link to="/listing642">Listing 6-42</Link>
                </li>
                <li>
                  <Link to="/listing643">Listing 6-43</Link>
                </li>
                <li>
                  <Link to="/listing644">Listing 6-44</Link>
                </li>
                <li>
                  <Link to="/listing645">Listing 6-45</Link>
                </li>
                <li>
                  <Link to="/listing646">Listing 6-46</Link>
                </li>
                <li>
                  <Link to="/listing647">Listing 6-47</Link>
                </li>
                <li>
                  <Link to="/listing648">Listing 6-48</Link>
                </li>
                <li>
                  <Link to="/listing649">Listing 6-49</Link>
                </li>
                <li>
                  <Link to="/listing650">Listing 6-50</Link>
                </li>
                <li>
                  <Link to="/listing651">Listing 6-51</Link>
                </li>
                <li>
                  <Link to="/listing652">Listing 6-52</Link>
                </li>
                <li>
                  <Link to="/listing653">Listing 6-53</Link>
                </li>
                <li>
                  <Link to="/listing654">Listing 6-54</Link>
                </li>
                <li>
                  <Link to="/listing655">Listing 6-55</Link>
                </li>
                <li>
                  <Link to="/listing656">Listing 6-56</Link>
                </li>
                <li>
                  <Link to="/listing657">Listing 6-57</Link>
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
                <Collapsible trigger="Chapter 7 - Events">
                <ul>
                <li>
                  <Link to="/listing701">Listing 7-01</Link>
                </li>
                <li>
                  <Link to="/listing702">Listing 7-02</Link>
                </li>
                <li>
                  <Link to="/listing703">Listing 7-03</Link>
                </li>
                <li>
                  <Link to="/listing704">Listing 7-04</Link>
                </li>
                <li>
                  <Link to="/listing705">Listing 7-05</Link>
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
                <li>
                  <Link to="/listing710">Listing 7-10</Link>
                </li>  
                <li>
                  <Link to="/listing711">Listing 7-11</Link>
                </li>  
                <li>
                  <Link to="/listing712">Listing 7-12</Link>
                </li>  
                <li>
                  <Link to="/listing713">Listing 7-13</Link>
                </li>  
                <li>
                  <Link to="/listing714">Listing 7-14</Link>
                </li>                  
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 8 - Forms">
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
                <li>
                  <Link to="/listing808">Listing 8-08</Link>
                </li>
                <li>
                  <Link to="/listing809">Listing 8-09</Link>
                </li>
                <li>
                  <Link to="/listing810">Listing 8-10</Link>
                </li>
                <li>
                  <Link to="/listing811">Listing 8-11</Link>
                </li>
                <li>
                  <Link to="/listing812">Listing 8-12</Link>
                </li>
                <li>
                  <Link to="/listing813">Listing 8-13</Link>
                </li>
                <li>
                  <Link to="/listing814">Listing 8-14</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 9 - Refs">
                <ul>
                <li>
                  <Link to="/listing901">Listing 9-01</Link>
                </li>
                <li>
                  <Link to="/listing902">Listing 9-02</Link>
                </li>
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
                <Collapsible trigger="Chapter 10 - Styling React">
                <ul>
                <li>
                  <Link to="/listing1001">Listing 10-01</Link>
                </li>
                <li>
                  <Link to="/listing1002">Listing 10-02</Link>
                </li>
                <li>
                  <Link to="/listing1003">Listing 10-03</Link>
                </li>
                <li>
                  <Link to="/listing1004">Listing 10-04</Link>
                </li>
                <li>
                  <Link to="/listing1005">Listing 10-05</Link>
                </li>
                <li>
                  <Link to="/listing1006">Listing 10-06</Link>
                </li>
                <li>
                  <Link to="/listing1007">Listing 10-07</Link>
                </li>
                <li>
                  <Link to="/listing1008">Listing 10-08</Link>
                </li>
                <li>
                  <Link to="/listing1009">Listing 10-09</Link>
                </li>
                <li>
                  <Link to="/listing1010">Listing 10-10</Link>
                </li>
                <li>
                  <Link to="/listing1011">Listing 10-11</Link>
                </li>
                <li>
                  <Link to="/listing1012">Listing 10-12</Link>
                </li>
                <li>
                  <Link to="/listing1013">Listing 10-13</Link>
                </li>

                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 11 - Introducing Hooks">
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
                  <Link to="/listing1115">Listing 11-15</Link>
                </li>
                <li>
                  <Link to="/listing1116">Listing 11-16</Link>
                </li>
                <li>
                  <Link to="/listing1117">Listing 11-17</Link>
                </li>
                <li>
                  <Link to="/listing1118">Listing 11-18</Link>
                </li>
                <li>
                  <Link to="/listing1119">Listing 11-19</Link>
                </li>
                <li>
                  <Link to="/listing1120">Listing 11-20</Link>
                </li>
                <li>
                  <Link to="/listing1121">Listing 11-21</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 12 - Routing">
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
                  <Link to="/listing1204/login">Listing 12-04</Link>
                </li>
                <li>
                  <Link to="/listing1205/user/12">Listing 12-05</Link>
                </li>
                <li>
                  <Link to="/listing1206/user/12">Listing 12-06</Link>
                </li>
                <li>
                  <Link to="/listing1207">Listing 12-07</Link>
                </li>
                <li>
                  <Link to="/listing1208">Listing 12-08</Link>
                </li>
                <li>
                  <Link to="/listing1209">Listing 12-09</Link>
                </li>
                <li>
                  <Link to="/listing1210">Listing 12-10</Link>
                </li>
                <li>
                  <Link to="/listing1211">Listing 12-11</Link>
                </li>
                <li>
                  <Link to="/listing1212">Listing 12-12</Link>
                </li>
                <li>
                  <Link to="/listing1213">Listing 12-13</Link>
                </li>
                <li>
                  <Link to="/listing1214">Listing 12-14</Link>
                </li>
                <li>
                  <Link to="/listing1215">Listing 12-15</Link>
                </li>
                <li>
                  <Link to="/listing1216">Listing 12-16</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 13 - Error Boundaries">
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
                  <Link to="/listing1309">Listing 13-09</Link>
                </li>
                <li>
                  <Link to="/listing1310">Listing 13-10</Link>
                </li>
                <li>
                  <Link to="/listing1311">Listing 13-11</Link>
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
            <Collapsible trigger="Chapter 14 - Deploying React">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 15 - Initialize a React Project from Scratch">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
                <li>
                <Collapsible trigger="Chapter 16 - Fetching and Caching Data">
                <ul>
                <li>
                  <Link to="/listing1601">Listing 16-01</Link>
                </li>
                <li>
                  <Link to="/listing1602">Listing 16-02</Link>
                </li>
                <li>
                  <Link to="/listing1603">Listing 16-03</Link>
                </li>
                <li>
                  <Link to="/listing1604">Listing 16-04</Link>
                </li>
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
                <li>
                  <Link to="/listing1609">Listing 16-09</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 17 - Context API">
                <ul>
                <li>
                  <Link to="/listing1701">Listing 17-01</Link>
                </li>
                <li>
                  <Link to="/listing1702">Listing 17-02</Link>
                </li>
                <li>
                  <Link to="/listing1703">Listing 17-03</Link>
                </li>
                <li>
                  <Link to="/listing1704">Listing 17-04</Link>
                </li>
                <li>
                  <Link to="/listing1705">Listing 17-05</Link>
                </li>
                <li>
                  <Link to="/listing1706">Listing 17-06</Link>
                </li>
                <li>
                  <Link to="/listing1707">Listing 17-07</Link>
                </li>
                <li>
                  <Link to="/listing1708">Listing 17-08</Link>
                </li>
                <li>
                  <Link to="/listing1709">Listing 17-09</Link>
                </li>
                <li>
                  <Link to="/listing1710">Listing 17-10</Link>
                </li>
                <li>
                  <Link to="/listing1711">Listing 17-11</Link>
                </li>
                <li>
                  <Link to="/listing1712">Listing 17-12</Link>
                </li>
                <li>
                  <Link to="/listing1713">Listing 17-13</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
                <Collapsible trigger="Chapter 18 - React Portals">
                <ul>
                <li>
                  <Link to="/listing1801">Listing 18-01</Link>
                </li>
                <li>
                  <Link to="/listing1802">Listing 18-02</Link>
                </li>
                <li>
                  <Link to="/listing1803">Listing 18-03</Link>
                </li>
                <li>
                  <Link to="/listing1804">Listing 18-04</Link>
                </li>
                <li>
                  <Link to="/listing1805">Listing 18-05</Link>
                </li>
                <li>
                  <Link to="/listing1806">Listing 18-06</Link>
                </li>
                <li>
                  <Link to="/listing1807">Listing 18-07</Link>
                </li>
                </ul>
                </Collapsible>
                </li>
                <li>
            <Collapsible trigger="Chapter 19 - Accessibility in React">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
            <li>
            <Collapsible trigger="Chapter 20 - Going Further">
              <ul>
                <li>No Code Listings</li>
              </ul>
            </Collapsible>
            </li>
                <li>
                {/* <Collapsible trigger="Chapter 19">
                <ul>
                <li>
                  <Link to="/listing1901">Listing 19-01</Link>
                </li>
                <li>
                  <Link to="/listing1902">Listing 19-02</Link>
                </li>
                <li>
                  <Link to="/listing1903">Listing 19-03</Link>
                </li>
                <li>
                  <Link to="/listing1904">Listing 19-04</Link>
                </li>
                <li>
                  <Link to="/listing1905">Listing 19-05</Link>
                </li>
                <li>
                  <Link to="/listing1906">Listing 19-06</Link>
                </li>
                <li>
                  <Link to="/listing1907">Listing 19-07</Link>
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
                </Collapsible> */}
                </li>
          </ul>
        </nav>
        <main>
          <h1>React JS Foundations Building User Interfaces with ReactJS: An Approachable Guide</h1>
          <p>by Chris Minnick</p>

        {routes}
      </main>
      </div>
  );
}

export default App;
