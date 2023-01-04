import { Routes, Route } from 'react-router-dom';

function HomeScreen(props) {
  return (
    <>
      <Routes>
        <Route path="/listing1204" element={<Home />} />
        <Route path="/listing1204/login" element={<Login />} />
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
