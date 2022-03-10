import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState();
  if (username) {
    return <Dashboard setUsername={setUsername} username={username} />;
  } else {
    return <button onClick={() => setUsername('Chris')}>Login</button>;
  }
};

const Dashboard = (props) => {
  return <Header setUsername={props.setUsername} username={props.username} />;
};

const Header = (props) => {
  return (
    <UserControls setUsername={props.setUsername} username={props.username} />
  );
};

const UserControls = (props) => {
  return (
    <>
      <WelcomeMessage username={props.username} />
      <Logout setUsername={props.setUsername} />
    </>
  );
};

const WelcomeMessage = (props) => {
  return <>Welcome {props.username}!</>;
};

const Logout = (props) => {
  return (
    <button
      onClick={() => {
        props.setUsername('');
      }}
    >
      Logout
    </button>
  );
};

export default App;
