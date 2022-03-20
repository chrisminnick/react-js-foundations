import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

function MainNav() {
  return (
    <nav>
      <ul id="buttons">
        <li>
          <div className="Collapsible">
            <span className="Collapsible__trigger is-closed no-arrow">
              <Link to="/" style={{ color: '#b4032d' }}>
                Home
              </Link>
            </span>
          </div>
        </li>
        <li>
          <div className="Collapsible">
            <span className="Collapsible__trigger is-closed no-arrow">
              <Link to="/blog" style={{ color: '#b4032d' }}>
                Blog and Errata
              </Link>
            </span>
          </div>
        </li>
        <li>
          <div className="Collapsible">
            <span className="Collapsible__trigger is-closed no-arrow">
              <Link to="/WhereToBuy" style={{ color: '#b4032d' }}>
                Buy the Book
              </Link>
            </span>
          </div>
        </li>
        <li>
          <Collapsible trigger="About the Book">
            <ul>
              <li>
                <Link to="/intro">Introduction</Link>
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
                <Link to="/Listing102">
                  Listing 1-2: Changing the state data in a component
                </Link>
              </li>
              <li>
                <Link to="/listing103">
                  Listing 1-3: An interactive Hello, World component
                </Link>
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
                <Link to="/listing302">
                  Listing 3-2: Using a user-defined React component in JSX
                </Link>
              </li>
              <li>
                <Link to="/listing303">
                  Listing 3-3: Custom attributes in HTML must start with data-
                </Link>
              </li>
              <li>
                <Link to="/listing304">
                  Listing 3-4: User-defined elements can have any attributes
                </Link>
              </li>
              <li>
                <Link to="/listing305">
                  Listing 3-5: Using literal JavaScript inside of JSX
                </Link>
              </li>
              <li>
                <Link to="/listing306">
                  Listing 3-6: Object literals in JSX result in double curly
                  braces
                </Link>
              </li>
              <li>
                <Link to="/listing307">
                  Listing 3-7: Enclose comments in curly braces
                </Link>
              </li>
              <li>
                <Link to="/listing308">
                  Listing 3-8: Using Element Variables
                </Link>
              </li>
              <li>
                <Link to="/listing309">
                  Listing 3-9: Conditional Rendering with Element Variables
                </Link>
              </li>
              <li>
                <Link to="/listing310">
                  Listing 3-10: Conditional Rendering with &&
                </Link>
              </li>
              <li>
                <Link to="/listing311">
                  Listing 3-11: Using the conditional operator
                </Link>
              </li>
              <li>
                <Link to="/listing312">
                  Listing 3-12: Using an arrow function as an event handler
                </Link>
              </li>
              <li>
                <Link to="/listing313">
                  Listing 3-13: Immediately invoking a function in JSX
                </Link>
              </li>
              <li>
                <Link to="/listing314">Listing 3-14: Using React.Fragment</Link>
              </li>
              <li>
                <Link to="/listing315">
                  Listing 3-15: Using React.Fragment's Short Syntax
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 4 - All About Components">
            <ul>
              <li>
                <Link to="/listing401">
                  Listing 4-1: Components Define Elements
                </Link>
              </li>
              <li>
                <Link to="/listing402">
                  Listing 4-2: Components can be imported into other components
                </Link>
              </li>
              <li>
                <Link to="/listing403">
                  Listing 4-3: Using components to reduce complexity
                </Link>
              </li>
              <li>
                <Link to="/listing404">
                  Listing 4-4: Putting everything in one component
                </Link>
              </li>
              <li>
                <Link to="/listing405">Listing 4-5: Passing props</Link>
              </li>
              <li>
                <Link to="/listing406">
                  Listing 4-6: Using props inside a component
                </Link>
              </li>
              <li>
                <Link to="/listing407">
                  Listing 4-7: An improved version of the Farm component
                </Link>
              </li>
              <li>
                <Link to="/listing408">
                  Listing 4-8: Creating a Component with React.createClass
                </Link>
              </li>
              <li>
                <Link to="/listing409">
                  Listing 4-9: Creating a Component Using a Class
                </Link>
              </li>
              <li>
                <Link to="/listing410">
                  Listing 4-10: Not binding your functions results in errors
                </Link>
              </li>
              <li>
                <Link to="/listing411">
                  Listing 4-11: Binding a function and using it in another class
                </Link>
              </li>
              <li>
                <Link to="/listing412">
                  Listing 4-12: Using state and setState in a Class Component
                </Link>
              </li>
              <li>
                <Link to="/listing413">
                  Listing 4-13: setState() is asynchronous
                </Link>
              </li>
              <li>
                <Link to="/listing414">
                  Listing 4-14: Rendering a figure and caption
                </Link>
              </li>
              <li>
                <Link to="/listing415">
                  Listing 4-15: The FigureList component
                </Link>
              </li>
              <li>
                <Link to="/listing416">
                  Listing 4-16: Using props to pass data to a child component
                </Link>
              </li>
              <li>
                <Link to="/listing417">
                  Listing 4-17: Using props in a class component
                </Link>
              </li>
              <li>
                <Link to="/listing418">
                  Listing 4-18: A typical class component
                </Link>
              </li>
              <li>
                <Link to="/listing419">
                  Listing 4-19: A typical function component
                </Link>
              </li>
              <li>
                <Link to="/listing420">
                  Listing 4-20: Further simplifying a function component
                </Link>
              </li>
              <li>
                <Link to="/listing421">
                  Listing 4-21: Using state in functional components
                </Link>
              </li>
              <li>
                <Link to="/listing422">
                  Listing 4-22: A component made up of three child components
                </Link>
              </li>
              <li>
                <Link to="/listing423">
                  Listing 4-23: Presenting ThingsThatAreFunny
                </Link>
              </li>
              <li>
                <Link to="/listing424">
                  Listing 4-24: Passing children into a component
                </Link>
              </li>
              <li>
                <Link to="/listing425">
                  Listing 4-25: Rendering a NavBar inside of App
                </Link>
              </li>
              <li>
                <Link to="/listing426">
                  Listing 4-26: Rendering the Children using props.children
                </Link>
              </li>
              <li>
                <Link to="/listing427">
                  Listing 4-27: Cloning the Children in NavBar.js
                </Link>
              </li>
              <li>
                <Link to="/listing428">
                  Listing 4-28: Passing onClick into the parent component
                </Link>
              </li>
              <li>
                <Link to="/listing429">
                  Listing 4-29: Making use of props in a child component
                </Link>
              </li>
              <li>
                <Link to="/listing430">
                  Listing 4-30: Comparing previous and next props in
                  shouldComponentUpdate
                </Link>
              </li>
              <li>
                <Link to="/listing431">
                  Listing 4-31: A React component with a potential memory leak
                </Link>
              </li>
              <li>
                <Link to="/listing432">
                  Listing 4-32: Toggling the rendering of the Counter
                </Link>
              </li>
              <li>
                <Link to="/listing433">Listing 4-33: Fixing a memory leak</Link>
              </li>
              <li>
                <Link to="/listing434">
                  Listing 4-34: Using shouldComponentUpdate() and
                  shallowCompare()
                </Link>
              </li>
              <li>
                <Link to="/listing435">
                  Listing 4-35: Extending React.PureComponent
                </Link>
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
                <Link to="/listing601">
                  Listing 6-1: Changing local variables doesn't update the view
                </Link>
              </li>
              <li>
                <Link to="/listing602">
                  Listing 6-2: A Component That Uses a String Prop
                </Link>
              </li>
              <li>
                <Link to="/listing603">
                  Listing 6-3: Validating That a Prop is a String
                </Link>
              </li>
              <li>
                <Link to="/listing604">
                  Listing 6-4: PropTypes Inside a Component's Body
                </Link>
              </li>
              <li>
                <Link to="/listing605">
                  Listing 6-5: Putting PropTypes Outside the Class Body
                </Link>
              </li>
              <li>
                <Link to="/listing606">
                  Listing 6-6: Using PropTypes with a Function Component
                </Link>
              </li>
              <li>
                <Link to="/listing607">
                  Listing 6-7: Appending the isRequired Validator
                </Link>
              </li>
              <li>
                <Link to="/listing608">
                  Listing 6-8: Trying to render a non-node value
                </Link>
              </li>
              <li>
                <Link to="/listing609">Listing 6-9: Using PropTypes.node</Link>
              </li>
              <li>
                <Link to="/listing610">
                  Listing 6-10: Validating React Elements
                </Link>
              </li>
              <li>
                <Link to="/listing611">
                  Listing 6-11: Using the elementType Validator
                </Link>
              </li>
              <li>
                <Link to="/listing612">
                  Listing 6-12: Validating that a prop is an instance of a class
                </Link>
              </li>
              <li>
                <Link to="/listing613">
                  Listing 6-13: Using PropTypes.oneOf
                </Link>
              </li>
              <li>
                <Link to="/listing614">
                  Listing 6-14: Using a Custom validator to test for a phone
                  number
                </Link>
              </li>
              <li>
                <Link to="/listing615">
                  Listing 6-15: A component without default props
                </Link>
              </li>
              <li>
                <Link to="/listing616">
                  Listing 6-16: Setting defaults with the || Operator
                </Link>
              </li>
              <li>
                <Link to="/listing617">
                  Listing 6-17: Destructuring props and setting defaults
                </Link>
              </li>
              <li>
                <Link to="/listing618">
                  Listing 6-18: Setting defaultProps as a static property
                </Link>
              </li>
              <li>
                <Link to="/listing619">
                  Listing 6-19: Setting defaultProps outside of the component
                  body
                </Link>
              </li>
              <li>
                <Link to="/listing620">
                  Listing 6-20: Setting defaultProps for a function component
                </Link>
              </li>
              <li>
                <Link to="/listing621">
                  Listing 6-21: Initializing State in a Class Component
                </Link>
              </li>
              <li>
                <Link to="/listing622">
                  Listing 6-22: Initializing state using the class property
                </Link>
              </li>
              <li>
                <Link to="/listing623">
                  Listing 6-23: Initializing State in a Function Component
                </Link>
              </li>
              <li>
                <Link to="/listing624">
                  Listing 6-24: Another Approach to Initializing State in a
                  Function Component
                </Link>
              </li>
              <li>
                <Link to="/listing625">Listing 6-25: Using setState</Link>
              </li>
              <li>
                <Link to="/listing626">
                  Listing 6-26: Using setState with Multiple State Properties
                </Link>
              </li>
              <li>
                <Link to="/listing627">
                  Listing 6-27: Demonstrating setState's asychronous nature
                </Link>
              </li>
              <li>
                <Link to="/listing628">
                  Listing 6-28: Using the updater function with setState
                </Link>
              </li>
              <li>
                <Link to="/listing629">
                  Listing 6-29: The Static Version of the App Component
                </Link>
              </li>
              <li>
                <Link to="/listing630">
                  Listing 6-30: A Shell Component for InputForm
                </Link>
              </li>
              <li>
                <Link to="/listing631">
                  Listing 6-31: A Shell Component for FilterSelect
                </Link>
              </li>
              <li>
                <Link to="/listing632">
                  Listing 6-32: A Shell Component for RemindersList
                </Link>
              </li>
              <li>
                <Link to="/listing633">
                  Listing 6-33: A Shell Component for Reminder
                </Link>
              </li>
              <li>
                <Link to="/listing634">
                  Listing 6-34: RemindersList with Reminder Imported
                </Link>
              </li>
              <li>
                <Link to="/listing635">
                  Listing 6-35: Round Two of InputForm
                </Link>
              </li>
              <li>
                <Link to="/listing636">
                  Listing 6-36: Round Two of FilterSelect
                </Link>
              </li>
              <li>
                <Link to="/listing637">
                  Listing 6-37: Round Two of RemindersList
                </Link>
              </li>
              <li>
                <Link to="/listing638">
                  Listing 6-38: Round Two of Reminder
                </Link>
              </li>
              <li>
                <Link to="/listing639">
                  Listing 6-39: App with Lifted State
                </Link>
              </li>
              <li>
                <Link to="/listing640">Listing 6-40: Pure InputForm</Link>
              </li>
              <li>
                <Link to="/listing641">Listing 6-41: Pure FilterSelect</Link>
              </li>
              <li>
                <Link to="/listing642">Listing 6-42: Pure RemindersList</Link>
              </li>
              <li>
                <Link to="/listing643">
                  Listing 6-43: Adding PropTypes and Default Values to InputForm
                </Link>
              </li>
              <li>
                <Link to="/listing644">
                  Listing 6-44: RemindersList with Default Props and PropTypes
                </Link>
              </li>
              <li>
                <Link to="/listing645">
                  Listing 6-45: Validating and Setting Defaults for FilterSelect
                </Link>
              </li>
              <li>
                <Link to="/listing646">
                  Listing 6-46: Reminder with PropTypes and defaultProps
                </Link>
              </li>
              <li>
                <Link to="/listing647">
                  Listing 6-47: The InputForm component with event handlers and
                  event listeners
                </Link>
              </li>
              <li>
                <Link to="/listing648">
                  Listing 6-48: Creating a New filteredReminders Array
                </Link>
              </li>
              <li>
                <Link to="/listing649">
                  Listing 6-49: Filtering the Reminders List
                </Link>
              </li>
              <li>
                <Link to="/listing650">
                  Listing 6-50: Implementing the filterList Function
                </Link>
              </li>
              <li>
                <Link to="/listing651">
                  Listing 6-51: FilterSelect with an event handler and event
                  listener
                </Link>
              </li>
              <li>
                <Link to="/listing652">
                  Listing 6-52: Reminder with the checkbox
                </Link>
              </li>
              <li>
                <Link to="/listing653">
                  Listing 6-53: Initializing State in App
                </Link>
              </li>
              <li>
                <Link to="/listing654">
                  Listing 6-54: Copying and Modifying JSX in App
                </Link>
              </li>
              <li>
                <Link to="/listing655">
                  Listing 6-55: Adding Methods and Binding Them to App
                </Link>
              </li>
              <li>
                <Link to="/listing656">
                  Listing 6-56: The Converted App Component
                </Link>
              </li>
              <li>
                <Link to="/listing657">
                  Listing 6-57: The converted InputForm component
                </Link>
              </li>
              <li>
                <Link to="/Reminders">Finished Reminders App</Link>
              </li>
              <li>
                <Link to="/RemindersClass">
                  Finished Reminders App (Class Component Version)
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 7 - Events">
            <ul>
              <li>
                <Link to="/listing701">
                  Listing 7-1: Using an event attribute in HTML
                </Link>
              </li>
              <li>
                <Link to="/listing702">
                  Listing 7-2: Using addEventListener
                </Link>
              </li>
              <li>
                <Link to="/listing703">
                  Listing 7-3: Setting an event listener in a React component
                </Link>
              </li>
              <li>
                <Link to="/listing704">
                  Listing 7-4: Viewing the properties of the Event object
                </Link>
              </li>
              <li>
                <Link to="/listing705">
                  Listing 7-5: Using an inline event handler to show an alert
                </Link>
              </li>
              <li>
                <Link to="/listing706">
                  Listing 7-6: Using an inline event handler to call setState()
                </Link>
              </li>
              <li>
                <Link to="/listing707">
                  Listing 7-7: Using an event handler function in a function
                  component
                </Link>
              </li>
              <li>
                <Link to="/listing708">
                  Listing 7-8: Writing and binding an event handler method in a
                  class
                </Link>
              </li>
              <li>
                <Link to="/listing709">
                  Listing 7-9: Binding a function in the constructor
                </Link>
              </li>
              <li>
                <Link to="/listing710">
                  Listing 7-10: Binding an event handler inline
                </Link>
              </li>
              <li>
                <Link to="/listing711">
                  Listing 7-11: Using an arrow function as an event handler
                </Link>
              </li>
              <li>
                <Link to="/listing712">
                  Listing 7-12: Defining state using a class property
                </Link>
              </li>
              <li>
                <Link to="/listing713">
                  Listing 7-13: The Event object is passed automatically
                </Link>
              </li>
              <li>
                <Link to="/listing714">
                  Listing 7-14: Passing the Event object to the event handler
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 8 - Forms">
            <ul>
              <li>
                <Link to="/listing801">
                  Listing 8-1: Omiting the value attribute creates an
                  uncontrolled input
                </Link>
              </li>
              <li>
                <Link to="/listing802">
                  Listing 8-2: Adding the value attribute creates a controlled
                  input
                </Link>
              </li>
              <li>
                <Link to="/listing803">
                  Listing 8-3: Updating an input element with one-way data flow
                </Link>
              </li>
              <li>
                <Link to="/listing804">
                  Listing 8-4: Controlling an input in a class component
                </Link>
              </li>
              <li>
                <Link to="/listing805">
                  Listing 8-5: Simplifying a Controlled Input in a Class
                </Link>
              </li>
              <li>
                <Link to="/listing806">
                  Listing 8-6: The SearchBox component
                </Link>
              </li>
              <li>
                <Link to="/listing807">
                  Listing 8-7: The SearchInput component
                </Link>
              </li>
              <li>
                <Link to="/listing808">
                  Listing 8-8: The SearchResults component
                </Link>
              </li>
              <li>
                <Link to="/listing809">
                  Listing 8-9: A blog comment interface using an uncontrolled
                  input
                </Link>
              </li>
              <li>
                <Link to="/listing810">
                  Listing 8-10: An HTML textarea's value is its children
                </Link>
              </li>
              <li>
                <Link to="/listing811">
                  Listing 8-11: Using a textarea in React
                </Link>
              </li>
              <li>
                <Link to="/listing812">
                  Listing 8-12: A select element in HTML
                </Link>
              </li>
              <li>
                <Link to="/listing813">
                  Listing 8-13: Using a select input in React
                </Link>
              </li>
              <li>
                <Link to="/listing814">Listing 8-14: Using preventDefault</Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 9 - Refs">
            <ul>
              <li>
                <Link to="/listing901">
                  Listing 9-1: Creating a Ref in a Class Component
                </Link>
              </li>
              <li>
                <Link to="/listing902">
                  Listing 9-2: Creating a Ref with useRef()
                </Link>
              </li>
              <li>
                <Link to="/listing903">
                  Listing 9-3: Calling a DOM Method on a Child Using a Ref
                </Link>
              </li>
              <li>
                <Link to="/listing904">
                  Listing 9-4: Creating a Callback Ref
                </Link>
              </li>
              <li>
                <Link to="/listing905">
                  Listing 9-5: Passing a ref Callback as an Inline Function
                </Link>
              </li>
              <li>
                <Link to="/listing906">
                  Listing 9-6: Selecting and Copying Text with a ref
                </Link>
              </li>
              <li>
                <Link to="/listing907">Listing 9-7: A React Audio Player</Link>
              </li>
              <li>
                <Link to="/listing908">
                  Listing 9-8: Scrolling to an Element with a ref
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 10 - Styling React">
            <ul>
              <li>
                <Link to="/listing1001">
                  Listing 10-1: Adding an HTML Link to the HTML File
                </Link>
              </li>
              <li>
                <Link to="/listing1002">
                  Listing 10-2: Including CSS in a Component
                </Link>
              </li>
              <li>
                <Link to="/listing1003">
                  Listing 10-3: Cascading Styles in Components
                </Link>
              </li>
              <li>
                <Link to="/listing1004">
                  Listing 10-4: Using Inline Styles in React
                </Link>
              </li>
              <li>
                <Link to="/listing1005">
                  Listing 10-5: CSS rule-sets vs. JavaScript style objects
                </Link>
              </li>
              <li>
                <Link to="/listing1006">
                  Listing 10-6: Using Variables to Hold Style Objects
                </Link>
              </li>
              <li>
                <Link to="/listing1007">
                  Listing 10-7: A Style Module Library
                </Link>
              </li>
              <li>
                <Link to="/listing1008">
                  Listing 10-8: Importing Multiple Styles
                </Link>
              </li>
              <li>
                <Link to="/listing1009">Listing 10-9: A CSS Module</Link>
              </li>
              <li>
                <Link to="/listing1010">Listing 10-10: Using a CSS Module</Link>
              </li>
              <li>
                <Link to="/listing1011">
                  Listing 10-11: Using Class Composition
                </Link>
              </li>
              <li>
                <Link to="/listing1012">
                  Listing 10-12: Basing a new class on an external style
                </Link>
              </li>
              <li>
                <Link to="/listing1013">
                  Listing 10-13: Using Styled Components
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 11 - Introducing Hooks">
            <ul>
              <li>
                <Link to="/listing1101">
                  Listing 11-1: A Number Guessing Game with useState
                </Link>
              </li>
              <li>
                <Link to="/listing1102">
                  Listing 11-2: Setter functions are bound to their creator
                  component
                </Link>
              </li>
              <li>
                <Link to="/listing1103">
                  Listing 11-3: The most basic form of useEffect
                </Link>
              </li>
              <li>
                <Link to="/listing1104">
                  Listing 11-4: Starting a timer with each render
                </Link>
              </li>
              <li>
                <Link to="/listing1105">
                  Listing 11-5: Creating a new timer with each render
                </Link>
              </li>
              <li>
                <Link to="/listing1106">
                  Listing 11-6: Passing an empty array to only run useEffect on
                  mount
                </Link>
              </li>
              <li>
                <Link to="/listing1107">
                  Listing 11-7: Specifying useEffect's dependencies
                </Link>
              </li>
              <li>
                <Link to="/listing1108">
                  Listing 11-8: Asynchronous Requests with useEffect
                </Link>
              </li>
              <li>
                <Link to="/listing1109">
                  Listing 11-9: Using Context with the useContext Hook
                </Link>
              </li>
              <li>
                <Link to="/listing1110">
                  Listing 11-10: A Counter with useReducer
                </Link>
              </li>
              <li>
                <Link to="/listing1111">
                  Listing 11-11: Passing a Payload to a Reducer
                </Link>
              </li>
              <li>
                <Link to="/listing1112">
                  Listing 11-12: Function dependencies cause unnecessary renders
                </Link>
              </li>
              <li>
                <Link to="/listing1113">
                  Listing 11-13: Memoized callbacks fix the unnecessary effect
                  problem
                </Link>
              </li>
              <li>
                <Link to="/listing1114">
                  Listing 11-14: Solving performance problems with useMemo
                </Link>
              </li>
              <li>
                <Link to="/listing1115">
                  Listing 11-15: Getting the value of a textarea and counting
                  its words
                </Link>
              </li>
              <li>
                <Link to="/listing1116">
                  Listing 11-16: Customizing a value exposed by a ref
                </Link>
              </li>
              <li>
                <Link to="/listing1117">
                  Listing 11-17: useZipLookup: a custom hook to return location
                  data based on a zipcode
                </Link>
              </li>
              <li>
                <Link to="/listing1118">
                  Listing 11-18: Using the useZipLookup custom hook
                </Link>
              </li>
              <li>
                <Link to="/listing1119">
                  Listing 11-19: Using useDebugValue
                </Link>
              </li>
              <li>
                <Link to="/listing1120">Listing 11-20: Using useAxios</Link>
              </li>
              <li>
                <Link to="/listing1121">Listing 11-21: Using useForm</Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 12 - Routing">
            <ul>
              <li>
                <Link to="/listing1201">
                  Listing 12-1: A Simple Routing Component
                </Link>
              </li>
              <li>
                <Link to="/listing1202">
                  Listing 12-2: A list of NavLinks with sub-items
                </Link>
              </li>
              <li>
                <Link to="/listing1203">
                  Listing 12-3: Using the exact attribute on NavLink components
                </Link>
              </li>
              <li>
                <Link to="/listing1204/login">
                  Listing 12-4: Multiple routes in a component may have matches
                </Link>
              </li>
              <li>
                <Link to="/listing1205/user/12">
                  Listing 12-5: Using URL parameters
                </Link>
              </li>
              <li>
                <Link to="/listing1206/user/12">
                  Listing 12-6: Using the useParams Hook
                </Link>
              </li>
              <li>
                <Link to="/listing1207">
                  Listing 12-7: Using the component attribute
                </Link>
              </li>
              <li>
                <Link to="/listing1208">
                  Listing 12-8: Using the render attribute
                </Link>
              </li>
              <li>
                <Link to="/listing1209">
                  Listing 12-9: Rendering a render prop
                </Link>
              </li>
              <li>
                <Link to="/listing1210">
                  Listing 12-10: Switching between multiple routes
                </Link>
              </li>
              <li>
                <Link to="/listing1211">
                  Listing 12-11: Rendering a default route
                </Link>
              </li>
              <li>
                <Link to="/listing1212">
                  Listing 12-12: Redirecting from one location to another
                </Link>
              </li>
              <li>
                <Link to="/listing1213">Listing 12-13: Using withRouter</Link>
              </li>
              <li>
                <Link to="/listing1214">Listing 12-14: Using useHistory</Link>
              </li>
              <li>
                <Link to="/listing1215">
                  Listing 12-15: Viewing properties of the current location
                  object
                </Link>
              </li>
              <li>
                <Link to="/listing1216">
                  Listing 12-16: Dynamic Links and Routes in nested Routes
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 13 - Error Boundaries">
            <ul>
              <li>
                <Link to="/listing1301">
                  Listing 13-1: An ErrorBoundary component
                </Link>
              </li>
              <li>
                <Link to="/listing1302">
                  Listing 13-2: A component with an error
                </Link>
              </li>
              <li>
                <Link to="/listing1303">
                  Listing 13-3: Exporting with an ErrorBoundary
                </Link>
              </li>
              <li>
                <Link to="/listing1304">
                  Listing 13-4: Logging the error and the info object to the
                  console
                </Link>
              </li>
              <li>
                <Link to="/listing1305">
                  Listing 13-5: The Logger Component
                </Link>
              </li>
              <li>
                <Link to="/listing1306">
                  Listing 13-6: The updated ErrorBoundary with remote logging
                </Link>
              </li>
              <li>
                <Link to="/listing1307">
                  Listing 13-7: A Component That Sometimes Errors
                </Link>
              </li>
              <li>
                <Link to="/listing1308">
                  Listing 13-8: Providing a reset link in the Error Boundary
                </Link>
              </li>
              <li>
                <Link to="/listing1309">
                  Listing 13-9: Specifying a fallback component with
                  react-error-boundary
                </Link>
              </li>
              <li>
                <Link to="/listing1310">
                  Listing 13-10: Using try/catch to catch errors in an
                  ErrorBoundary
                </Link>
              </li>
              <li>
                <Link to="/listing1311">
                  Listing 13-11: Using useErrorHandler()
                </Link>
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
                <Link to="/listing1601">
                  Listing 16-1: Callbacks within Callbacks
                </Link>
              </li>
              <li>
                <Link to="/listing1602">
                  Listing 16-2: Loading initial data in a class component
                </Link>
              </li>
              <li>
                <Link to="/listing1603">
                  Listing 16-3: Loading initial data in a function component
                </Link>
              </li>
              <li>
                <Link to="/listing1604">
                  Listing 16-4: Using Fetch in Response to Events
                </Link>
              </li>
              <li>
                <Link to="/listing1605">
                  Listing 16-5: Performing a GET request with Axios
                </Link>
              </li>
              <li>
                <Link to="/listing1606">Listing 16-6: A Clicker App</Link>
              </li>
              <li>
                <Link to="/listing1607">
                  Listing 16-7: Writing to localStorage When the State Changes
                </Link>
              </li>
              <li>
                <Link to="/listing1608">
                  Listing 16-8: Reading localStorage Data in Clicker
                </Link>
              </li>
              <li>
                <Link to="/listing1609">
                  Listing 16-9: Clearing localStorage in the Clicker
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 17 - Context API">
            <ul>
              <li>
                <Link to="/listing1701">Listing 17-1: Using Prop Drilling</Link>
              </li>
              <li>
                <Link to="/listing1702">
                  Listing 17-2: A Context for User Preferences
                </Link>
              </li>
              <li>
                <Link to="/listing1703">
                  Listing 17-3: Using a Provider Component
                </Link>
              </li>
              <li>
                <Link to="/listing1704">
                  Listing 17-4: Consuming a Context in a Class Component
                </Link>
              </li>
              <li>
                <Link to="/listing1705">
                  Listing 17-5: Using the Context.Consumer Component
                </Link>
              </li>
              <li>
                <Link to="/listing1706">
                  Listing 17-6: Consuming a Context in a Function Component
                </Link>
              </li>
              <li>
                <Link to="/listing1707">
                  Listing 17-7: Getting Data to a Deeply-nested Component with
                  Prop Drilling
                </Link>
              </li>
              <li>
                <Link to="/listing1708">
                  Listing 17-8: Eliminating Prop Drilling with Context
                </Link>
              </li>
              <li>
                <Link to="/listing1709">
                  Listing 17-9: Using a component outside of a required Context
                </Link>
              </li>
              <li>
                <Link to="/listing1710">
                  Listing 17-10: Using Composition Instead of Context
                </Link>
              </li>
              <li>
                <Link to="/listing1711">Listing 17-11: Making a Provider</Link>
              </li>
              <li>
                <Link to="/listing1712">
                  Listing 17-12: Providing a Context to a Tree
                </Link>
              </li>
              <li>
                <Link to="/listing1713">
                  Listing 17-13: Consuming a Context
                </Link>
              </li>
            </ul>
          </Collapsible>
        </li>
        <li>
          <Collapsible trigger="Chapter 18 - React Portals">
            <ul>
              <li>
                <Link to="/listing1801">
                  Listing 18-1: An HTML document with multiple nodes in the body
                </Link>
              </li>
              <li>
                <Link to="/listing1802">Listing 18-2: Creating a Portal</Link>
              </li>
              <li>
                <Link to="/listing1803">
                  Listing 18-3: Using the SidebarHelp Component
                </Link>
              </li>
              <li>
                <Link to="/listing1804">
                  Listing 18-4: One Way to Style a Modal
                </Link>
              </li>
              <li>
                <Link to="/listing1805">Listing 18-5: The App Component</Link>
              </li>
              <li>
                <Link to="/listing1806">
                  Listing 18-6: The Finished Modal Component
                </Link>
              </li>
              <li>
                <Link to="/listing1807">
                  Listing 18-7: Using a ref to set keyboard focus
                </Link>
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
  );
}

export default MainNav;
