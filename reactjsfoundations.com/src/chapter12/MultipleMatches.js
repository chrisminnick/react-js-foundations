import { BrowserRouter as Router, Route } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function HomeScreen(props) {
  return (
    <>
      <Router>
        <Route path="/listing1204">
          <Home />
        </Route>
        <Route path="/listing1204/login">
          <Login />
        </Route>
      </Router>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {BrowserRouter as Router, Route} from 'react-router-dom';

function HomeScreen(props){
  return (
    <Router>
      <Route path="/listing1204">
        <Home />
      </Route>
      <Route path="/listing1204/login">
        <Login />
      </Route>
    </Router>
  )
}

export default HomeScreen;

function Home(){
    return (
        <p>Home Route</p>
    )
}

function Login(){
    return (
        <p>Login Route</p>
    )
}`}
      </SyntaxHighlighter>
    </>
  );
}

export default HomeScreen;

function Home() {
  return <p>Home Route</p>;
}

function Login() {
  return <p>Login Route</p>;
}
