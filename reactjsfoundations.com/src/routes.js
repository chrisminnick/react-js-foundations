import { Switch, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import { lazily } from 'react-lazily';
import Helmet from 'react-helmet';
import PrevNext from './PrevNext';
import * as Chapter09 from './chapter09';
import ErrorBoundary from './chapter13/ErrorBoundary';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import WpBlog from './WpBlog';
import WpBlogSP from './WpBlogSP';
const Introduction = lazy(() => import('./Introduction'));
const WhereToBuy = lazy(() => import('./WhereToBuy'));
const About = lazy(() => import('./About'));
const HomePage = lazy(() => import('./HomePage'));
const Chapter01 = lazily(() => import('./chapter01'));
const Chapter03 = lazily(() => import('./chapter03'));
const Chapter04 = lazily(() => import('./chapter04'));
const Chapter06 = lazily(() => import('./chapter06'));
const Chapter07 = lazily(() => import('./chapter07'));
const Chapter08 = lazily(() => import('./chapter08'));
//const Chapter09 = lazily(() => import('./chapter09')); refs don't work when lazy loaded?
const Chapter10 = lazily(() => import('./chapter10'));
const Chapter11 = lazily(() => import('./chapter11'));
const Chapter12 = lazily(() => import('./chapter12'));
const Chapter13 = lazily(() => import('./chapter13'));
const Chapter16 = lazily(() => import('./chapter16'));
const Chapter17 = lazily(() => import('./chapter17'));

export const routes = (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/intro" component={Introduction} />
    <Route path="/WhereToBuy" component={WhereToBuy} />
    <Route path="/AboutChrisMinnick" component={About} />
    <Route exact path="/blog/">
      <WpBlog posts={10} title="ReactJS Foundations Blog and Errata" />
    </Route>
    <Route exact path="/blog/:id">
      <WpBlogSP title="ReactJS Foundations Blog and Errata" />
    </Route>
    <Route path="/listing102">
      <Helmet>
        <title>
          ReactJS Foundations: Changing the state data in a component
        </title>
      </Helmet>
      <h1>Listing 1-2: Changing the state data in a component</h1>
      <PrevNext prev="/" next="/listing103" />
      <Chapter01.Listing0102 />
    </Route>
    <Route path="/listing103">
      <Helmet>
        <title>
          ReactJS Foundations: An interactive Hello, World component
        </title>
      </Helmet>
      <h1>Listing 1-3: An interactive Hello, World component</h1>
      <PrevNext prev="/listing102" next="/listing301" />
      <Chapter01.Listing0103 />
    </Route>
    <Route path="/listing301">
      <Helmet>
        <title>ReactJS Foundations: Listing 3-1: A React Component</title>
      </Helmet>
      <h1>Listing 3-1: A React Component</h1>
      <PrevNext prev="/listing103" next="/listing302" />
      {
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React from "react";

function Login(){

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('logging in ' + e.target[0].value);

		// do something else here

	}

	return (
		<form id="login-form" onSubmit={handleSubmit}>
			<input	type="email"
				id="email"
				placeholder="E-Mail Address" />
			<input type="password"
				id="password" />
			<button>Login</button>
		</form>
    );
}

export default Login;`}
        </SyntaxHighlighter>
      }
    </Route>
    <Route path="/listing302">
      <Helmet>
        <title>
          ReactJS Foundations: Using a user-defined React component in JSX
        </title>
      </Helmet>
      <h1>Listing 3-2: Using a user-defined React component in JSX</h1>
      <PrevNext prev="/listing301" next="/listing303" />

      <Chapter03.SearchBox />
    </Route>
    <Route path="/listing303">
      <Helmet>
        <title>
          ReactJS Foundations: Custom attributes in HTML must start with data-
        </title>
      </Helmet>
      <h1>Listing 3-3: Custom attributes in HTML must start with data-</h1>
      <PrevNext prev="/listing302" next="/listing304" />

      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`<div data-size="XL" 
         data-color="black"
         data-description="awesome">
         My Favorite T-Shirt
    </div>
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing304">
      <Helmet>
        <title>
          ReactJS Foundations: User-defined elements can have any attributes
        </title>
      </Helmet>
      <h1>Listing 3-4: User-defined elements can have any attributes</h1>
      <PrevNext prev="/listing303" next="/listing305" />

      <Chapter03.MyFancyComponent />
    </Route>
    <Route path="/listing305">
      <Helmet>
        <title>
          ReactJS Foundations: Using literal JavaScript inside of JSX
        </title>
      </Helmet>
      <h1>Listing 3-5: Using literal JavaScript inside of JSX</h1>
      <PrevNext prev="/listing304" next="/listing306" />

      <SyntaxHighlighter language="javascript" style={github}>
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
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing306">
      <Helmet>
        <title>
          ReactJS Foundations: Object literals in JSX result in double curly
          braces
        </title>
      </Helmet>
      <h1>Listing 3-6: Object literals in JSX result in double curly braces</h1>
      <PrevNext prev="/listing305" next="/listing307" />

      <Chapter03.Header />
    </Route>
    <Route path="/listing307">
      <Helmet>
        <title>ReactJS Foundations: Enclose comments in curly braces</title>
      </Helmet>
      <h1>Listing 3-7: Enclose comments in curly braces</h1>
      <PrevNext prev="/listing306" next="/listing308" />

      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`function Header(props){
return (
  <h1 style={{fontSize:"24px",color:"blue"}}>
    {/* Todo: Make this header dynamic */}

    Welcome to My Website
  </h1>
  )
}
export default Header;
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing308">
      <Helmet>
        <title>ReactJS Foundations: Using Element Variables</title>
      </Helmet>
      <h1>Listing 3-8: Using Element Variables</h1>
      <PrevNext prev="/listing307" next="/listing309" />

      <Chapter03.Welcome />
    </Route>
    <Route path="/listing309">
      <Helmet>
        <title>
          ReactJS Foundations: Conditional Rendering with Element Variables
        </title>
      </Helmet>
      <h1>Listing 3-9: Conditional Rendering with Element Variables</h1>
      <PrevNext prev="/listing308" next="/listing310" />

      <Chapter03.ConditionalWelcome />
    </Route>
    <Route path="/listing310">
      <Helmet>
        <title>ReactJS Foundations: Conditional Rendering with &&</title>
      </Helmet>
      <h1>Listing 3-10: Conditional Rendering with &&</h1>
      <PrevNext prev="/listing309" next="/listing311" />

      <Chapter03.ConditionalWelcome2 />
    </Route>
    <Route path="/listing311">
      <Helmet>
        <title>ReactJS Foundations: Using the conditional operator</title>
      </Helmet>
      <h1>Listing 3-11: Using the conditional operator</h1>
      <PrevNext prev="/listing310" next="/listing312" />

      <Chapter03.ConditionalWelcome3 />
    </Route>
    <Route path="/listing312">
      <Helmet>
        <title>
          ReactJS Foundations: Using an arrow function as an event handler
        </title>
      </Helmet>
      <h1>Listing 3-12: Using an arrow function as an event handler</h1>
      <PrevNext prev="/listing311" next="/listing313" />

      <Chapter03.CountUp />
    </Route>
    <Route path="/listing313">
      <Helmet>
        <title>
          ReactJS Foundations: Immediately invoking a function in JSX
        </title>
      </Helmet>
      <h1>Listing 3-13: Immediately invoking a function in JSX</h1>
      <PrevNext prev="/listing312" next="/listing314" />

      <Chapter03.ImmediateInvoke />
    </Route>
    <Route path="/listing314">
      <Helmet>
        <title>ReactJS Foundations: Using React.Fragment</title>
      </Helmet>
      <h1>Listing 3-14: Using React.Fragment</h1>
      <PrevNext prev="/listing313" next="/listing315" />

      <Chapter03.FragmentExample1 />
    </Route>
    <Route path="/listing315">
      <Helmet>
        <title>ReactJS Foundations: Using React.Fragment's Short Syntax</title>
      </Helmet>
      <h1>Listing 3-15: Using React.Fragment's Short Syntax</h1>
      <PrevNext prev="/listing314" next="/listing401" />

      <Chapter03.FragmentExample2 />
    </Route>
    <Route path="/listing401">
      <Helmet>
        <title>ReactJS Foundations: Components Define Elements</title>
      </Helmet>
      <h1>Listing 4-1: Components Define Elements</h1>
      <PrevNext prev="/listing315" next="/listing402" />

      <Chapter04.WelcomeMessage />
    </Route>
    <Route path="/listing402">
      <Helmet>
        <title>
          ReactJS Foundations: Components can be imported into other components
        </title>
      </Helmet>
      <h1>Listing 4-2: Components can be imported into other components</h1>
      <PrevNext prev="/listing401" next="/listing403" />

      <Chapter04.WelcomeTitle />
    </Route>
    <Route path="/listing403">
      <Helmet>
        <title>
          ReactJS Foundations: Using components to reduce complexity
        </title>
      </Helmet>
      <h1>Listing 4-3: Using components to reduce complexity</h1>
      <PrevNext prev="/listing402" next="/listing404" />

      <Chapter04.Cart />
    </Route>
    <Route path="/listing404">
      <Helmet>
        <title>ReactJS Foundations: Putting everything in one component</title>
      </Helmet>
      <h1>Listing 4-4: Putting everything in one component</h1>
      <PrevNext prev="/listing403" next="/listing405" />

      <Chapter04.SingleComponentCart />
    </Route>
    <Route path="/listing405">
      <Helmet>
        <title>ReactJS Foundations: Passing props</title>
      </Helmet>
      <h1>Listing 4-5: Passing props</h1>
      <PrevNext prev="/listing404" next="/listing406" />

      <Chapter04.Farms />
    </Route>
    <Route path="/listing406">
      <Helmet>
        <title>ReactJS Foundations: Using props inside a component</title>
      </Helmet>
      <h1>Listing 4-6: Using props inside a component</h1>
      <PrevNext prev="/listing405" next="/listing407" />

      <Chapter04.Farm
        farmer="Old McDonald"
        animals={['pigs', 'cows', 'chickens']}
      />
    </Route>
    <Route path="/listing407">
      <Helmet>
        <title>
          ReactJS Foundations: An improved version of the Farm component
        </title>
      </Helmet>
      <h1>Listing 4-7: An improved version of the Farm component</h1>
      <PrevNext prev="/listing406" next="/listing408" />

      <Chapter04.ImprovedFarms />
    </Route>
    <Route path="/listing408">
      <Helmet>
        <title>
          ReactJS Foundations: Creating a Component with React.createClass
        </title>
      </Helmet>
      <h1>Listing 4-8: Creating a Component with React.createClass</h1>
      <PrevNext prev="/listing407" next="/listing409" />

      <Chapter04.CreateReactClass />
    </Route>
    <Route path="/listing409">
      <Helmet>
        <title>ReactJS Foundations: Creating a Component Using a Class</title>
      </Helmet>
      <h1>Listing 4-9: Creating a Component Using a Class</h1>
      <PrevNext prev="/listing408" next="/listing410" />

      <Chapter04.ReactClassComponent />
    </Route>
    <Route path="/listing410">
      <Helmet>
        <title>
          ReactJS Foundations: Not binding your functions results in errors
        </title>
      </Helmet>
      <h1>Listing 4-10: Not binding your functions results in errors</h1>
      <PrevNext prev="/listing409" next="/listing411" />

      <Chapter04.UnboundFunction />
    </Route>
    <Route path="/listing411">
      <Helmet>
        <title>
          ReactJS Foundations: Binding a function and using it in another class
        </title>
      </Helmet>
      <h1>Listing 4-11: Binding a function and using it in another class</h1>
      <PrevNext prev="/listing410" next="/listing412" />

      <Chapter04.BoundFunction />
    </Route>
    <Route path="/listing412">
      <Helmet>
        <title>
          ReactJS Foundations: Using state and setState in a Class Component
        </title>
      </Helmet>
      <h1>Listing 4-12: Using state and setState in a Class Component</h1>
      <PrevNext prev="/listing411" next="/listing413" />

      <Chapter04.ClassComponentState />
    </Route>
    <Route path="/listing413">
      <Helmet>
        <title>ReactJS Foundations: setState() is asynchronous</title>
      </Helmet>
      <h1>Listing 4-13: setState() is asynchronous</h1>
      <PrevNext prev="/listing412" next="/listing414" />

      <Chapter04.SetStateAsync />
    </Route>
    <Route path="/listing414">
      <Helmet>
        <title>ReactJS Foundations: Rendering a figure and caption</title>
      </Helmet>
      <h1>Listing 4-14: Rendering a figure and caption</h1>
      <PrevNext prev="/listing413" next="/listing415" />

      <Chapter04.BasicFigure />
    </Route>
    <Route path="/listing415">
      <Helmet>
        <title>ReactJS Foundations: The FigureList component</title>
      </Helmet>
      <h1>Listing 4-15: The FigureList component</h1>
      <PrevNext prev="/listing414" next="/listing416" />

      <Chapter04.FigureList />
    </Route>
    <Route path="/listing416">
      <Helmet>
        <title>
          ReactJS Foundations: Using props to pass data to a child component
        </title>
      </Helmet>
      <h1>Listing 4-16: Using props to pass data to a child component</h1>
      <PrevNext prev="/listing415" next="/listing417" />

      <Chapter04.FigureListProps />
    </Route>
    <Route path="/listing417">
      <Helmet>
        <title>ReactJS Foundations: Using props in a class component</title>
      </Helmet>
      <h1>Listing 4-17: Using props in a class component</h1>
      <PrevNext prev="/listing416" next="/listing418" />

      <Chapter04.BasicFigureProps
        filename="images/chickens.png"
        caption="Lefty and Ginger"
      />
    </Route>
    <Route path="/listing418">
      <Helmet>
        <title>ReactJS Foundations: A typical class component</title>
      </Helmet>
      <h1>Listing 4-18: A typical class component</h1>
      <PrevNext prev="/listing417" next="/listing419" />

      <Chapter04.ToDoClass />
    </Route>
    <Route path="/listing419">
      <Helmet>
        <title>ReactJS Foundations: A typical function component</title>
      </Helmet>
      <h1>Listing 4-19: A typical function component</h1>
      <PrevNext prev="/listing418" next="/listing420" />

      <Chapter04.ToDoFunction />
    </Route>
    <Route path="/listing420">
      <Helmet>
        <title>
          ReactJS Foundations: Further simplifying a function component
        </title>
      </Helmet>
      <h1>Listing 4-20: Further simplifying a function component</h1>
      <PrevNext prev="/listing419" next="/listing421" />

      <Chapter04.ToDoFunctionSimple />
    </Route>
    <Route path="/listing421">
      <Helmet>
        <title>ReactJS Foundations: Using state in functional components</title>
      </Helmet>
      <h1>Listing 4-21: Using state in functional components</h1>
      <PrevNext prev="/listing420" next="/listing422" />

      <Chapter04.Counter />
    </Route>
    <Route path="/listing422">
      <Helmet>
        <title>
          ReactJS Foundations: A component made up of three child components
        </title>
      </Helmet>
      <h1>Listing 4-22: A component made up of three child components</h1>
      <PrevNext prev="/listing421" next="/listing423" />

      <Chapter04.LoginForm />
    </Route>
    <Route path="/listing423">
      <Helmet>
        <title>ReactJS Foundations: Presenting ThingsThatAreFunny</title>
      </Helmet>
      <h1>Listing 4-23: Presenting ThingsThatAreFunny</h1>
      <PrevNext prev="/listing422" next="/listing424" />

      <Chapter04.ThingsThatAreFunny />
    </Route>
    <Route path="/listing424">
      <Helmet>
        <title>ReactJS Foundations: Passing children into a component</title>
      </Helmet>
      <h1>Listing 4-24: Passing children into a component</h1>
      <PrevNext prev="/listing423" next="/listing425" />

      <Chapter04.ThingsThatILike />
    </Route>
    <Route path="/listing425">
      <Helmet>
        <title>ReactJS Foundations: Rendering a NavBar inside of App</title>
      </Helmet>
      <h1>Listing 4-25: Rendering a NavBar inside of App</h1>
      <PrevNext prev="/listing424" next="/listing426" />

      <Chapter04.CloneElementExample />
    </Route>
    <Route path="/listing426">
      <Helmet>
        <title>
          ReactJS Foundations: Rendering the Children using props.children
        </title>
      </Helmet>
      <h1>Listing 4-26: Rendering the Children using props.children</h1>
      <PrevNext prev="/listing425" next="/listing427" />

      <Chapter04.NavBarChildren />
    </Route>
    <Route path="/listing427">
      <Helmet>
        <title>ReactJS Foundations: Cloning the Children in NavBar.js</title>
      </Helmet>
      <h1>Listing 4-27: Cloning the Children in NavBar.js</h1>
      <PrevNext prev="/listing426" next="/listing428" />

      <Chapter04.NavBarCloneChildren />
    </Route>
    <Route path="/listing428">
      <Helmet>
        <title>
          ReactJS Foundations: Passing onClick into the parent component
        </title>
      </Helmet>
      <h1>Listing 4-28: Passing onClick into the parent component</h1>
      <PrevNext prev="/listing427" next="/listing429" />

      <Chapter04.NavBarPassingOnClick />
    </Route>
    <Route path="/listing429">
      <Helmet>
        <title>
          ReactJS Foundations: Making use of props in a child component
        </title>
      </Helmet>
      <h1>Listing 4-29: Making use of props in a child component</h1>
      <PrevNext prev="/listing428" next="/listing430" />

      <Chapter04.NavBarUsingOnClick />
    </Route>
    <Route path="/listing430">
      <Helmet>
        <title>
          ReactJS Foundations: Comparing previous and next props in
          shouldComponentUpdate
        </title>
      </Helmet>
      <h1>
        Listing 4-30: Comparing previous and next props in shouldComponentUpdate
      </h1>
      <PrevNext prev="/listing429" next="/listing431" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`class ToDoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isChecked != this.props.isChecked;
    }
    ...
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing431">
      <Helmet>
        <title>
          ReactJS Foundations: A React component with a potential memory leak
        </title>
      </Helmet>
      <h1>Listing 4-31: A React component with a potential memory leak</h1>
      <PrevNext prev="/listing430" next="/listing432" />

      <Chapter04.LeakyCounter />
    </Route>
    <Route path="/listing432">
      <Helmet>
        <title>
          ReactJS Foundations: Toggling the rendering of the Counter
        </title>
      </Helmet>
      <h1>Listing 4-32: Toggling the rendering of the Counter</h1>
      <PrevNext prev="/listing431" next="/listing433" />

      <Chapter04.CounterController />
    </Route>
    <Route path="/listing433">
      <Helmet>
        <title>ReactJS Foundations: Fixing a memory leak</title>
      </Helmet>
      <h1>Listing 4-33: Fixing a memory leak</h1>
      <PrevNext prev="/listing432" next="/listing434" />

      <Chapter04.NoLeakCounterController />
    </Route>
    <Route path="/listing434">
      <Helmet>
        <title>
          ReactJS Foundations: Using shouldComponentUpdate() and
          shallowCompare()
        </title>
      </Helmet>
      <h1>Listing 4-34: Using shouldComponentUpdate() and shallowCompare()</h1>
      <PrevNext prev="/listing433" next="/listing435" />

      <Chapter04.ShallowCompare />
    </Route>
    <Route path="/listing435">
      <Helmet>
        <title>ReactJS Foundations: Extending React.PureComponent</title>
      </Helmet>
      <h1>Listing 4-35: Extending React.PureComponent</h1>
      <PrevNext prev="/listing434" next="/listing436" />

      <Chapter04.PureComponent />
    </Route>
    <Route path="/listing436">
      <Helmet>
        <title>ReactJS Foundations: Using React.memo</title>
      </Helmet>
      <h1>Listing 4-36: Using React.memo</h1>
      <PrevNext prev="/listing435" next="/listing601" />

      <Chapter04.ReactMemoExample />
    </Route>
    <Route path="/listing601">
      <Helmet>
        <title>
          ReactJS Foundations: Changing local variables doesn't update the view
        </title>
      </Helmet>
      <h1>Listing 6-1: Changing local variables doesn't update the view</h1>
      <PrevNext prev="/listing436" next="/listing602" />

      <Chapter06.Mutato />
    </Route>
    <Route path="/listing602">
      <Helmet>
        <title>ReactJS Foundations: A Component That Uses a String Prop</title>
      </Helmet>
      <h1>Listing 6-2: A Component That Uses a String Prop</h1>
      <PrevNext prev="/listing601" next="/listing603" />

      <Chapter06.WelcomeMessageProps firstName="Jimmy" />
    </Route>
    <Route path="/listing603">
      <Helmet>
        <title>ReactJS Foundations: Validating That a Prop is a String</title>
      </Helmet>
      <h1>Listing 6-3: Validating That a Prop is a String</h1>
      <PrevNext prev="/listing602" next="/listing604" />

      <Chapter06.WelcomeMessageProps firstName="Test" />
    </Route>
    <Route path="/listing604">
      <Helmet>
        <title>ReactJS Foundations: PropTypes Inside a Component's Body</title>
      </Helmet>
      <h1>Listing 6-4: PropTypes Inside a Component's Body</h1>
      <PrevNext prev="/listing603" next="/listing605" />

      <Chapter06.WelcomeClass firstName={'frank'} />
    </Route>
    <Route path="/listing605">
      <Helmet>
        <title>
          ReactJS Foundations: Putting PropTypes Outside the Class Body
        </title>
      </Helmet>
      <h1>Listing 6-5: Putting PropTypes Outside the Class Body</h1>
      <PrevNext prev="/listing604" next="/listing606" />

      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`import PropTypes from 'prop-types';
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
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing606">
      <Helmet>
        <title>
          ReactJS Foundations: Using PropTypes with a Function Component
        </title>
      </Helmet>
      <h1>Listing 6-6: Using PropTypes with a Function Component</h1>
      <PrevNext prev="/listing605" next="/listing607" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import PropTypes from 'prop-types';

function MyComponent(props){
  return (<p>The value is {props.itemValue}</p>);
}

MyComponent.propTypes = {
  itemValue: PropTypes.number
}

export default MyComponent;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing607">
      <Helmet>
        <title>ReactJS Foundations: Appending the isRequired Validator</title>
      </Helmet>
      <h1>Listing 6-7: Appending the isRequired Validator</h1>
      <PrevNext prev="/listing606" next="/listing608" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`MyComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  middleName: PropTypes.string,
  lastName: PropTypes.string.isRequired
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing608">
      <Helmet>
        <title>ReactJS Foundations: Trying to render a non-node value</title>
      </Helmet>
      <h1>Listing 6-8: Trying to render a non-node value</h1>
      <PrevNext prev="/listing607" next="/listing609" />

      <p>
        Uncomment the SiteLink element in App.js to see the error from passing
        an object to the SiteLink component.
      </p>
      {/* <Chapter06.SiteLink url="http://example.com" linkName={{name:'Example'}} /> */}
    </Route>
    <Route path="/listing609">
      <Helmet>
        <title>ReactJS Foundations: Using PropTypes.node</title>
      </Helmet>
      <h1>Listing 6-9: Using PropTypes.node</h1>
      <PrevNext prev="/listing608" next="/listing610" />

      <Chapter06.SiteLinkNode url="http://example.com" linkName="Example" />
    </Route>
    <Route path="/listing610">
      <Helmet>
        <title>ReactJS Foundations: Validating React Elements</title>
      </Helmet>
      <h1>Listing 6-10: Validating React Elements</h1>
      <PrevNext prev="/listing609" next="/listing611" />

      <Chapter06.BorderBox>
        <p>The first paragraph</p>
        <p>The second paragraph</p>
      </Chapter06.BorderBox>
    </Route>
    <Route path="/listing611">
      <Helmet>
        <title>ReactJS Foundations: Using the elementType Validator</title>
      </Helmet>
      <h1>Listing 6-11: Using the elementType Validator</h1>
      <PrevNext prev="/listing610" next="/listing612" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`FamilyTree.propTypes = {
  pet: PropTypes.elementType
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing612">
      <Helmet>
        <title>
          ReactJS Foundations: Validating that a prop is an instance of a class
        </title>
      </Helmet>
      <h1>Listing 6-12: Validating that a prop is an instance of a class</h1>
      <PrevNext prev="/listing611" next="/listing613" />
      <Chapter06.FamilyTree /> {/* propType validates */}
      {/* <Chapter06.FamilyTree father={"Patrick"} /> propType doesn't validate */}
    </Route>
    <Route path="/listing613">
      <Helmet>
        <title>ReactJS Foundations: Using PropTypes.oneOf</title>
      </Helmet>
      <h1>Listing 6-13: Using PropTypes.oneOf</h1>
      <PrevNext prev="/listing612" next="/listing614" />

      <Chapter06.DisplayPrimaryColors primaryColor="red" />
    </Route>
    <Route path="/listing614">
      <Helmet>
        <title>ReactJS Foundations: A component without default props</title>
      </Helmet>
      <h1>Listing 6-14: Using a Custom validator to test for a phone number</h1>
      <PrevNext prev="/listing613" next="/listing615" />

      <Chapter06.Contact fullName="Chris Minnick" phone="5555555555" />
      <Chapter06.Contact fullName="John Doe" phone="5555" />
    </Route>
    <Route path="/listing615">
      <Helmet>
        <title>ReactJS Foundations: A component without default props</title>
      </Helmet>
      <h1>Listing 6-15: A component without default props</h1>
      <PrevNext prev="/listing614" next="/listing616" />

      <Chapter06.StoresNearYou latitude="37.3230" longitude="122.0322" />
    </Route>
    <Route path="/listing616">
      <Helmet>
        <title>
          ReactJS Foundations: Setting defaults with the || Operator
        </title>
      </Helmet>
      <h1>Listing 6-16: Setting defaults with the || Operator</h1>
      <PrevNext prev="/listing615" next="/listing617" />

      <Chapter06.StoresNearYou1 />
    </Route>
    <Route path="/listing617">
      <Helmet>
        <title>
          ReactJS Foundations: Destructuring props and setting defaults
        </title>
      </Helmet>
      <h1>Listing 6-17: Destructuring props and setting defaults</h1>
      <PrevNext prev="/listing616" next="/listing618" />

      <Chapter06.StoresNearYou2 />
    </Route>
    <Route path="/listing618">
      <Helmet>
        <title>
          ReactJS Foundations: Setting defaultProps as a static property
        </title>
      </Helmet>
      <h1>Listing 6-18: Setting defaultProps as a static property</h1>
      <PrevNext prev="/listing617" next="/listing619" />

      <Chapter06.StoresNearYou3 />
    </Route>
    <Route path="/listing619">
      <Helmet>
        <title>
          ReactJS Foundations: Setting defaultProps outside of the component
          body
        </title>
      </Helmet>
      <h1>Listing 6-19: Setting defaultProps outside of the component body</h1>
      <PrevNext prev="/listing618" next="/listing620" />

      <Chapter06.StoresNearYou4 />
    </Route>
    <Route path="/listing620">
      <Helmet>
        <title>
          ReactJS Foundations: Setting defaultProps for a function component
        </title>
      </Helmet>
      <h1>Listing 6-20: Setting defaultProps for a function component</h1>
      <PrevNext prev="/listing619" next="/listing621" />

      <Chapter06.StoresNearYou5 />
    </Route>
    <Route path="/listing621">
      <Helmet>
        <title>
          ReactJS Foundations: Initializing State in a Class Component
        </title>
      </Helmet>
      <h1>Listing 6-21: Initializing State in a Class Component</h1>
      <PrevNext prev="/listing620" next="/listing622" />

      <Chapter06.NewsFeed />
    </Route>

    <Route path="/listing622">
      <Helmet>
        <title>
          ReactJS Foundations: Initializing state using the class property
        </title>
      </Helmet>
      <h1>Listing 6-22: Initializing state using the class property</h1>
      <PrevNext prev="/listing621" next="/listing623" />

      <Chapter06.NewsFeed2 />
    </Route>
    <Route path="/listing623">
      <Helmet>
        <title>
          ReactJS Foundations: Initializing State in a Function Component
        </title>
      </Helmet>
      <h1>Listing 6-23: Initializing State in a Function Component</h1>
      <PrevNext prev="/listing622" next="/listing624" />

      <Chapter06.NewsFeed3 />
    </Route>
    <Route path="/listing624">
      <h1>
        Listing 6-24: Another Approach to Initializing State in a Function
        Component
      </h1>
      <PrevNext prev="/listing623" next="/listing625" />

      <Chapter06.NewsFeed4 />
    </Route>
    <Route path="/listing625">
      <Helmet>
        <title>ReactJS Foundations: Using setState</title>
      </Helmet>
      <h1>Listing 6-25: Using setState</h1>
      <PrevNext prev="/listing624" next="/listing626" />

      <Chapter06.CounterClass />
    </Route>
    <Route path="/listing626">
      <Helmet>
        <title>
          ReactJS Foundations: Using setState with Multiple State Properties
        </title>
      </Helmet>
      <h1>Listing 6-26: Using setState with Multiple State Properties</h1>
      <PrevNext prev="/listing625" next="/listing627" />

      <Chapter06.CounterClass2 />
    </Route>
    <Route path="/listing627">
      <Helmet>
        <title>
          ReactJS Foundations: Demonstrating setState's asychronous nature
        </title>
      </Helmet>
      <h1>Listing 6-27: Demonstrating setState's asychronous nature</h1>
      <PrevNext prev="/listing626" next="/listing628" />

      <Chapter06.CounterClass3 />
    </Route>
    <Route path="/listing628">
      <Helmet>
        <title>
          ReactJS Foundations: Using the updater function with setState
        </title>
      </Helmet>
      <h1>Listing 6-28: Using the updater function with setState</h1>
      <PrevNext prev="/listing627" next="/listing629" />

      <Chapter06.CounterClass4 />
    </Route>
    <Route path="/listing629">
      <Helmet>
        <title>
          ReactJS Foundations: The Static Version of the App Component
        </title>
      </Helmet>
      <h1>Listing 6-29: The Static Version of the App Component</h1>
      <PrevNext prev="/listing628" next="/listing630" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing630">
      <Helmet>
        <title>ReactJS Foundations: A Shell Component for InputForm</title>
      </Helmet>
      <h1>Listing 6-30: A Shell Component for InputForm</h1>
      <PrevNext prev="/listing629" next="/listing631" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function InputForm(props){
  return(
    <div>Input form here</div>
  );
}
export default InputForm;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing631">
      <Helmet>
        <title>ReactJS Foundations: A Shell Component for FilterSelect</title>
      </Helmet>
      <h1>Listing 6-31: A Shell Component for FilterSelect</h1>
      <PrevNext prev="/listing630" next="/listing632" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function FilterSelect(props){
  return(
      <div>Filter the List</div>
  );
}
export default FilterSelect;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing632">
      <Helmet>
        <title>ReactJS Foundations: A Shell Component for RemindersList</title>
      </Helmet>
      <h1>Listing 6-32: A Shell Component for RemindersList</h1>
      <PrevNext prev="/listing631" next="/listing633" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function RemindersList(props){
  return(
      <div>Reminders List</div>
  );
}
export default RemindersList;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing633">
      <Helmet>
        <title>ReactJS Foundations: A Shell Component for Reminder</title>
      </Helmet>
      <h1>Listing 6-33: A Shell Component for Reminder</h1>
      <PrevNext prev="/listing632" next="/listing634" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function Reminder(props){
  return(
      <div>Reminder</div>
  );
}
export default Reminder;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing634">
      <Helmet>
        <title>ReactJS Foundations: RemindersList with Reminder Imported</title>
      </Helmet>
      <h1>Listing 6-34: RemindersList with Reminder Imported</h1>
      <PrevNext prev="/listing633" next="/listing635" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing635">
      <Helmet>
        <title>ReactJS Foundations: Round Two of InputForm</title>
      </Helmet>
      <h1>Listing 6-35: Round Two of InputForm</h1>
      <PrevNext prev="/listing634" next="/listing636" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing636">
      <Helmet>
        <title>ReactJS Foundations: Round Two of FilterSelect</title>
      </Helmet>
      <h1>Listing 6-36: Round Two of FilterSelect</h1>
      <PrevNext prev="/listing635" next="/listing637" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing637">
      <Helmet>
        <title>ReactJS Foundations: Round Two of RemindersList</title>
      </Helmet>
      <h1>Listing 6-37: Round Two of RemindersList</h1>
      <PrevNext prev="/listing636" next="/listing638" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing638">
      <Helmet>
        <title>ReactJS Foundations: Round Two of Reminder</title>
      </Helmet>
      <h1>Listing 6-38: Round Two of Reminder</h1>
      <PrevNext prev="/listing637" next="/listing639" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing639">
      <Helmet>
        <title>ReactJS Foundations: App with Lifted State</title>
      </Helmet>
      <h1>Listing 6-39: App with Lifted State</h1>
      <PrevNext prev="/listing638" next="/listing640" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing640">
      <Helmet>
        <title>ReactJS Foundations: Pure InputForm</title>
      </Helmet>
      <h1>Listing 6-40: Pure InputForm</h1>
      <PrevNext prev="/listing639" next="/listing641" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing641">
      <Helmet>
        <title>ReactJS Foundations: Pure FilterSelect</title>
      </Helmet>
      <h1>Listing 6-41: Pure FilterSelect</h1>
      <PrevNext prev="/listing640" next="/listing642" />

      <SyntaxHighlighter language="javascript" style={github}>
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
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing642">
      <Helmet>
        <title>ReactJS Foundations: Pure RemindersList</title>
      </Helmet>
      <h1>Listing 6-42: Pure RemindersList</h1>
      <PrevNext prev="/listing641" next="/listing643" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing643">
      <Helmet>
        <title>
          ReactJS Foundations: Adding PropTypes and Default Values to InputForm
        </title>
      </Helmet>
      <h1>Listing 6-43: Adding PropTypes and Default Values to InputForm</h1>
      <PrevNext prev="/listing642" next="/listing644" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing644">
      <Helmet>
        <title>
          ReactJS Foundations: RemindersList with Default Props and PropTypes
        </title>
      </Helmet>
      <h1>Listing 6-44: RemindersList with Default Props and PropTypes</h1>
      <PrevNext prev="/listing643" next="/listing645" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing645">
      <Helmet>
        <title>
          ReactJS Foundations: Validating and Setting Defaults for FilterSelect
        </title>
      </Helmet>
      <h1>Listing 6-45: Validating and Setting Defaults for FilterSelect</h1>
      <PrevNext prev="/listing644" next="/listing646" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing646">
      <Helmet>
        <title>
          ReactJS Foundations: Reminder with PropTypes and defaultProps
        </title>
      </Helmet>
      <h1>Listing 6-46: Reminder with PropTypes and defaultProps</h1>
      <PrevNext prev="/listing645" next="/listing647" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing647">
      <Helmet>
        <title>
          ReactJS Foundations: The InputForm component with event handlers and
          event listeners
        </title>
      </Helmet>
      <h1>
        Listing 6-47: The InputForm component with event handlers and event
        listeners
      </h1>
      <PrevNext prev="/listing646" next="/listing648" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing648">
      <Helmet>
        <title>
          ReactJS Foundations: Creating a New filteredReminders Array
        </title>
      </Helmet>
      <h1>Listing 6-48: Creating a New filteredReminders Array</h1>
      <PrevNext prev="/listing647" next="/listing649" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing649">
      <Helmet>
        <title>ReactJS Foundations: Filtering the Reminders List</title>
      </Helmet>
      <h1>Listing 6-49: Filtering the Reminders List</h1>
      <PrevNext prev="/listing648" next="/listing650" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing650">
      <Helmet>
        <title>ReactJS Foundations: Implementing the filterList Function</title>
      </Helmet>
      <h1>Listing 6-50: Implementing the filterList Function</h1>
      <PrevNext prev="/listing649" next="/listing651" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing651">
      <Helmet>
        <title>
          ReactJS Foundations: FilterSelect with an event handler and event
          listener
        </title>
      </Helmet>
      <h1>
        Listing 6-51: FilterSelect with an event handler and event listener
      </h1>
      <PrevNext prev="/listing650" next="/listing652" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing652">
      <Helmet>
        <title>ReactJS Foundations: Reminder with the checkbox</title>
      </Helmet>
      <h1>Listing 6-52: Reminder with the checkbox</h1>
      <PrevNext prev="/listing651" next="/listing653" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing653">
      <Helmet>
        <title>ReactJS Foundations: Initializing State in App</title>
      </Helmet>
      <h1>Listing 6-53: Initializing State in App</h1>
      <PrevNext prev="/listing652" next="/listing654" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing654">
      <Helmet>
        <title>ReactJS Foundations: Copying and Modifying JSX in App</title>
      </Helmet>
      <h1>Listing 6-54: Copying and Modifying JSX in App</h1>
      <PrevNext prev="/listing653" next="/listing655" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing655">
      <Helmet>
        <title>
          ReactJS Foundations: Adding Methods and Binding Them to App
        </title>
      </Helmet>
      <h1>Listing 6-55: Adding Methods and Binding Them to App</h1>
      <PrevNext prev="/listing654" next="/listing656" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing656">
      <Helmet>
        <title>ReactJS Foundations: The Converted App Component</title>
      </Helmet>
      <h1>Listing 6-56: The Converted App Component</h1>
      <PrevNext prev="/listing655" next="/listing657" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Listing657">
      <Helmet>
        <title>ReactJS Foundations: The converted InputForm component</title>
      </Helmet>
      <h1>Listing 6-57: The converted InputForm component</h1>
      <PrevNext prev="/listing656" next="/listing701" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/Reminders">
      <Chapter06.Reminders />
    </Route>
    <Route path="/RemindersClass">
      <Chapter06.RemindersClass />
    </Route>
    <Route path="/listing701">
      <Helmet>
        <title>ReactJS Foundations: Using an event attribute in HTML</title>
      </Helmet>
      <h1>Listing 7-1: Using an event attribute in HTML</h1>
      <PrevNext prev="/listing657" next="/listing702" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<form id="signup-form" onsubmit="validate()">
  <input type="text" id="email">
  <input type="text" id="fullname">
  <input type="submit">
</form>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing702">
      <Helmet>
        <title>ReactJS Foundations: Using addEventListener</title>
      </Helmet>
      <h1>Listing 7-2: Using addEventListener</h1>
      <PrevNext prev="/listing701" next="/listing703" />

      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing703">
      <Helmet>
        <title>
          ReactJS Foundations: Setting an event listener in a React component
        </title>
      </Helmet>
      <h1>Listing 7-3: Setting an event listener in a React component</h1>
      <PrevNext prev="/listing702" next="/listing704" />

      <Chapter07.MyForm />
    </Route>
    <Route path="/listing704">
      <Helmet>
        <title>
          ReactJS Foundations: Viewing the properties of the Event object
        </title>
      </Helmet>
      <h1>Listing 7-4: Viewing the properties of the Event object</h1>
      <PrevNext prev="/listing703" next="/listing705" />

      <Chapter07.EventProps />
    </Route>
    <Route path="/listing705">
      <Helmet>
        <title>
          ReactJS Foundations: Using an inline event handler to show an alert
        </title>
      </Helmet>
      <h1>Listing 7-5: Using an inline event handler to show an alert</h1>
      <PrevNext prev="/listing704" next="/listing706" />

      <Chapter07.WarningButton />
    </Route>
    <Route path="/listing706">
      <Helmet>
        <title>
          ReactJS Foundations: Using an inline event handler to call setState()
        </title>
      </Helmet>
      <h1>Listing 7-6: Using an inline event handler to call setState()</h1>
      <PrevNext prev="/listing705" next="/listing707" />

      <Chapter07.ScreenDoor />
    </Route>
    <Route path="/listing707">
      <Helmet>
        <title>
          ReactJS Foundations: Using an event handler function in a function
          component
        </title>
      </Helmet>
      <h1>
        Listing 7-7: Using an event handler function in a function component
      </h1>
      <PrevNext prev="/listing706" next="/listing708" />

      <Chapter07.SearchTerm />
    </Route>
    <Route path="/listing708">
      <Helmet>
        <title>
          ReactJS Foundations: Writing and binding an event handler method in a
          class
        </title>
      </Helmet>
      <h1>
        Listing 7-8: Writing and binding an event handler method in a class
      </h1>
      <PrevNext prev="/listing707" next="/listing709" />

      <Chapter07.CoffeeMachine />
    </Route>
    <Route path="/listing709">
      <Helmet>
        <title>
          ReactJS Foundations: Binding a function in the constructor
        </title>
      </Helmet>
      <h1>Listing 7-9: Binding a function in the constructor</h1>
      <PrevNext prev="/listing708" next="/listing710" />

      <Chapter07.ColorWheel />
    </Route>
    <Route path="/listing710">
      <Helmet>
        <title>ReactJS Foundations: Binding an event handler inline</title>
      </Helmet>
      <h1>Listing 7-10: Binding an event handler inline</h1>
      <PrevNext prev="/listing709" next="/listing711" />

      <Chapter07.ColorWheel2 />
    </Route>
    <Route path="/listing711">
      <Helmet>
        <title>
          ReactJS Foundations: Using an arrow function as an event handler
        </title>
      </Helmet>
      <h1>Listing 7-11: Using an arrow function as an event handler</h1>
      <PrevNext prev="/listing710" next="/listing712" />

      <Chapter07.ColorWheel3 />
    </Route>
    <Route path="/listing712">
      <Helmet>
        <title>
          ReactJS Foundations: Defining state using a class property
        </title>
      </Helmet>
      <h1>Listing 7-12: Defining state using a class property</h1>
      <PrevNext prev="/listing711" next="/listing713" />

      <Chapter07.ColorWheel4 />
    </Route>
    <Route path="/listing713">
      <Helmet>
        <title>
          ReactJS Foundations: The Event object is passed automatically
        </title>
      </Helmet>
      <h1>Listing 7-13: The Event object is passed automatically</h1>
      <PrevNext prev="/listing712" next="/listing714" />

      <Chapter07.EventObject />
    </Route>
    <Route path="/listing714">
      <Helmet>
        <title>
          ReactJS Foundations: Passing the Event object to the event handler
        </title>
      </Helmet>
      <h1>Listing 7-14: Passing the Event object to the event handler</h1>
      <PrevNext prev="/listing713" next="/listing801" />

      <Chapter07.EventObject2 />
    </Route>
    <Route path="/listing801">
      <Helmet>
        <title>
          ReactJS Foundations: Omiting the value attribute creates an
          uncontrolled input
        </title>
      </Helmet>
      <h1>
        Listing 8-1: Omiting the value attribute creates an uncontrolled input
      </h1>
      <PrevNext prev="/listing714" next="/listing802" />

      <Chapter08.UncontrolledInput />
    </Route>
    <Route path="/listing802">
      <Helmet>
        <title>
          ReactJS Foundations: Adding the value attribute creates a controlled
          input
        </title>
      </Helmet>
      <h1>
        Listing 8-2: Adding the value attribute creates a controlled input
      </h1>
      <PrevNext prev="/listing801" next="/listing803" />

      <Chapter08.ControlledInput />
    </Route>
    <Route path="/listing803">
      <Helmet>
        <title>
          ReactJS Foundations: Updating an input element with one-way data flow
        </title>
      </Helmet>
      <h1>Listing 8-3: Updating an input element with one-way data flow</h1>
      <PrevNext prev="/listing802" next="/listing804" />

      <Chapter08.ControllingFunction />
    </Route>
    <Route path="/listing804">
      <Helmet>
        <title>
          ReactJS Foundations: Controlling an input in a class component
        </title>
      </Helmet>
      <h1>Listing 8-4: Controlling an input in a class component</h1>
      <PrevNext prev="/listing803" next="/listing805" />

      <Chapter08.ControllingClass />
    </Route>
    <Route path="/listing805">
      <Helmet>
        <title>
          ReactJS Foundations: Simplifying a Controlled Input in a Class
        </title>
      </Helmet>
      <h1>Listing 8-5: Simplifying a Controlled Input in a Class</h1>
      <PrevNext prev="/listing804" next="/listing806" />

      <Chapter08.ControllingClass2 />
    </Route>
    <Route path="/listing806">
      <Helmet>
        <title>ReactJS Foundations: The SearchBox component</title>
      </Helmet>
      <h1>Listing 8-6: The SearchBox component</h1>
      <PrevNext prev="/listing805" next="/listing807" />

      <Chapter08.SearchInterface />
    </Route>
    <Route path="/listing807">
      <Helmet>
        <title>ReactJS Foundations: The SearchInput component</title>
      </Helmet>
      <h1>Listing 8-7: The SearchInput component</h1>
      <PrevNext prev="/listing806" next="/listing808" />

      <Chapter08.SearchInput />
    </Route>
    <Route path="/listing808">
      <Helmet>
        <title>ReactJS Foundations: The SearchResults component</title>
      </Helmet>
      <h1>Listing 8-8: The SearchResults component</h1>
      <PrevNext prev="/listing807" next="/listing809" />

      <Chapter08.SearchResults />
    </Route>
    <Route path="/listing809">
      <Helmet>
        <title>
          ReactJS Foundations: A blog comment interface using an uncontrolled
          input
        </title>
      </Helmet>
      <h1>Listing 8-9: A blog comment interface using an uncontrolled input</h1>
      <PrevNext prev="/listing808" next="/listing810" />

      <Chapter08.BlogComment />
    </Route>
    <Route path="/listing810">
      <Helmet>
        <title>
          ReactJS Foundations: An HTML textarea's value is its children
        </title>
      </Helmet>
      <h1>Listing 8-10: An HTML textarea's value is its children</h1>
      <PrevNext prev="/listing809" next="/listing811" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<textarea name="terms-of-use">
  Make sure to read all of these terms of use. By reading this book, you agree to learn React and to never try to mutate a prop or forget to bind an event handler in a class component. Furthermore, although it is not required, you agree to consider writing a review of this book and to tell your friends how great this book is.
</textarea>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing811">
      <Helmet>
        <title>ReactJS Foundations: Using a textarea in React</title>
      </Helmet>
      <h1>Listing 8-11: Using a textarea in React</h1>
      <PrevNext prev="/listing810" next="/listing812" />

      <Chapter08.TermsOfUse
        terms="Make sure to read all of these terms of use. By reading this book, you agree to learn React and to never try to mutate a prop or forget to bind an event handler in a class component. Furthermore, although it is not required, you agree to consider writing a review of this book and to tell your friends how great this book is.
"
      />
    </Route>
    <Route path="/listing812">
      <Helmet>
        <title>ReactJS Foundations: A select element in HTML</title>
      </Helmet>
      <h1>Listing 8-12: A select element in HTML</h1>
      <PrevNext prev="/listing811" next="/listing813" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<select name="pizza-type">
  <option value="thin">Thin Crust</option>
  <option value="thick">Thick Crust</option>
  <option value="deep">Deep Dish</option>
  <option value="detroit" selected>Detroit-style</option>
  <option value="chicago">Chicago-style</option>
</select>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing813">
      <Helmet>
        <title>ReactJS Foundations: Using a select input in React</title>
      </Helmet>
      <h1>Listing 8-13: Using a select input in React</h1>
      <PrevNext prev="/listing812" next="/listing814" />

      <Chapter08.SizeSelect />
    </Route>
    <Route path="/listing814">
      <Helmet>
        <title>ReactJS Foundations: Using preventDefault</title>
      </Helmet>
      <h1>Listing 8-14: Using preventDefault</h1>
      <PrevNext prev="/listing813" next="/listing901" />

      <Chapter08.PreventDefault />
    </Route>
    <Route path="/listing901">
      <Helmet>
        <title>ReactJS Foundations: Creating a Ref in a Class Component</title>
      </Helmet>
      <h1>Listing 9-1: Creating a Ref in a Class Component</h1>
      <PrevNext prev="/listing814" next="/listing902" />

      <Chapter09.CreateRefClass bookText={Chapter09.mobydick} />
    </Route>
    <Route path="/listing902">
      <Helmet>
        <title>ReactJS Foundations: Creating a Ref with useRef()</title>
      </Helmet>
      <h1>Listing 9-2: Creating a Ref with useRef()</h1>
      <PrevNext prev="/listing901" next="/listing903" />

      <Chapter09.CreateRefFunction bookText={Chapter09.mobydick} />
    </Route>
    <Route path="/listing903">
      <Helmet>
        <title>
          ReactJS Foundations: Calling a DOM Method on a Child Using a Ref
        </title>
      </Helmet>
      <h1>Listing 9-3: Calling a DOM Method on a Child Using a Ref</h1>
      <PrevNext prev="/listing902" next="/listing904" />

      <Chapter09.TextReader bookText={Chapter09.mobydick} />
    </Route>
    <Route path="/listing904">
      <Helmet>
        <title>ReactJS Foundations: Creating a Callback Ref</title>
      </Helmet>
      <h1>Listing 9-4: Creating a Callback Ref</h1>
      <PrevNext prev="/listing903" next="/listing905" />

      <Chapter09.TextReaderCallback bookText={Chapter09.mobydick} />
    </Route>
    <Route path="/listing905">
      <Helmet>
        <title>
          ReactJS Foundations: Passing a ref Callback as an Inline Function
        </title>
      </Helmet>
      <h1>Listing 9-5: Passing a ref Callback as an Inline Function</h1>
      <PrevNext prev="/listing904" next="/listing906" />

      <Chapter09.TextReaderCallback2 bookText={Chapter09.mobydick} />
    </Route>
    <Route path="/listing906">
      <Helmet>
        <title>
          ReactJS Foundations: Selecting and Copying Text with a ref
        </title>
      </Helmet>
      <h1>Listing 9-6: Selecting and Copying Text with a ref</h1>
      <PrevNext prev="/listing905" next="/listing907" />

      <Chapter09.CodeDisplay yourCode="8675309" />
    </Route>
    <Route path="/listing907">
      <Helmet>
        <title>ReactJS Foundations: A React Audio Player</title>
      </Helmet>
      <h1>Listing 9-7: A React Audio Player</h1>
      <PrevNext prev="/listing906" next="/listing908" />

      <Chapter09.AudioPlayer />
    </Route>
    <Route path="/listing908">
      <Helmet>
        <title>ReactJS Foundations: Scrolling to an Element with a ref</title>
      </Helmet>
      <h1>Listing 9-8: Scrolling to an Element with a ref</h1>
      <PrevNext prev="/listing907" next="/listing1001" />

      <Chapter09.ScrollToDemo />
    </Route>
    <Route path="/listing1001">
      <Helmet>
        <title>ReactJS Foundations: Adding an HTML Link to the HTML File</title>
      </Helmet>
      <h1>Listing 10-1: Adding an HTML Link to the HTML File</h1>
      <PrevNext prev="/listing908" next="/listing1002" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"

    <link rel="stylesheet" href="%PUBLIC_URL%/css/style.css" />

    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
</html>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1002">
      <Helmet>
        <title>ReactJS Foundations: Including CSS in a Component</title>
      </Helmet>
      <h1>Listing 10-2: Including CSS in a Component</h1>
      <PrevNext prev="/listing1001" next="/listing1003" />

      <Chapter10.ArticleLink />
    </Route>
    <Route path="/listing1003">
      <Helmet>
        <title>ReactJS Foundations: Cascading Styles in Components</title>
      </Helmet>
      <h1>Listing 10-3: Cascading Styles in Components</h1>
      <PrevNext prev="/listing1002" next="/listing1004" />

      <Chapter10.StyledParent />
    </Route>
    <Route path="/listing1004">
      <Helmet>
        <title>ReactJS Foundations: Using Inline Styles in React</title>
      </Helmet>
      <h1>Listing 10-4: Using Inline Styles in React</h1>
      <PrevNext prev="/listing1003" next="/listing1005" />

      <Chapter10.WarningMessage warningMessage="Look out!" />
    </Route>
    <Route path="/listing1005">
      <Helmet>
        <title>
          ReactJS Foundations: CSS rule-sets vs. JavaScript style objects
        </title>
      </Helmet>
      <h1>Listing 10-5: CSS rule-sets vs. JavaScript style objects</h1>
      <PrevNext prev="/listing1004" next="/listing1006" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`/* CSS rule-set */
.headingStyle{
  background-color: #999999;
  color: #eee;
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
}

//JavaScript style object
const headingStyle = {
  backgroundColor: '#999999',
  color: '#eee',
  border: '1px solid black',
  borderRadius: '4px',
  width: '50%'
};
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1006">
      <Helmet>
        <title>
          ReactJS Foundations: Using Variables to Hold Style Objects
        </title>
      </Helmet>
      <h1>Listing 10-6: Using Variables to Hold Style Objects</h1>
      <PrevNext prev="/listing1005" next="/listing1007" />

      <Chapter10.WarningMessageVars warningMessage="Look out!" />
    </Route>
    <Route path="/listing1007">
      <Helmet>
        <title>ReactJS Foundations: A Style Module Library</title>
      </Helmet>
      <h1>Listing 10-7: A Style Module Library</h1>
      <PrevNext prev="/listing1006" next="/listing1008" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`export const warningStyle = {color:"red",padding:"6px",backgroundColor:"#000000"};
export const infoStyle = {color:"yellow",padding:"6px",backgroundColor:"#000000"};
export const successStyle = {color:"yellow",padding:"6px",backgroundColor:"#000000"};
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1008">
      <Helmet>
        <title>ReactJS Foundations: Importing Multiple Styles</title>
      </Helmet>
      <h1>Listing 10-8: Importing Multiple Styles</h1>
      <PrevNext prev="/listing1007" next="/listing1009" />

      <Chapter10.DisplayStatus message={{ text: 'Look Out!', type: 'info' }} />
    </Route>
    <Route path="/listing1009">
      <Helmet>
        <title>ReactJS Foundations: A CSS Module</title>
      </Helmet>
      <h1>Listing 10-9: A CSS Module</h1>
      <PrevNext prev="/listing1008" next="/listing1010" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`/* my-component.module.css */
.bigText {
  font-size: 4em;
}

.redText {
  color: #FF0000;
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1010">
      <Helmet>
        <title>ReactJS Foundations: Using a CSS Module</title>
      </Helmet>
      <h1>Listing 10-10: Using a CSS Module</h1>
      <PrevNext prev="/listing1009" next="/listing1011" />

      <Chapter10.CSSModule />
    </Route>
    <Route path="/listing1011">
      <Helmet>
        <title>ReactJS Foundations: Using Class Composition</title>
      </Helmet>
      <h1>Listing 10-11: Using Class Composition</h1>
      <PrevNext prev="/listing1010" next="/listing1012" />

      <SyntaxHighlighter language="javascript" style={github}>{`.bodyText {
  font-size: 12px;
  font-family: Georgia serif;
  color: #333;
  text-indent: 25px;
}

.firstParagraph {
  composes: bodyText;
  text-indent: 0px;
}
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing1012">
      <Helmet>
        <title>
          ReactJS Foundations: Basing a new class on an external style
        </title>
      </Helmet>
      <h1>Listing 10-12: Basing a new class on an external style</h1>
      <PrevNext prev="/listing1011" next="/listing1013" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`.checkoutButton {
  composes: button from './buttons';
  background-color: #4CAF50;
  font-size: 32px;
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1013">
      <Helmet>
        <title>ReactJS Foundations: Using Styled Components</title>
      </Helmet>
      <h1>Listing 10-13: Using Styled Components</h1>
      <PrevNext prev="/listing1012" next="/listing1101" />

      <Chapter10.ExampleStyled />
    </Route>

    <Route path="/listing1101">
      <Helmet>
        <title>ReactJS Foundations: A Number Guessing Game with useState</title>
      </Helmet>
      <h1>Listing 11-1: A Number Guessing Game with useState</h1>
      <PrevNext prev="/listing1013" next="/listing1102" />

      <Chapter11.NumberGuessing />
    </Route>
    <Route path="/listing1102">
      <Helmet>
        <title>
          ReactJS Foundations: Setter functions are bound to their creator
          component
        </title>
      </Helmet>
      <h1>
        Listing 11-2: Setter functions are bound to their creator component
      </h1>
      <PrevNext prev="/listing1101" next="/listing1103" />

      <Chapter11.ButtonContainer />
    </Route>
    <Route path="/listing1103">
      <Helmet>
        <title>ReactJS Foundations: The most basic form of useEffect</title>
      </Helmet>
      <h1>Listing 11-3: The most basic form of useEffect</h1>
      <PrevNext prev="/listing1102" next="/listing1104" />

      <Chapter11.RenderCounter />
    </Route>
    <Route path="/listing1104">
      <Helmet>
        <title>ReactJS Foundations: Starting a timer with each render</title>
      </Helmet>
      <h1>Listing 11-4: Starting a timer with each render</h1>
      <PrevNext prev="/listing1103" next="/listing1105" />

      <Chapter11.TimerFun />
    </Route>
    <Route path="/listing1105">
      <Helmet>
        <title>
          ReactJS Foundations: Creating a new timer with each render
        </title>
      </Helmet>
      <h1>Listing 11-5: Creating a new timer with each render</h1>
      <PrevNext prev="/listing1104" next="/listing1106" />

      <Chapter11.TimerRestartFun />
    </Route>
    <Route path="/listing1106">
      <Helmet>
        <title>
          ReactJS Foundations: Passing an empty array to only run useEffect on
          mount
        </title>
      </Helmet>
      <h1>
        Listing 11-6: Passing an empty array to only run useEffect on mount
      </h1>
      <PrevNext prev="/listing1105" next="/listing1107" />

      <Chapter11.TimerOnceFun />
    </Route>
    <Route path="/listing1107">
      <Helmet>
        <title>ReactJS Foundations: Specifying useEffect's dependencies</title>
      </Helmet>
      <h1>Listing 11-7: Specifying useEffect's dependencies</h1>
      <PrevNext prev="/listing1106" next="/listing1108" />

      <Chapter11.TimerConditionalFun />
    </Route>
    <Route path="/listing1108">
      <Helmet>
        <title>ReactJS Foundations: Asynchronous Requests with useEffect</title>
      </Helmet>
      <h1>Listing 11-8: Asynchronous Requests with useEffect</h1>
      <PrevNext prev="/listing1107" next="/listing1109" />

      <Chapter11.ShippingAddress />
    </Route>
    <Route path="/listing1109">
      <Helmet>
        <title>
          ReactJS Foundations: Using Context with the useContext Hook
        </title>
      </Helmet>
      <h1>Listing 11-9: Using Context with the useContext Hook</h1>
      <PrevNext prev="/listing1108" next="/listing1110" />

      <Chapter11.UsingContext />
    </Route>
    <Route path="/listing1110">
      <Helmet>
        <title>ReactJS Foundations: A Counter with useReducer</title>
      </Helmet>
      <h1>Listing 11-10: A Counter with useReducer</h1>
      <PrevNext prev="/listing1109" next="/listing1111" />

      <Chapter11.ReducerCounter />
    </Route>
    <Route path="/listing1111">
      <Helmet>
        <title>ReactJS Foundations: Passing a Payload to a Reducer</title>
      </Helmet>
      <h1>Listing 11-11: Passing a Payload to a Reducer</h1>
      <PrevNext prev="/listing1110" next="/listing1112" />

      <Chapter11.ReducerCounterPayload />
    </Route>
    <Route path="/listing1112">
      <Helmet>
        <title>
          ReactJS Foundations: Function dependencies cause unnecessary renders
        </title>
      </Helmet>
      <h1>Listing 11-12: Function dependencies cause unnecessary renders</h1>
      <PrevNext prev="/listing1111" next="/listing1113" />

      <Chapter11.CallMe />
    </Route>
    <Route path="/listing1113">
      <Helmet>
        <title>
          ReactJS Foundations: Memoized callbacks fix the unnecessary effect
          problem
        </title>
      </Helmet>
      <h1>
        Listing 11-13: Memoized callbacks fix the unnecessary effect problem
      </h1>
      <PrevNext prev="/listing1112" next="/listing1114" />

      <Chapter11.CallMeFixed />
    </Route>
    <Route path="/listing1114">
      <Helmet>
        <title>
          ReactJS Foundations: Solving performance problems with useMemo
        </title>
      </Helmet>
      <h1>Listing 11-14: Solving performance problems with useMemo</h1>
      <PrevNext prev="/listing1113" next="/listing1115" />

      <Chapter11.ShippingAddress2 />
    </Route>
    <Route path="/listing1115">
      <Helmet>
        <title>
          ReactJS Foundations: Getting the value of a textarea and counting its
          words
        </title>
      </Helmet>
      <h1>
        Listing 11-15: Getting the value of a textarea and counting its words
      </h1>
      <PrevNext prev="/listing1114" next="/listing1116" />

      <Chapter11.WordCount />
    </Route>
    <Route path="/listing1116">
      <Helmet>
        <title>ReactJS Foundations: Customizing a value exposed by a ref</title>
      </Helmet>
      <h1>Listing 11-16: Customizing a value exposed by a ref</h1>
      <PrevNext prev="/listing1115" next="/listing1117" />

      <Chapter11.CountingBox />
    </Route>
    <Route path="/listing1117">
      <Helmet>
        <title>
          ReactJS Foundations: useZipLookup: a custom hook to return location
          data based on a zipcode
        </title>
      </Helmet>
      <h1>
        Listing 11-17: useZipLookup: a custom hook to return location data based
        on a zipcode
      </h1>
      <PrevNext prev="/listing1116" next="/listing1118" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState} from 'react';

function useZipLookup(zipcode){
  const [city,setCity] = useState('');
  const [state,setState] = useState('');

  const API_URL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
  const API_KEY = 'DEMOAPIKEY';

  useEffect(()=>{
    if (zipcode){  
      const loadAddressData = async ()=>{
        const response = await fetch(\`\${API_URL}\${zipcode}?key=\${API_KEY}\`);
        const data = await response.json();
        setCity(data.City);
        setState(data.State);
      }

      loadAddressData();

    }
    },[zipcode]);

    return [city,state];
}

export default useZipLookup;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1118">
      <Helmet>
        <title>ReactJS Foundations: Using the useZipLookup custom hook</title>
      </Helmet>
      <h1>Listing 11-18: Using the useZipLookup custom hook</h1>
      <PrevNext prev="/listing1117" next="/listing1119" />

      <Chapter11.ShippingAddress2 />
    </Route>
    <Route path="/listing1119">
      <Helmet>
        <title>ReactJS Foundations: Using useDebugValue</title>
      </Helmet>
      <h1>Listing 11-19: Using useDebugValue</h1>
      <PrevNext prev="/listing1118" next="/listing1120" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useEffect,useState,useDebugValue} from 'react';

function useZipLookup(zipcode){
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  
  useDebugValue(zipcode);
  
  const API_URL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
  const API_KEY = 'DEMOAPIKEY';

  useEffect(()=>{
    if (zipcode){  
      const loadAddressData = async ()=>{
        const response = await fetch(\`\${API_URL}\${zipcode}?key=\${API_KEY}\`);
        const data = await response.json();
        setCity(data.City);
        setState(data.State);
      }

      loadAddressData();

    }
    },[zipcode]);

    return [city,state];
}

export default useZipLookup;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1120">
      <Helmet>
        <title>ReactJS Foundations: Using useAxios</title>
      </Helmet>
      <h1>Listing 11-20: Using useAxios</h1>
      <PrevNext prev="/listing1119" next="/listing1121" />

      <Chapter11.WeatherWidget />
    </Route>
    <Route path="/listing1121">
      <Helmet>
        <title>ReactJS Foundations: Using useForm</title>
      </Helmet>
      <h1>Listing 11-21: Using useForm</h1>
      <PrevNext prev="/listing1120" next="/listing1201" />

      <Chapter11.UsingUseForm />
    </Route>
    <Route path="/listing1201">
      <Helmet>
        <title>ReactJS Foundations: A Simple Routing Component</title>
      </Helmet>
      <h1>Listing 12-1: A Simple Routing Component</h1>
      <PrevNext prev="/listing1121" next="/listing1202" />

      <Chapter12.ChooseYourAdventure />
    </Route>
    <Route path="/listing1202">
      <Helmet>
        <title>ReactJS Foundations: A list of NavLinks with sub-items</title>
      </Helmet>
      <h1>Listing 12-2: A list of NavLinks with sub-items</h1>
      <PrevNext prev="/listing1201" next="/listing1203" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<ul>
  <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
  <li><NavLink to="/aboutUs" activeClassName="active">About Us</NavLink>
    <ul>
      <li>
          <NavLink to="/aboutUs/team" activeClassName="active">
            Meet the Team
          </NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs/history" activeClassName="active">
          Company History
        </NavLink>
      </li>
    </ul>
  </li>
<li><NavLink to="/contactUs" activeClassName="active">Contact Us</NavLink></li>
</ul>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1203">
      <Helmet>
        <title>
          ReactJS Foundations: Using the exact attribute on NavLink components
        </title>
      </Helmet>
      <h1>Listing 12-3: Using the exact attribute on NavLink components</h1>
      <PrevNext prev="/listing1202" next="/listing1204" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`
            <ul>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink exact to="/aboutUs" activeStyle={{color:'green'}}>About Us</NavLink>
            <ul>
              <li><NavLink exact to="/aboutUs/team" activeClassName="active">Meet the Team</NavLink></li>
              <li><NavLink exact to="/aboutUs/history" activeClassName="active">Company History</NavLink></li>
            </ul>
          </li>
          <li><NavLink exact to="/contactUs" activeClassName="active">Contact Us</NavLink></li>
        </ul>
        `}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1204">
      <Helmet>
        <title>
          ReactJS Foundations: Multiple routes in a component may have matches
        </title>
      </Helmet>
      <h1>Listing 12-4: Multiple routes in a component may have matches</h1>
      <PrevNext prev="/listing1203" next="/listing1205" />

      <Chapter12.MultipleMatches />
    </Route>
    <Route path="/listing1205">
      <Helmet>
        <title>ReactJS Foundations: Using URL parameters</title>
      </Helmet>
      <h1>Listing 12-5: Using URL parameters</h1>
      <PrevNext prev="/listing1204" next="/listing1206" />

      <Chapter12.URLParams />
    </Route>
    <Route path="/listing1206">
      <Helmet>
        <title>ReactJS Foundations: Using the useParams Hook</title>
      </Helmet>
      <h1>Listing 12-6: Using the useParams Hook</h1>
      <PrevNext prev="/listing1205" next="/listing1207" />

      <Chapter12.URLParamsHook />
    </Route>
    <Route path="/listing1207">
      <Helmet>
        <title>ReactJS Foundations: Using the component attribute</title>
      </Helmet>
      <h1>Listing 12-7: Using the component attribute</h1>
      <PrevNext prev="/listing1206" next="/listing1208" />

      <Chapter12.ComponentProp />
    </Route>
    <Route path="/listing1208">
      <Helmet>
        <title>ReactJS Foundations: Using the render attribute</title>
      </Helmet>
      <h1>Listing 12-8: Using the render attribute</h1>
      <PrevNext prev="/listing1207" next="/listing1209" />

      <Chapter12.RenderProp />
    </Route>
    <Route path="/listing1209">
      <Helmet>
        <title>ReactJS Foundations: Rendering a render prop</title>
      </Helmet>
      <h1>Listing 12-9: Rendering a render prop</h1>
      <PrevNext prev="/listing1208" next="/listing1210" />

      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`function Route(props) {

return (
  
    {props.render({})}
          
);
}

export default Route;
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing1210">
      <Helmet>
        <title>ReactJS Foundations: Switching between multiple routes</title>
      </Helmet>
      <h1>Listing 12-10: Switching between multiple routes</h1>
      <PrevNext prev="/listing1209" next="/listing1211" />

      <SyntaxHighlighter language="javascript" style={github}>{`<Switch>  
  <Route path="/">
    <p>home</p>
  </Route>
  <Route path="/aboutUs">
    <p>about us</p>
  </Route>
  <Route path="/aboutUs/team">
    <p>meet the team</p>
  </Route>
</Switch>
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing1211">
      <Helmet>
        <title>ReactJS Foundations: Rendering a default route</title>
      </Helmet>
      <h1>Listing 12-11: Rendering a default route</h1>
      <PrevNext prev="/listing1210" next="/listing1212" />

      <SyntaxHighlighter language="javascript" style={github}>{`<Switch>  
  <Route path="/">
    <p>home</p>
  </Route>
  <Route path="/aboutUs">
    <p>about us</p>
  </Route>
  <Route path="/aboutUs/team">
    <p>meet the team</p>
  </Route>
  <Route>
    <PageNotFound />
  </Route>
</Switch>
`}</SyntaxHighlighter>
    </Route>
    <Route path="/listing1212">
      <Helmet>
        <title>
          ReactJS Foundations: Redirecting from one location to another
        </title>
      </Helmet>
      <h1>Listing 12-12: Redirecting from one location to another</h1>
      <PrevNext prev="/listing1211" next="/listing1213" />

      <Chapter12.UserListRedirect />
    </Route>
    <Route path="/listing1213">
      <Helmet>
        <title>ReactJS Foundations: Using withRouter</title>
      </Helmet>
      <h1>Listing 12-13: Using withRouter</h1>
      <PrevNext prev="/listing1212" next="/listing1214" />

      <Chapter12.NavMenuWithRouter />
    </Route>
    <Route path="/listing1214">
      <Helmet>
        <title>ReactJS Foundations: Using useHistory</title>
      </Helmet>
      <h1>Listing 12-14: Using useHistory</h1>
      <PrevNext prev="/listing1213" next="/listing1215" />

      <Chapter12.UsingHistory />
    </Route>
    <Route path="/listing1215">
      <Helmet>
        <title>
          ReactJS Foundations: Viewing properties of the current location object
        </title>
      </Helmet>
      <h1>Listing 12-15: Viewing properties of the current location object</h1>
      <PrevNext prev="/listing1214" next="/listing1216" />

      <Chapter12.ViewLocation />
    </Route>
    <Route path="/listing1216">
      <Helmet>
        <title>
          ReactJS Foundations: Dynamic Links and Routes in nested Routes
        </title>
      </Helmet>
      <h1>Listing 12-16: Dynamic Links and Routes in nested Routes</h1>
      <PrevNext prev="/listing1215" next="/listing1301" />

      <Chapter12.NestedRoutes />
    </Route>
    <Route path="/listing1301">
      <Helmet>
        <title>ReactJS Foundations: An ErrorBoundary component</title>
      </Helmet>
      <h1>Listing 13-1: An ErrorBoundary component</h1>
      <PrevNext prev="/listing1216" next="/listing1302" />

      <Chapter13.ErrorBoundary />
    </Route>
    <Route path="/listing1302">
      <Helmet>
        <title>ReactJS Foundations: A component with an error</title>
      </Helmet>
      <h1>Listing 13-2: A component with an error</h1>
      <PrevNext prev="/listing1301" next="/listing1303" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function BadComponent(){
  return (
    {oops:"this is not good"}
  );
}

export default BadComponent;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1303">
      <Helmet>
        <title>ReactJS Foundations: Exporting with an ErrorBoundary</title>
      </Helmet>
      <h1>Listing 13-3: Exporting with an ErrorBoundary</h1>
      <PrevNext prev="/listing1302" next="/listing1304" />

      <Chapter13.BadComponentWithBoundary />
    </Route>
    <Route path="/listing1304">
      <Helmet>
        <title>
          ReactJS Foundations: Logging the error and the info object to the
          console
        </title>
      </Helmet>
      <h1>
        Listing 13-4: Logging the error and the info object to the console
      </h1>
      <PrevNext prev="/listing1303" next="/listing1305" />

      <Chapter13.ErrorBoundaryWithDidCatch>
        <Chapter13.BadComponent />
      </Chapter13.ErrorBoundaryWithDidCatch>
    </Route>
    <Route path="/listing1305">
      <Helmet>
        <title>ReactJS Foundations: The Logger Component</title>
      </Helmet>
      <h1>Listing 13-5: The Logger Component</h1>
      <PrevNext prev="/listing1304" next="/listing1306" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

logger.push({ 'logglyKey': 'YOUR CUSTOMER TOKEN HERE' });

export default logger;`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1306">
      <Helmet>
        <title>
          ReactJS Foundations: The updated ErrorBoundary with remote logging
        </title>
      </Helmet>
      <h1>Listing 13-6: The updated ErrorBoundary with remote logging</h1>
      <PrevNext prev="/listing1305" next="/listing1307" />

      <Chapter13.ErrorBoundaryWithLogging>
        <Chapter13.BadComponent />
      </Chapter13.ErrorBoundaryWithLogging>
    </Route>
    <Route path="/listing1307">
      <Helmet>
        <title>ReactJS Foundations: A Component That Sometimes Errors</title>
      </Helmet>
      <h1>Listing 13-7: A Component That Sometimes Errors</h1>
      <PrevNext prev="/listing1306" next="/listing1308" />

      <Chapter13.SometimesBad />
    </Route>
    <Route path="/listing1308">
      <Helmet>
        <title>
          ReactJS Foundations: Providing a reset link in the Error Boundary
        </title>
      </Helmet>
      <h1>Listing 13-8: Providing a reset link in the Error Boundary</h1>
      <PrevNext prev="/listing1307" next="/listing1309" />

      <Chapter13.ErrorBoundaryWithReset>
        <Chapter13.SometimesBad />
      </Chapter13.ErrorBoundaryWithReset>
    </Route>
    <Route path="/listing1309">
      <Helmet>
        <title>
          ReactJS Foundations: Specifying a fallback component with
          react-error-boundary
        </title>
      </Helmet>
      <h1>
        Listing 13-9: Specifying a fallback component with react-error-boundary
      </h1>
      <PrevNext prev="/listing1308" next="/listing1310" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import ErrorBoundary from 'react-error-boundary';

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <SyntaxHighlighter language="javascript" style={github}>{error.message}</SyntaxHighlighter>
    </div>  
  )
}

function BadComponentContainer(){
    return (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}>
            <BadComponent />
        </ErrorBoundary>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1310">
      <Helmet>
        <title>
          ReactJS Foundations: Using try/catch to catch errors in an
          ErrorBoundary
        </title>
      </Helmet>
      <h1>
        Listing 13-10: Using try/catch to catch errors in an ErrorBoundary
      </h1>
      <PrevNext prev="/listing1309" next="/listing1311" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {Component} from 'react';
import logger from './logger';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };  
  }

  componentDidCatch(error,info){
    try {
      logger.push({ error, info });
    } catch(error){
      // handle the error here
    }
  }
  
  render() {

    if (this.state.hasError) {
      return <h1>Oops! There's been an error.</h1>;   
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1311">
      <Helmet>
        <title>ReactJS Foundations: Using useErrorHandler()</title>
      </Helmet>
      <h1>Listing 13-11: Using useErrorHandler()</h1>
      <PrevNext prev="/listing1310" next="/listing1601" />

      <Chapter13.ErrorBoundaryWithReset>
        <Chapter13.UseErrorHandler />
      </Chapter13.ErrorBoundaryWithReset>
    </Route>

    <Route path="/chapter13example">
      <ErrorBoundary>
        <Chapter13.SampleTree />
      </ErrorBoundary>
    </Route>
    <Route path="/chapter13example2">
      <Chapter13.SampleTreeWithErrorBoundary />
    </Route>
    <Route path="/listing1601">
      <Helmet>
        <title>ReactJS Foundations: Callbacks within Callbacks</title>
      </Helmet>
      <h1>Listing 16-1: Callbacks within Callbacks</h1>
      <PrevNext prev="/listing1311" next="/listing1602" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`function userCheck(username, password, callback){
  db.verifyUser(username, password, (error, userInfo) => {
    if (error) {
      callback(error)
    }else{
      db.getRoles(username, (error, roles) => {
        if (error){
          callback(error)
        }else {
          db.logAccess(username, (error) => {
            if (error){
              callback(error);
            }else{
              callback(null, userInfo, roles);
            }
          })
        }
      })
    }
  })
};
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1602">
      <Helmet>
        <title>
          ReactJS Foundations: Loading initial data in a class component
        </title>
      </Helmet>
      <h1>Listing 16-2: Loading initial data in a class component</h1>
      <PrevNext prev="/listing1601" next="/listing1603" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {Component} from 'react';

class NewsFeed extends Component {
    constructor(props){
        super(props);
        this.state={
            news:[]
        }
    }
    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=[YOUR KEY]')
          .then(response => response.json())
          .then(data => {
              this.setState({news:data.articles})})
          .catch(error => console.error(error))
    }
    render(){
        const todaysNews = this.state.news.map((article)=>{
            return (<p>{article.title}</p>);
        })
        return(
            
              <h1>Today's News</h1>
              {todaysNews}
            
        )
    }
}

export default NewsFeed;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1603">
      <Helmet>
        <title>
          ReactJS Foundations: Loading initial data in a function component
        </title>
      </Helmet>
      <h1>Listing 16-3: Loading initial data in a function component</h1>
      <PrevNext prev="/listing1602" next="/listing1604" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useEffect} from 'react';

const NewsFeedFunction = () => {
    const [news,setNews] = useState([]);
    useEffect(()=> {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=[YOUR KEY]')
          .then(response => response.json())
          .then(data => {
            setNews(data.articles)
          })
          .catch(error => console.error(error))
    },[])

    const todaysNews = news.map((article)=>{
        return (<p>{article.title}</p>);
    })

    return(
        
            <h1>Today's News</h1>
            {todaysNews}
        
    )
}

export default NewsFeedFunction;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1604">
      <Helmet>
        <title>ReactJS Foundations: Using Fetch in Response to Events</title>
      </Helmet>
      <h1>Listing 16-4: Using Fetch in Response to Events</h1>
      <PrevNext prev="/listing1603" next="/listing1605" />
      <Chapter16.Restful />
    </Route>
    <Route path="/listing1605">
      <Helmet>
        <title>ReactJS Foundations: Performing a GET request with Axios</title>
      </Helmet>
      <h1>Listing 16-5: Performing a GET request with Axios</h1>
      <PrevNext prev="/listing1604" next="/listing1606" />

      <Chapter16.Restful2 />
    </Route>
    <Route path="/listing1606">
      <Helmet>
        <title>ReactJS Foundations: A Clicker App</title>
      </Helmet>
      <h1>Listing 16-6: A Clicker App</h1>
      <PrevNext prev="/listing1605" next="/listing1607" />

      <Chapter16.Clicker1 />
    </Route>
    <Route path="/listing1607">
      <Helmet>
        <title>
          ReactJS Foundations: Writing to localStorage When the State Changes
        </title>
      </Helmet>
      <h1>Listing 16-7: Writing to localStorage When the State Changes</h1>
      <PrevNext prev="/listing1606" next="/listing1608" />

      <Chapter16.Clicker2 />
    </Route>
    <Route path="/listing1608">
      <Helmet>
        <title>ReactJS Foundations: Reading localStorage Data in Clicker</title>
      </Helmet>
      <h1>Listing 16-8: Reading localStorage Data in Clicker</h1>
      <PrevNext prev="/listing1607" next="/listing1609" />

      <Chapter16.Clicker3 />
    </Route>
    <Route path="/listing1609">
      <Helmet>
        <title>ReactJS Foundations: Clearing localStorage in the Clicker</title>
      </Helmet>
      <h1>Listing 16-9: Clearing localStorage in the Clicker</h1>
      <PrevNext prev="/listing1608" next="/listing1701" />

      <Chapter16.Clicker4 />
    </Route>
    <Route path="/listing1701">
      <Helmet>
        <title>ReactJS Foundations: Using Prop Drilling</title>
      </Helmet>
      <h1>Listing 17-1: Using Prop Drilling</h1>
      <PrevNext prev="/listing1609" next="/listing1702" />

      <Chapter17.PropDrilling story="test" />
    </Route>
    <Route path="/listing1702">
      <Helmet>
        <title>ReactJS Foundations: A Context for User Preferences</title>
      </Helmet>
      <h1>Listing 17-2: A Context for User Preferences</h1>
      <PrevNext prev="/listing1701" next="/listing1703" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`const PrefsContext = React.createContext({lang:'English',timezone:'Pacific Time'});`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1703">
      <Helmet>
        <title>ReactJS Foundations: Using a Provider Component</title>
      </Helmet>
      <h1>Listing 17-3: Using a Provider Component</h1>
      <PrevNext prev="/listing1702" next="/listing1704" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import React, {useState} from 'react';
import {PrefsContext} from './contexts/UserPrefs';

const UserPrefsProvider = ({ children }) => {
  const [lang, setLang] = useState("English");
  const [timezone, setTimezone] = useState("UTC");
  return (
    <PrefsContext.Provider value={{ lang, timezone }}>
      {children}
    </PrefsContext.Provider>
  );
};

function App(){
  return (
    <UserPrefsProvider>
      <Header />
      <Main />
      <Footer />
    </UserPrefsProvider>
  )
}

export default App;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1704">
      <Helmet>
        <title>
          ReactJS Foundations: Consuming a Context in a Class Component
        </title>
      </Helmet>
      <h1>Listing 17-4: Consuming a Context in a Class Component</h1>
      <PrevNext prev="/listing1703" next="/listing1705" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';
import {PrefsContext} from './contexts/UserPrefs';

class TimeDisplay extends React.Component {

  static contextType = PrefsContext;
  
  render() {
    return (
      
        Your language preference is {this.context.lang}.<br />
        Your timezone is {this.context.timezone}.
      
    )
  }
}

export default TimeDisplay;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1705">
      <Helmet>
        <title>ReactJS Foundations: Using the Context.Consumer Component</title>
      </Helmet>
      <h1>Listing 17-5: Using the Context.Consumer Component</h1>
      <PrevNext prev="/listing1704" next="/listing1706" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';
import {PrefsContext} from './contexts/UserPrefs';

class TimeDisplay extends React.Component {
  
  render() {
    return (
      <PrefsContext.Consumer>
        {userPrefs => {
          
            Your language preference is {userPrefs.lang}.<br />
            Your timezone is {userPrefs.timezone}.
          
         }};
      </ PrefsContext.Consumer >
    )
  }
}

export default TimeDisplay;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1706">
      <Helmet>
        <title>
          ReactJS Foundations: Consuming a Context in a Function Component
        </title>
      </Helmet>
      <h1>Listing 17-6: Consuming a Context in a Function Component</h1>
      <PrevNext prev="/listing1705" next="/listing1707" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useContext} from 'react';
import {PrefsContext} from './contexts/UserPrefs';

function TimeDisplay(props){
  const userPrefs = useContext(PrefsContext);

  return (
    
      Your language preference is {userPrefs.timezone}.<br />
      Your timezone is {userPrefs.timezone}.
    
  );
}

export default TimeDisplay;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1707">
      <Helmet>
        <title>
          ReactJS Foundations: Getting Data to a Deeply-nested Component with
          Prop Drilling
        </title>
      </Helmet>
      <h1>
        Listing 17-7: Getting Data to a Deeply-nested Component with Prop
        Drilling
      </h1>
      <PrevNext prev="/listing1706" next="/listing1708" />

      <Chapter17.DashboardProps />
    </Route>
    <Route path="/listing1708">
      <Helmet>
        <title>
          ReactJS Foundations: Eliminating Prop Drilling with Context
        </title>
      </Helmet>
      <h1>Listing 17-8: Eliminating Prop Drilling with Context</h1>
      <PrevNext prev="/listing1707" next="/listing1709" />

      <Chapter17.DashboardContext />
    </Route>
    <Route path="/listing1709">
      <Helmet>
        <title>
          ReactJS Foundations: Using a component outside of a required Context
        </title>
      </Helmet>
      <h1>Listing 17-9: Using a component outside of a required Context</h1>
      <PrevNext prev="/listing1708" next="/listing1710" />

      <Chapter17.ComponentOutsideContext />
    </Route>
    <Route path="/listing1710">
      <Helmet>
        <title>ReactJS Foundations: Using Composition Instead of Context</title>
      </Helmet>
      <h1>Listing 17-10: Using Composition Instead of Context</h1>
      <PrevNext prev="/listing1709" next="/listing1711" />

      <Chapter17.DashboardComposition />
    </Route>
    <Route path="/listing1711">
      <Helmet>
        <title>ReactJS Foundations: Making a Provider</title>
      </Helmet>
      <h1>Listing 17-11: Making a Provider</h1>
      <PrevNext prev="/listing1710" next="/listing1712" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import React, {createContext, useState} from 'react';
export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
    const [lengthUnit, setLengthUnit] = useState("cm");
    const [tempUnit, setTempUnit] = useState("c");
    return (
        <UnitsContext.Provider value={{ lengthUnit, setLengthUnit, tempUnit, setTempUnit }}>
            {children}
        </UnitsContext.Provider>
    );
};`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1712">
      <Helmet>
        <title>ReactJS Foundations: Providing a Context to a Tree</title>
      </Helmet>
      <h1>Listing 17-12: Providing a Context to a Tree</h1>
      <PrevNext prev="/listing1711" next="/listing1713" />

      <Chapter17.UnitsContext />
    </Route>
    <Route path="/listing1713">
      <Helmet>
        <title>ReactJS Foundations: Consuming a Context</title>
      </Helmet>
      <h1>Listing 17-13: Consuming a Context</h1>
      <PrevNext prev="/listing1712" next="/listing1801" />

      <Chapter17.UnitsContext />
    </Route>
    <Route path="/listing1801">
      <Helmet>
        <title>
          ReactJS Foundations: An HTML document with multiple nodes in the body
        </title>
      </Helmet>
      <h1>Listing 18-1: An HTML document with multiple nodes in the body</h1>
      <PrevNext prev="/listing1713" next="/listing1802" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactJS Foundations: Portal Demo</title>
</head>
<body>
    <div style="display:flex;">
      <div id="root" style="width:50%"></div>
      <div id="sidebar" style="width:50%"></div>
    </div>
</body>
</html>
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1802">
      <Helmet>
        <title>ReactJS Foundations: Creating a Portal</title>
      </Helmet>
      <h1>Listing 18-2: Creating a Portal</h1>
      <PrevNext prev="/listing1801" next="/listing1803" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {createPortal} from 'react-dom';

function SidebarHelp(props){
  return createPortal(
    <p>{props.helpText}</p>,
    document.getElementById('sidebar')
  );
}

export default SidebarHelp;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1803">
      <Helmet>
        <title>ReactJS Foundations: Using the SidebarHelp Component</title>
      </Helmet>
      <h1>Listing 18-3: Using the SidebarHelp Component</h1>
      <PrevNext prev="/listing1802" next="/listing1804" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import Chart from './Chart';
import SidebarHelp from './SidebarHelp';

function SalesChart(props){
  return (
    
      <Chart type="sales" />
      <SidebarHelp helpText="This chart shows your sales over time." />
    
  )
}

export default SalesChart;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1804">
      <Helmet>
        <title>ReactJS Foundations: One Way to Style a Modal</title>
      </Helmet>
      <h1>Listing 18-4: One Way to Style a Modal</h1>
      <PrevNext prev="/listing1803" next="/listing1805" />
      <SyntaxHighlighter language="javascript" style={github}>
        {`.modalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-top: 60px;
  background-color: rgba(50,50,50,0.6);
}
.modalContainer {
    border:1px solid black;
    background: white;
    width: 50%;
    margin: 0 auto;
    padding: 25px;
}
.modalTitle {
  text-align:center;
  background-color: black;
  color: white;

}
.modalContent {
  background: white;
  text-align: center;
}
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1805">
      <Helmet>
        <title>ReactJS Foundations: The App Component</title>
      </Helmet>
      <h1>Listing 18-5: The App Component</h1>
      <PrevNext prev="/listing1804" next="/listing1806" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import Modal from './Modal';
import './styles.css';

function App() {

  const[isModalOpen,setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>Open the Modal</button>

      <Modal title="Warning" isOpen={isModalOpen}>
        <p>This Modal is awesome.</p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
  );
}

export default App;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1806">
      <Helmet>
        <title>ReactJS Foundations: The Finished Modal Component</title>
      </Helmet>
      <h1>Listing 18-6: The Finished Modal Component</h1>
      <PrevNext prev="/listing1805" next="/listing1807" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import ReactDOM from 'react-dom';
import "./styles.css";

function Modal(props){

  return (
    
      {props.isOpen &&
        ReactDOM.createPortal((  
          <div className="modalOverlay">
            <div className="modalContainer">
              <h1 className="modalTitle">{props.title}</h1>
              <div className="modalContent">
                {props.children}
              </div>
            </div>
          </div>)
        ,document.getElementById('modal'))}
    
  )
}
export default Modal;
`}
      </SyntaxHighlighter>
    </Route>
    <Route path="/listing1807">
      <Helmet>
        <title>ReactJS Foundations: Using a ref to set keyboard focus</title>
      </Helmet>
      <h1>Listing 18-7: Using a ref to set keyboard focus</h1>
      <PrevNext prev="/listing1806" next="/WhereToBuy" />

      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState,useRef,useEffect} from 'react';
import Modal from './Modal';
import './styles.css';

function App() {
  const CSCRef = useRef()
  const[isModalOpen,setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(()=>!isModalOpen);
  }

  useEffect(() => {
    setTimeout(()=>{!isModalOpen && CSCRef.current.focus()},1000)
  }, [isModalOpen]);

  return (
    
    <div style={{padding:"60px"}}>
      <label>Card Security Code:<input ref={CSCRef} /></label>
      <button onClick={toggleModal}>What's This?</button>
      
      <Modal title="What is the CSC Code?" isOpen={isModalOpen}>
        <p>A credit card security code is the 3-4 digit number that 
          is printed, not embossed, on all credit cards. The length 
          and location of a credit card’s security code depend on 
          what network the card is on. </p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
    
  );
}

export default App;
`}
      </SyntaxHighlighter>
    </Route>
  </Switch>
);
