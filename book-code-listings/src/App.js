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
                  <Link to="/listing406">Listing 4-06</Link>
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
                  <Link to="/listing416">Listing 4-16</Link>
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
                  <Link to="/listing426">Listing 4-26</Link>
                </li>
                <li>
                  <Link to="/listing427">Listing 4-27</Link>
                </li>
                <li>
                  <Link to="/listing428">Listing 4-28</Link>
                </li>
                <li>
                  <Link to="/listing429">Listing 4-29</Link>
                </li>
                <li>
                  <Link to="/listing430">Listing 4-30</Link>
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
                <Collapsible trigger="Chapter 7">
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
                <Collapsible trigger="Chapter 9">
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
                <Collapsible trigger="Chapter 10">
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
                <li>
                  <Link to="/listing1014">Listing 10-14</Link>
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
          <>
            <h2>Listing 4-1: Components Define Elements</h2>
            <Chapter04.WelcomeMessage />
          </>
          </Route>
          <Route path="/listing402">
          <>
            <h2>Listing 4-2: Components can be imported into other components</h2>
            <Chapter04.WelcomeTitle />
          </>
          </Route>
          <Route path="/listing403">
          <>
            <h2>Listing 4-3: Using components to reduce complexity</h2>
            <Chapter04.Cart />
          </>
          </Route>
          <Route path="/listing404">
          <>
            <h2>Listing 4-4: Putting everything in one component</h2>
            <Chapter04.SingleComponentCart />
          </>
          </Route>
          <Route path="/listing405">
          <>
            <h2>Listing 4-5: Passing props</h2>
            <Chapter04.Farms />
          </>
          </Route>
          <Route path="/listing406">
          <>
            <h2>Listing 4-6: Using props inside a component</h2>
            <Chapter04.Farm farmer="Old McDonald" animals={['pigs','cows','chickens']} />
          </>
          </Route>
          <Route path="/listing407">
          <>
            <h2>Listing 4-7: An improved version of the Farm component</h2>
            <Chapter04.ImprovedFarms />
          </>
          </Route>
          <Route path="/listing408">
          <>
          <h2>Listing 4-8: Creating a Component with React.createClass</h2>
            <Chapter04.CreateReactClass />
          </>
          </Route>
          <Route path="/listing409">
          <>
            <h2>Listing 4-9: Creating a Component Using a Class</h2>
            <Chapter04.ReactClassComponent />
          </>
          </Route>
          <Route path="/listing410">
          <>
            <h2>Listing 4-10: Not binding your functions results in errors</h2>
            <Chapter04.UnboundFunction />
          </>
          </Route>    
          <Route path="/listing411">
          <>
            <h2>Listing 4-11: Binding a function and using it in another class</h2>
            <Chapter04.BoundFunction />
          </>
          </Route>                  
          <Route path="/listing412">
          <>
            <h2>Listing 4-12: Using state and setState in a Class Component</h2>
            <Chapter04.ClassComponentState />
          </>
          </Route>
          <Route path="/listing413">
          <>
            <h2>Listing 4-13: setState() is asynchronous</h2>
            <Chapter04.SetStateAsync />
          </>
          </Route>
          <Route path="/listing414">
          <>
            <h2>Listing 4-14: Rendering a figure and caption</h2>
            <Chapter04.BasicFigure />
          </>
          </Route>
          <Route path="/listing415">
          <>
            <h2>Listing 4-15: The FigureList component</h2>
            <Chapter04.FigureList />
          </>
          </Route>
          <Route path="/listing416">
          <>
            <h2>Listing 4-16: Using props to pass data to a child component</h2>
            <Chapter04.FigureListProps />
          </>
          </Route>
          <Route path="/listing417">
          <>
            <h2>Listing 4-17: Using props in a class component</h2>
            <Chapter04.BasicFigureProps filename="images/chickens.png" caption="Lefty and Ginger" />
          </>
          </Route>
          <Route path="/listing418">
          <>
            <h2>Listing 4-18: A typical class component</h2>
            <Chapter04.ToDoClass />
          </>
          </Route>
          <Route path="/listing419">
          <>
            <h2>Listing 4-19: A typical function component</h2>
            <Chapter04.ToDoFunction />
          </>
          </Route>
          <Route path="/listing420">
          <>
            <h2>Listing 4-20: Further simplifying a function component</h2>
            <Chapter04.ToDoFunctionSimple />
          </>
          </Route>
          <Route path="/listing421">
          <>
            <h2>Listing 4-21: Using state in functional components</h2>
            <Chapter04.Counter />
          </>
          </Route>
          <Route path="/listing422">
          <>
            <h2>Listing 4-22: A component made up of three child components</h2>
            <Chapter04.LoginForm />
          </>
          </Route>
          <Route path="/listing423">
          <>
            <h2>Listing 4-23: Presenting ThingsThatAreFunny</h2>
            <Chapter04.ThingsThatAreFunny />
          </>
          </Route>
          <Route path="/listing424">
          <>
            <h2>Listing 4-24: Passing children into a component</h2>
            <Chapter04.ThingsThatILike />
          </>
          </Route>
          <Route path="/listing425">
          <>
            <h2>Listing 4-25: Rendering a NavBar inside of App</h2>
            <Chapter04.CloneElementExample />
          </>
          </Route>
          <Route path="/listing426">
          <>
            <h2>Listing 4-26: Rendering the Children using props.children</h2>
            <Chapter04.NavBarChildren />
          </>
          </Route>
          <Route path="/listing427">
          <>
            <h2>Listing 4-27: Cloning the Children in NavBar.js</h2>
            <Chapter04.NavBarCloneChildren />
          </>
          </Route>
          <Route path="/listing428">
          <>
            <h2>Listing 4-28: Passing onClick into the parent component</h2>
            <Chapter04.NavBarPassingOnClick />
          </>
          </Route>
          <Route path="/listing429">
          <>
            <h2>Listing 4-29: Making use of props in a child component</h2>
            <Chapter04.NavBarUsingOnClick />
          </>
          </Route>
          <Route path="/listing430">
          <>
            <h2>Listing 4-30: Comparing previous and next props in shouldComponentUpdate</h2>
            <pre>
{`class ToDoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isChecked != this.props.isChecked;
    }
    ...
}
`}
            </pre>
          </>
          </Route>
          <Route path="/listing431">
          <>
            <h2>Listing 4-31: A React component with a potential memory leak</h2>
            <Chapter04.LeakyCounter />
          </>
          </Route>
          <Route path="/listing432">
          <>
            <h2>Listing 4-32: Toggling the rendering of the Counter</h2>
            <Chapter04.CounterController />
          </>
          </Route>
          <Route path="/listing433">
          <>
            <h2>Listing 4-33: Fixing a memory leak</h2>
            <Chapter04.NoLeakCounterController />
          </>
          </Route>
          <Route path="/listing434">
          <>
            <h2>Listing 4-34: Using shouldComponentUpdate() and shallowCompare()</h2>
            <Chapter04.ShallowCompare />
          </>
          </Route>
          <Route path="/listing435">
          <>
            <h2>Listing 4-35: Extending React.PureComponent</h2>
            <Chapter04.PureComponent />
          </>
          </Route>
          <Route path="/listing436">
          <>
            <h2>Listing 4-36: Using React.memo</h2>
            <Chapter04.ReactMemoExample />
          </>
          </Route>
          <Route path="/listing601">
          <>
            <h2>Listing 6-1: Changing local variables doesn't update the view</h2>
            <Chapter06.Mutato />
          </>
          </Route>
          <Route path="/listing602">
          <>
            <h2>Listing 6-2: A Component That Uses a String Prop</h2>
            <Chapter06.WelcomeMessageProps firstName='Jimmy' />
          </>
          </Route>
          <Route path="/listing603">
          <>
            <h2>Listing 6-3: Validating That a Prop is a String</h2>
            <Chapter06.WelcomeMessageProps firstName='Test' />
          </>
          </Route>
          <Route path="/listing604">
          <>
            <h2>Listing 6-4: PropTypes Inside a Component's Body</h2>
            <Chapter06.WelcomeClass firstName={'frank'} />
          </>
          </Route>
          <Route path="/listing605">
          <>
            <h2>Listing 6-5: Putting PropTypes Outside the Class Body</h2>
