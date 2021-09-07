import {BrowserRouter as Router, Route} from 'react-router-dom';

function HomeScreen(props){
  return (
    <Router>
      <Route exact path="/listing1205">
        <Home />
      </Route>
      <Route exact path="/listing1205/login">
        <Login />
      </Route>
      <Route path="/listing1205/user/:id">
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

function UserProfile(props){
    return (
        <p>User Profile</p>
    )
}