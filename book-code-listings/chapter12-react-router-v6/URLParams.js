import { Routes, Route } from 'react-router-dom';

function HomeScreen(props) {
  return (
    <Routes>
      <Route exact path="/listing1205" element={<Home />} />
      <Route exact path="/listing1205/login" element={<Login />} />
      <Route path="/listing1205/user/:id" element={<UserProfile />} />
    </Routes>
  );
}

export default HomeScreen;

function Home() {
  return <p>Home Route</p>;
}

function Login() {
  return <p>Login Route</p>;
}

function UserProfile(props) {
  return <p>User Profile</p>;
}