<pre>{`import PropTypes from 'prop-types';
import {Component} from 'react';

class WelcomeMessage extends Component {

  render(){
    return(<h1>Welcome, {this.props.firstName}!</h1>);
  }
}

WelcomeMessage.propTypes = {
  firstName: PropTypes.string
}

export default WelcomeMessage;
`}</pre>
          </>
          </Route>
          <Route path="/listing606">
          <>
            <h2>Listing 6-6: Using PropTypes with a Function Component</h2>
<pre>
{`import PropTypes from 'prop-types';

function MyComponent(props){
  return (<p>The value is {props.itemValue}</p>);
}

MyComponent.propTypes = {
  itemValue: PropTypes.number
}

export default MyComponent;
`}</pre>
          </>
          </Route>
          <Route path="/listing607">
          <>
            <h2>Listing 6-7: Appending the isRequired Validator</h2>
<pre>
{`MyComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  middleName: PropTypes.string,
  lastName: PropTypes.string.isRequired
}
`}</pre>
          </>
          </Route>
          <Route path="/listing608">
          <>
          <h2>Listing 6-8: Trying to render a non-node value</h2>
            <p>Uncomment the SiteLink element in App.js to see the error from passing an object to the SiteLink component.</p>
            {/* <Chapter06.SiteLink url="http://example.com" linkName={{name:'Example'}} /> */}
          </>
          </Route>
          <Route path="/listing609">
          <>
            <h2>Listing 6-9: Using PropTypes.node</h2>
            <Chapter06.SiteLinkNode url="http://example.com" linkName="Example" />
          </>
          </Route>
          <Route path="/listing610">
          <>
            <h2>Listing 6-10: Validating React Elements</h2>
            <Chapter06.BorderBox>
                <p>The first paragraph</p>
                <p>The second paragraph</p>
            </Chapter06.BorderBox>
          </>
          </Route>
          <Route path="/listing611">
            <>
            <h2>Listing 6-11: Using the elementType Validator</h2>
          
            <pre>
{`FamilyTree.propTypes = {
  pet: PropTypes.elementType
}
`}
            </pre>
            </>
          </Route>
          <Route path="/listing612">
          <>
            <h2>Listing 6-12: Validating that a prop is an instance of a class</h2>
            <Chapter06.FamilyTree father={new Chapter06.Person("Patrick")} /> {/* propType validates */}
            {/* <Chapter06.FamilyTree father={"Patrick"} /> propType doesn't validate */}
          </>
          </Route>
          <Route path="/listing613">
          <>
            <h2>Listing 6-13: Using PropTypes.oneOf</h2>
            <Chapter06.DisplayPrimaryColors primaryColor = "red" />
          </>
          </Route>
          <Route path="/listing614">
            <>
            <h2>Listing 6-14: Using a Custom validator to test for a phone number</h2>
            <Chapter06.Contact fullName="Chris Minnick" phone="5555555555" />
            <Chapter06.Contact fullName="John Doe" phone="5555" />
            </>
          </Route>
          <Route path="/listing615">
            <>
            <h2>Listing 6-15: A component without default props</h2>
            <Chapter06.StoresNearYou latitude="37.3230" longitude="122.0322" />
            </>
          </Route>
          <Route path="/listing616">
            <>
            <h2>Listing 6-16: Setting defaults with the || Operator</h2>
            <Chapter06.StoresNearYou1 />
            </>
          </Route>
          <Route path="/listing617">
            <>
            <h2>Listing 6-17: Destructuring props and setting defaults</h2>
            <Chapter06.StoresNearYou2 />
            </>
          </Route>
          <Route path="/listing618">
            <>
            <h2>Listing 6-18: Setting defaultProps as a static property</h2>
            <Chapter06.StoresNearYou3 />
            </>
          </Route>
          <Route path="/listing619">
            <>
            <h2>Listing 6-19: Setting defaultProps outside of the component body</h2>
            <Chapter06.StoresNearYou4 />
            </>
          </Route>
          <Route path="/listing620">
            <>
            <h2>Listing 6-20: Setting defaultProps for a function component</h2>
            <Chapter06.StoresNearYou5 />
            </>
          </Route>
          <Route path="/listing621">
            <>
            <h2>Listing 6-21: Initializing State in a Class Component</h2>
            <Chapter06.NewsFeed />
            </>
          </Route>
          
          <Route path="/listing622">
            <>
            <h2>Listing 6-22: Initializing state using the class property</h2>
            <Chapter06.NewsFeed2 />
            </>
          </Route>
          <Route path="/listing623">
            <>
            <h2>Listing 6-23: Initializing State in a Function Component</h2>
            <Chapter06.NewsFeed3 />
            </>
          </Route>
          <Route path="/listing624">
            <>
            <h2>Listing 6-24: Another Approach to Initializing State in a Function Component</h2>
            <Chapter06.NewsFeed4 />
            </>
          </Route>
          <Route path="/listing625">
            <>
            <h2>Listing 6-25: Using setState</h2>
            <Chapter06.CounterClass />
            </>
          </Route>
          <Route path="/listing626">
            <>
            <h2>Listing 6-26: Using setState with Multiple State Properties</h2>
            <Chapter06.CounterClass2 />
            </>
          </Route>
          <Route path="/listing627">
            <>
            <h2>Listing 6-27: Demonstrating setState's asychronous nature</h2>
            <Chapter06.CounterClass3 />
            </>
          </Route>
          <Route path="/listing628">
            <>
            <h2>Listing 6-28: Using the updater function with setState</h2>
            <Chapter06.CounterClass4 />
            </>
          </Route>
          <Route path="/listing629">
            <>
            <h2>Listing 6-29: The Static Version of the App Component</h2>
            <pre>
{`import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  return(
      <div>
          <InputForm />
          <FilterSelect />
          <RemindersList />
      </div>
  );
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing630">
            <>
            <h2>Listing 6-30: A Shell Component for InputForm</h2>
            <pre>
{`function InputForm(props){
  return(
    <div>Input form here</div>
  );
}
export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing631">
            <>
            <h2>Listing 6-31: A Shell Component for FilterSelect</h2>
            <pre>
{`function FilterSelect(props){
  return(
      <div>Filter the List</div>
  );
}
export default FilterSelect;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing632">
            <>
            <h2>Listing 6-32: A Shell Component for RemindersList</h2>
            <pre>
              {`function RemindersList(props){
  return(
      <div>Reminders List</div>
  );
}
export default RemindersList;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing633">
            <>
            <h2>Listing 6-33: A Shell Component for Reminder</h2>
            <pre>
              {`function Reminder(props){
  return(
      <div>Reminder</div>
  );
}
export default Reminder;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing634">
            <>
            <h2>Listing 6-34: RemindersList with Reminder Imported</h2>
            <pre>
              {`import Reminder from './Reminder';

function RemindersList(props){
  return(
    <div>
      <Reminder />
      <Reminder />
      <Reminder />
    </div>
  );
}
export default RemindersList;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing635">
            <>
            <h2>Listing 6-35: Round Two of InputForm</h2>
            <pre>
              {`function InputForm(props){
  return(
    <form>
      <input id="reminderText" type="text" placeholder="What do you want to do?" />
      <input id="dueDate" type="date" />
      <button>Add Item</button>
    </form>
  );
}
export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing636">
            <>
            <h2>Listing 6-36: Round Two of FilterSelect</h2>
            <pre>
              {`function FilterSelect(props){
  return(
    <label htmlFor="filterReminders">Show tasks due: 
      <select id="filterReminders" value="2day">
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 Week</option>
        <option value="30days">within 30 Days</option>
        <option value="all">any time</option>
      </select>
    </label>
  );
}
export default FilterSelect;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing637">
            <>
            <h2>Listing 6-37: Round Two of RemindersList</h2>
            <pre>
              {`import Reminder from './Reminder';

function RemindersList(props){
  return(
    <div>
      <Reminder reminderText="Pick up Wesley" dueDate="2364-01-15" isComplete={false} />
      <Reminder reminderText="Meet with Jean-Luc" dueDate="2364-01-29" isComplete={false} />
      <Reminder reminderText="Holodeck time!" dueDate="2364-06-01" isComplete={false} />
    </div>
  );
}
export default RemindersList;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing638">
            <>
            <h2>Listing 6-38: Round Two of Reminder</h2>
            <pre>
              {`function Reminder(props){
  return(
    <div>item: {props.reminderText} 
         due date: {props.dueDate} 
         Completed?: {String(props.isComplete)}
    </div>
  );
}
export default Reminder;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing639">
            <>
            <h2>Listing 6-39: App with Lifted State</h2>
            <pre>
              {`import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState();
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");

  return(
    <div>
      <InputForm userInput={userInput} 
                 setUserInput={setUserInput} />
      <FilterSelect selectedFilter={selectedFilter} 
                    setSelectedFilter={setSelectedFilter} />
      <RemindersList reminders={reminders} />
    </div>
  );
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing640">
            <>
            <h2>Listing 6-40: Pure InputForm</h2>
            <pre>
              {`function InputForm(props){
  return(
    <form>
      <input value={props.userInput.reminderText} 
             id="reminderText" 
             type="text" 
             placeholder="What do you want to do?" />
      <input value={props.userInput.dueDate}
             id="dueDate" 
             type="date" />
      <button>Add Item</button>
    </form>
  );
}
export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing641">
            <>
            <h2>Listing 6-41: Pure FilterSelect</h2>
            <pre>
            {`function FilterSelect(props){
  return(
    <label htmlFor="filterReminders">Show tasks due: 
      <select id="filterReminders" value={props.selectedFilter}>
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 Week</option>
        <option value="30days">within 30 Days</option>
        <option value="all">any time</option>
      </select>
    </label>
  );
}
export default FilterSelect;
`}</pre>
            </>
          </Route>
          <Route path="/Listing642">
            <>
            <h2>Listing 6-42: Pure RemindersList</h2>
            <pre>
              {`import Reminder from './Reminder';

function RemindersList(props){

  const reminders = props.reminders.map((reminder,index)=>{
    return (<Reminder reminderText={reminder.reminderText} 
                      dueDate={reminder.dueDate} 
                      isComplete={reminder.isComplete}
                      id={index}
                      key={index} />);
  });

  return(
      <div>
        {reminders}
      </div>
  );
}
export default RemindersList;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing643">
            <>
            <h2>Listing 6-43: Adding PropTypes and Default Values to InputForm</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function InputForm(props){
  return(
      <form>
        <input value={props.userInput.reminderText} 
               id="reminderText" 
               type="text" 
               placeholder="What do you want to do?" />
        <input value={props.userInput.dueDate}
               id="dueDate" 
               type="date" />
        <button>Add Item</button>
      </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string
  }),
  setUserInput: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

InputForm.defaultProps = {
  userInput: {
    reminderText:"",
    dueDate:formattedDate
  }
}

export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing644">
            <>
            <h2>Listing 6-44: RemindersList with Default Props and PropTypes</h2>
            <pre>
              {`import PropTypes from 'prop-types';
import Reminder from './Reminder';

function RemindersList(props){

  const reminders = props.reminders.map((reminder,index)=>{
    return (<Reminder reminderText={reminder.reminderText} 
                      dueDate={reminder.dueDate}
                      isComplete={reminder.isComplete}
                      id={index} 
                      key={index} />);
  });

  return(
      <div>
        {reminders}
      </div>
  );
}

RemindersList.propTypes = {
  reminders: PropTypes.array
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

RemindersList.defaultProps = {
  reminders: [{
    reminderText:"No Reminders Yet",
    dueDate:formattedDate,
    isComplete: false
  }]
}

export default RemindersList;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing645">
            <>
            <h2>Listing 6-45: Validating and Setting Defaults for FilterSelect</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function FilterSelect(props){
  return(
    <label htmlFor="filterReminders">Show tasks due: 
      <select id="filterReminders" value={props.selectedFilter}>
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 Week</option>
        <option value="30days">within 30 days</option>
        <option value="all">any time</option>
      </select>
    </label>
  );
}

FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func
}

FilterSelect.defaultProps = {
  selectedFilter:'all'
}

export default FilterSelect;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing646">
            <>
            <h2>Listing 6-46: Reminder with PropTypes and defaultProps</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function Reminder(props){
    return(
        <div>item: {props.reminderText} 
             due date: {props.dueDate} 
             Completed?: {String(props.isComplete)}</div>
    );
  }
  
Reminder.propTypes = {
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
    isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

Reminder.defaultProps = {
    reminderText:"No Reminder Set",
    dueDate:formattedDate,
    isComplete: false
}

export default Reminder; 
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing647">
            <>
            <h2>Listing 6-47: The InputForm component with event handlers and event listeners</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function InputForm(props){
  const handleTextChange = (e)=>{
    const newUserInput = {...props.userInput,reminderText:e.target.value}
    props.setUserInput(newUserInput);
  }
    
  const handleDateChange = (e)=>{
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().substr(0,10);
    const newUserInput = {...props.userInput,dueDate:formattedDate};
    props.setUserInput(newUserInput);
  }
    
  const handleClick = (e)=>{
    e.preventDefault();
    const itemToAdd = {...props.userInput,status:false};
    props.addNewReminder(itemToAdd);
  };
    

  return(
    <form>
      <input value={props.userInput.reminderText} 
             id="reminderText" 
             type="text" 
             placeholder="What do you want to do?" 
             onChange={handleTextChange} />

      <input value={props.userInput.dueDate}
             id="dueDate"
             type="date" 
             onChange={handleDateChange} />

      <button onClick={handleClick}>Add Item</button>
    </form>
  );
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

InputForm.defaultProps = {
  userInput: {
    reminderText:"",
    dueDate:formattedDate
  }
}

export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing648">
            <>
            <h2>Listing 6-48: Creating a New filteredReminders Array</h2>
            <pre>
              {`import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState();
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");
    
  const addNewReminder = (itemToAdd) => {
    if (reminders===undefined){
      setReminders([itemToAdd]);
    } else {
      setReminders([...reminders,itemToAdd]);
    }
  }  
  
  const filteredList = reminders?[...reminders]:undefined;
  
  return(
    <div>
      <InputForm userInput={userInput} 
                 setUserInput={setUserInput}
                 addNewReminder={addNewReminder} />
      <FilterSelect selectedFilter={selectedFilter} 
                    setSelectedFilter={setSelectedFilter} />
      <RemindersList reminders={filteredList} />
    </div>
  );
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing649">
            <>
            <h2>Listing 6-49: Filtering the Reminders List</h2>
            <pre>
              {`function filterList(reminders,selectedFilter){
      if (selectedFilter === "all"){
          return reminders;
      } else {

      let numberOfDays;

      switch(selectedFilter){
            case "2day":
              numberOfDays = 2;
              break;
            case "1week":
              numberOfDays = 7;
              break;
            case "30days":
              numberOfDays = 30;
              break;
            default:
              numberOfDays = 0;
              break;
      }

      const result = reminders.filter(reminder=>{
          const todaysDate = new Date().toISOString().substr(0,10);
          const todayTime = new Date(todaysDate).getTime();
          const dueTime = new Date(reminder.dueDate).getTime();
          return dueTime < (todayTime + (numberOfDays * 86400000));
      });
      return result;
    }
  }
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing650">
            <>
            <h2>Listing 6-50: Implementing the filterList Function</h2>
            <pre>
              {`import {useState} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

function App(){
  const [reminders,setReminders] = useState();
  const [userInput,setUserInput] = useState();
  const [selectedFilter,setSelectedFilter] = useState("all");
    
  const addNewReminder = (itemToAdd) => {
    if (reminders===undefined){
      setReminders([itemToAdd]);
    } else {
      setReminders([...reminders,itemToAdd]);
    }
  }  
  
  const filteredList = filterList(reminders,selectedFilter);

  function filterList(reminders,selectedFilter){
    if (selectedFilter === "all"){
        return reminders;
    } else {

    let numberOfDays;

    switch(selectedFilter){
          case "2day":
            numberOfDays = 2;
            break;
          case "1week":
            numberOfDays = 7;
            break;
          case "30days":
            numberOfDays = 30;
            break;
          default:
            numberOfDays = 0;
            break;
    }

    const result = reminders.filter(reminder=>{
        const todaysDate = new Date().toISOString().substr(0,10);
        const todayTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todayTime + (numberOfDays * 86400000));
    });
    return result;
    }
  }
  return(
    <div>
      <InputForm userInput={userInput} 
                 setUserInput={setUserInput}
                 addNewReminder={addNewReminder} />
      <FilterSelect selectedFilter={selectedFilter} 
                    setSelectedFilter={setSelectedFilter} />
      <RemindersList reminders={filteredList} />
    </div>
  );
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing651">
            <>
            <h2>Listing 6-51: FilterSelect with an event handler and event listener</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function FilterSelect(props){

function handleChange(e){
  props.setSelectedFilter(e.target.value);
}

return(
  <label htmlFor="filterReminders">Show tasks due: 
    <select id="filterReminders" value={props.selectedFilter} onChange={handleChange}>
      <option value="2day">within 2 Days</option>
      <option value="1week">within 1 Week</option>
      <option value="30days">within 30 days</option>
      <option value="all">any time</option>
    </select>
  </label>
  );
}

FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func
}

FilterSelect.defaultProps = {
  selectedFilter:'all'
}

export default FilterSelect;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing652">
            <>
            <h2>Listing 6-52: Reminder with the checkbox</h2>
            <pre>
              {`import PropTypes from 'prop-types';

function Reminder(props){
  function handleChange(){
    props.setIsComplete(!props.isComplete,props.id);
  }
  
  return(
    <div className="item">item: {props.reminderText}
      <span className="due-date">due date: {props.dueDate}</span>
      <span className="is-complete">
          Completed?: <input type="checkbox" 
                         checked={props.isComplete} 
                         onChange={handleChange} /></span>
    </div>
    );
  }
  
Reminder.propTypes = {
  reminderText: PropTypes.string,
  dueDate: PropTypes.string,
  isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

Reminder.defaultProps = {
  reminderText:"No Reminder Set",
  dueDate:formattedDate,
  isComplete: false
}

export default Reminder; 
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing653">
            <>
            <h2>Listing 6-53: Initializing State in App</h2>
            <pre>
              {`import {Component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminders:undefined,
      userInput:undefined,
      selectedFilter:"all"
    }
  }
  render(){
    return();
  }
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing654">
            <>
            <h2>Listing 6-54: Copying and Modifying JSX in App</h2>
            <pre>
              {`import {Component} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminders:undefined,
      userInput:undefined,
      selectedFilter:"all"
    }
  }
  render(){
    return(
      <div>
        <InputForm userInput={this.state.userInput} 
                   setUserInput={this.setUserInput}
                   addNewReminder={this.addNewReminder} />
        <FilterSelect selectedFilter={this.state.selectedFilter} 
                      setSelectedFilter={this.setSelectedFilter} />
        <RemindersList reminders={filteredList} setIsComplete={this.setIsComplete} />
      </div>
    );
  }
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing655">
            <>
            <h2>Listing 6-55: Adding Methods and Binding Them to App</h2>
            <pre>
              {`import {Component} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminders:undefined,
      userInput:undefined,
      selectedFilter:"all"
    }
    this.setUserInput = this.setUserInput.bind(this);
    this.setSelectedFilter = this.setSelectedFilter.bind(this);
    this.addNewReminder = this.addNewReminder.bind(this);
    this.setIsComplete = this.setIsComplete.bind(this);
  }

  setUserInput(newInput){
    this.setState({userInput:newInput});
  }
  
  setSelectedFilter(newFilter){
    this.setState({selectedFilter:newFilter});
  }

  addNewReminder(itemToAdd) {
    if (this.state.reminders===undefined){
      this.setState({reminders:[itemToAdd]});
    } else {
      this.setState((current)=>{
        return (
          {
            reminders:[...current.reminders,itemToAdd]
          }
          )
      });    
    }
  }  

  setIsComplete(isComplete,index){
    const newReminders = [ ...this.state.reminders.slice(0, index),
                     {...this.state.reminders[index],isComplete}, 
                     ...this.state.reminders.slice(index+1) ];
    this.setState({reminders:newReminders});
  }

  render(){
    return(
      <div>
        <InputForm userInput={this.state.userInput} 
                   setUserInput={this.setUserInput}
                   addNewReminder={this.addNewReminder} />
        <FilterSelect selectedFilter={this.state.selectedFilter} 
                      setSelectedFilter={this.setSelectedFilter} />
        <RemindersList reminders={filteredList} setIsComplete={this.setIsComplete} />
      </div>
    );
  }
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing656">
            <>
            <h2>Listing 6-56: The Converted App Component</h2>
            <pre>
              {`import {Component} from 'react';
import InputForm from './InputForm';
import FilterSelect from './FilterSelect';
import RemindersList from './RemindersList';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      reminders:undefined,
      userInput:undefined,
      selectedFilter:"all"
    }
    this.setUserInput = this.setUserInput.bind(this);
    this.setSelectedFilter = this.setSelectedFilter.bind(this);
    this.addNewReminder = this.addNewReminder.bind(this);
    this.setIsComplete = this.setIsComplete.bind(this);
  }

  setUserInput(newInput){
    this.setState({userInput:newInput});
  }

  setSelectedFilter(newFilter){
    this.setState({selectedFilter:newFilter});
  }
  
  addNewReminder(itemToAdd) {
    if (this.state.reminders===undefined){
      this.setState({reminders:[itemToAdd]});
    } else {
      this.setState((current)=>{
        return (
          {
            reminders:[...current.reminders,itemToAdd]
          }
          )
      });    
    }
  }  
  
  setIsComplete(isComplete,index){
    const newReminders = [ ...this.state.reminders.slice(0, index),
                     {...this.state.reminders[index],isComplete}, 
                     ...this.state.reminders.slice(index+1) ];
    this.setState({reminders:newReminders});
  }

  filterList(reminders,selectedFilter){
    if (selectedFilter === "all"){
        return reminders;
    } else {

    let numberOfDays;

    switch(selectedFilter){
          case "2day":
            numberOfDays = 2;
            break;
          case "1week":
            numberOfDays = 7;
            break;
          case "30days":
            numberOfDays = 30;
            break;
          default:
            numberOfDays = 0;
            break;
    }

    const result = this.state.reminders.filter(reminder=>{
        const todaysDate = new Date().toISOString().substr(0,10);
        const todayTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < (todayTime + (numberOfDays * 86400000));
    });

    return result;
    }
  }
  render(){
    const filteredList = this.filterList(this.state.reminders,this.state.selectedFilter);

    return(
      <div>
        <InputForm userInput={this.state.userInput} 
                   setUserInput={this.setUserInput}
                   addNewReminder={this.addNewReminder} />
        <FilterSelect selectedFilter={this.state.selectedFilter} 
                      setSelectedFilter={this.setSelectedFilter} />
        <RemindersList reminders={filteredList} setIsComplete={this.setIsComplete} />
      </div>
    );
  }
}

export default App;
`}
            </pre>
            </>
          </Route>
          <Route path="/Listing657">
            <>
            <h2>Listing 6-57: The converted InputForm component</h2>
            <pre>
              {`import {Component} from 'react';
import PropTypes from 'prop-types';

class InputForm extends Component {

  render(){ 

    const handleTextChange=(e)=>{
      const newUserInput = {...this.props.userInput,reminderText:e.target.value}
      this.props.setUserInput(newUserInput);
    }
    
    const handleDateChange=(e)=>{
      const date = new Date(e.target.value);
      const formattedDate = date.toISOString().substr(0,10);
      const newUserInput = {...this.props.userInput,dueDate:formattedDate};
      this.props.setUserInput(newUserInput);
    }
        
    const handleClick=(e)=>{
      e.preventDefault();
      const itemToAdd = {...this.props.userInput,isComplete:false};
      this.props.addNewReminder(itemToAdd);
    }
    return(
          <form>
              <input value={this.props.userInput.reminderText} 
                  id="reminderText" 
                  type="text" 
                  placeholder="What do you want to do?" 
                  onChange={handleTextChange} />
  
              <input value={this.props.userInput.dueDate}
                  id="dueDate"
                  type="date" 
                  onChange={handleDateChange} />
  
              <button onClick={handleClick}>Add Item</button>
        </form>
    );
  }
  
}

InputForm.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

InputForm.defaultProps = {
  userInput: {
    reminderText:"",
    dueDate:formattedDate
  }
}

export default InputForm;
`}
            </pre>
            </>
          </Route>
          <Route path="/Reminders">
            <Chapter06.Reminders />
          </Route>
          <Route path="/RemindersClass">
            <Chapter06.RemindersClass />
          </Route>
          <Route path="/listing701">
            <>
            <h2>Listing 7-1: Using an event attribute in HTML</h2>
            <pre>
              {`<form id="signup-form" onsubmit="validate()">
  <input type="text" id="email">
  <input type="text" id="fullname">
  <input type="submit">
</form>
`}
            </pre>
            </>
          </Route>
          <Route path="/listing702">
            <>
            <h2>Listing 7-2: Using addEventListener</h2>
            <pre>
              {`<html>
  <head>
    <script>
      function validate(e){
        //do something here
      }
    </script>
  </head>
  <body>
    <form id="signup-form">
      <input type="text" id="email">
      <input type="text" id="fullname">
      <input type="submit">
    </form>
  <script>
    document.getElementById("signup-form").addEventListener("submit",validate);
  </script>
</html>
`}
            </pre>
            </>
          </Route>
          <Route path="/listing703">
            <>
            <h2>Listing 7-3: Setting an event listener in a React component</h2>
            <Chapter07.MyForm />
            </>
          </Route>
          <Route path="/listing704">
            <>
            <h2>Listing 7-4: Viewing the properties of the Event object</h2>
            <Chapter07.EventProps />
            </>
          </Route>
          <Route path="/listing705">
            <>
            <h2>Listing 7-5: Using an inline event handler to show an alert</h2>
            <Chapter07.WarningButton />
            </>
          </Route>
          <Route path="/listing706">
            <>
            <h2>Listing 7-6: Using an inline event handler to call setState()</h2>
            <Chapter07.ScreenDoor />
            </>
          </Route>
          <Route path="/listing707">
            <>
            <h2>Listing 7-7: Using an event handler function in a function component</h2>
            <Chapter07.SearchTerm />
            </>
          </Route>
          <Route path="/listing708">
            <>
            <h2>Listing 7-8: Writing and binding an event handler method in a class</h2>
            <Chapter07.CoffeeMachine />
            </>
          </Route>
          <Route path="/listing709">
            <>
            <h2>Listing 7-9: Binding a function in the constructor</h2>
            <Chapter07.ColorWheel />
            </>
          </Route>
          <Route path="/listing710">
            <>
            <h2>Listing 7-10: Binding an event handler inline</h2>
            <Chapter07.ColorWheel2 />
            </>
          </Route>
          <Route path="/listing711">
            <>
            <h2>Listing 7-11: Using an arrow function as an event handler</h2>
            <Chapter07.ColorWheel3 />
            </>
          </Route>
          <Route path="/listing712">
            <>
            <h2>Listing 7-12: Defining state using a class property</h2>
            <Chapter07.ColorWheel4 />
            </>
          </Route>
          <Route path="/listing713">
            <>
            <h2>Listing 7-13: The Event object is passed automatically</h2>
            <Chapter07.EventObject />
            </>
          </Route>
          <Route path="/listing714">
            <>
            <h2>Listing 7-14: Passing the Event object to the event handler</h2>
            <Chapter07.EventObject2 />
            </>
          </Route>
          <Route path="/listing801">
            <>
            <h2>Listing 8-1: Omiting the value attribute creates an uncontrolled input</h2>
            <Chapter08.UncontrolledInput />
            </>
          </Route>
          <Route path="/listing802">
            <>
            <h2>Listing 8-2: Adding the value attribute creates a controlled input</h2>
            <Chapter08.ControlledInput />
            </>
          </Route>
          <Route path="/listing803">
            <>
            <h2>Listing 8-3: Updating an input element with one-way data flow</h2>
            <Chapter08.ControllingFunction />
            </>
          </Route>
          <Route path="/listing804">
            <>
            <h2>Listing 8-4: Controlling an input in a class component</h2>
            <Chapter08.ControllingClass />
            </>
          </Route>
          <Route path="/listing805">
            <>
            <h2>Listing 8-5: Simplifying a Controlled Input in a Class</h2>
            <Chapter08.ControllingClass2 />
            </>
          </Route>
          <Route path="/listing806">
            <>
            <h2>Listing 8-6: The SearchBox component</h2>
            <Chapter08.SearchInterface />
            </>
          </Route>
          <Route path="/listing807">
            <>
            <h2>Listing 8-7: The SearchInput component</h2>
            <Chapter08.SearchInput />
            </>
          </Route>
          <Route path="/listing808">
            <>
            <h2>Listing 8-8: The SearchResults component</h2>
            <Chapter08.SearchResults />
            </>
          </Route>
          <Route path="/listing809">
            <>
            <h2>Listing 8-9: A blog comment interface using an uncontrolled input</h2>
            <Chapter08.BlogComment />
            </>
          </Route>
          <Route path="/listing810">
            <>
            <h2>Listing 8-10: An HTML textarea's value is its children</h2>
            <pre>
              {`<textarea name="terms-of-use">
  Make sure to read all of these terms of use. By reading this book, you agree to learn React and to never try to mutate a prop or forget to bind an event handler in a class component. Furthermore, although it is not required, you agree to consider writing a review of this book and to tell your friends how great this book is.
</textarea>
`}
            </pre>
            </>
          </Route>
          <Route path="/listing811">
            <>
            <h2>Listing 8-11: Using a textarea in React</h2>
            <Chapter08.TermsOfUse terms="Make sure to read all of these terms of use. By reading this book, you agree to learn React and to never try to mutate a prop or forget to bind an event handler in a class component. Furthermore, although it is not required, you agree to consider writing a review of this book and to tell your friends how great this book is.
"/>
            </>
          </Route>
          <Route path="/listing812">
            <>
            <h2>Listing 8-12: A select element in HTML</h2>
            <pre>
              {`<select name="pizza-type">
  <option value="thin">Thin Crust</option>
  <option value="thick">Thick Crust</option>
  <option value="deep">Deep Dish</option>
  <option value="detroit" selected>Detroit-style</option>
  <option value="chicago">Chicago-style</option>
</select>
`}
</pre>
            </>
          </Route>
          <Route path="/listing813">
            <>
            <h2>Listing 8-13: Using a select input in React</h2>
            <Chapter08.SizeSelect />
            </>
          </Route>
          <Route path="/listing814">
            <>
            <h2>Listing 8-14: Using preventDefault</h2>
            <Chapter08.PreventDefault />
            </>
          </Route>
          <Route path="/listing901">
            <>
            <h2>Listing 9-1: Creating a Ref in a Class Component</h2>
            <Chapter09.CreateRefClass bookText={Chapter09.mobydick} />
            </>
          </Route>
          <Route path="/listing902">
            <>
            <h2>Listing 9-2: Creating a Ref with useRef()</h2>
            <Chapter09.CreateRefFunction bookText={Chapter09.mobydick} />
            </>
          </Route>
          <Route path="/listing903">
            <>
            <h2>Listing 9-3: Calling a DOM Method on a Child Using a Ref</h2>
            <Chapter09.TextReader bookText={Chapter09.mobydick} />
            </>
          </Route>
          <Route path="/listing904">
            <>
            <h2>Listing 9-4: Creating a Callback Ref</h2>
            <Chapter09.TextReaderCallback bookText={Chapter09.mobydick} />
            </>
          </Route>
          <Route path="/listing905">
            <>
            <h2>Listing 9-5: Passing a ref Callback as an Inline Function</h2>
            <Chapter09.TextReaderCallback2 bookText={Chapter09.mobydick} />
            </>
          </Route>
          <Route path="/listing906">
            <>
            <h2>Listing 9-6: Selecting and Copying Text with a ref</h2>
            <Chapter09.CodeDisplay yourCode="8675309" />
            </>
          </Route>
          <Route path="/listing907">
            <>
            <h2>Listing 9-7: A React Audio Player</h2>
            <Chapter09.AudioPlayer />
            </>
          </Route>
          <Route path="/listing908">
            <>
            <h2>Listing 9-8: Scrolling to an Element with a ref</h2>
            <Chapter09.ScrollToDemo />
            </>
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
          </Route>
          <Route path="/listing1001">
            <Chapter10.StyledParent />
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
