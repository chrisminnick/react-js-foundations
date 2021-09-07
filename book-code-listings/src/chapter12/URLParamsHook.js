import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function HomeScreen(props){
  return (
      <>
    <Router>
      <Route exact path="/listing1206">
        <Home />
      </Route>
      <Route exact path="/listing1206/login">
        <Login />
      </Route>
      <Route path="/listing1206/user/:id">
        <UserProfile />
      </Route>
    </Router>
    <pre>
        {`import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function HomeScreen(props){
  return (
    <Router>
      <Route exact path="/listing1206">
        <Home />
      </Route>
      <Route exact path="/listing1206/login">
        <Login />
      </Route>
      <Route path="/listing1206/user/:id">
        <UserProfile />
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
}

function UserProfile() {

    let { id } = useParams();
  
    return (
      <div>
        <h3>User ID: {id}</h3>
      </div>
    );
  }
  `}
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

function UserProfile() {

    let { id } = useParams();
  
    return (
      <div>
        <h3>User ID: {id}</h3>
      </div>
    );
  }
  