import Header from "./Header";
import Login from "./Login";

function Welcome({ loggedIn }) {
  let header;

  if (loggedIn) {
    header = <Header />;
  } else {
    header = <Login />;
  }
  return (
    <>
      <div className="listing-result">{header}</div>
      <CodeAndText />
    </>
  );
}

function CodeAndText() {
  return (
    <>
    <pre>
        {`
import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}) {
  let header;

  if (loggedIn) {
    header = <Header />;
  } else {
    header = <Login />;
  }
  return (
      <div>
        {header}
      </div>
  )
}
        
export default Welcome;`}
      </pre>
      <h1>Conditional Rendering with Element Variables</h1>
      <p>Outside of the return statement, create a variable to hold the element you want to render conditionally. 
        You can then use an if/else statement to assign different elements to the variable based on any condition. In this 
        example, the Boolean <code>isLoggedIn</code> is passed to the component as a prop and a different component 
        is assigned to the <code>header</code> variable based on whether <code>isLoggedIn</code> is true or false. 
        The final step is to render the <code>header</code> variable inside the return statement.</p>
      </>
  )
}

export default Welcome;
