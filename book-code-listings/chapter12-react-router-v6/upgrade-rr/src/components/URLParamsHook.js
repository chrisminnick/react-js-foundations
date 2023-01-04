import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function HomeScreen(props) {
  return (
    <>
      <Routes>
        <Route exact path="/listing1206" element={<Home />} />
        <Route exact path="/listing1206/login" element={<Login />} />
        <Route path="/listing1206/user/:id" element={<UserProfile />} />
      </Routes>
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

function UserProfile() {
  let { id } = useParams();

  return (
    <div>
      <h3>User ID: {id}</h3>
    </div>
  );
}
