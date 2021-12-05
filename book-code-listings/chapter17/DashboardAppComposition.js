import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState();

  if (username) {
    return (
      <>
        <Dashboard>
          <Header>
            <UserControls>
              <WelcomeMessage username={username} />
              <Logout setUsername={setUsername} />
            </UserControls>
          </Header>
        </Dashboard>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setUsername("Chris")}>Login</button>
        
      </>
    );
  }
};

const Dashboard = (props) => {
  return <>{props.children}</>;
};

const Header = (props) => {
  return <>{props.children}</>;
};

const UserControls = (props) => {
  return <>{props.children}</>;
};

const WelcomeMessage = (props) => {
  return <>Welcome {props.username}!</>;
};

const Logout = (props) => {
  return (
    <button
      onClick={() => {
        props.setUsername("");
      }}
    >
      Logout
    </button>
  );
};

export default App;
