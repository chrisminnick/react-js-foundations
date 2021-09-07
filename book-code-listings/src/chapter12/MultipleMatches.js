import {BrowserRouter as Router, Route} from 'react-router-dom';

function HomeScreen(props){
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
    <pre>
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
    </pre>
    </>
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
}