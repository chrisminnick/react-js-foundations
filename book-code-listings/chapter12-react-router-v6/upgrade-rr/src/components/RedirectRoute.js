import { redirect, Route, Routes, Link, useLocation } from 'react-router-dom';

function Header(props) {
  return <Link to="/users">View a list of users</Link>;
}

function UsersList(props) {
  const location = useLocation();
  return (
    <>
      <h1>User List</h1>
      path: {location.pathname}
    </>
  );
}

function NoMatch(props) {
  const location = useLocation();
  return <h1>{location.pathname} is not a matching path</h1>;
}

function App(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users/list">
          <UsersList />
        </Route>

        <Route path="/users" element={redirect('/users/list')} />

        <Route>
          <NoMatch />
        </Route>
      </Routes>
    </>
  );
}

export default App;
