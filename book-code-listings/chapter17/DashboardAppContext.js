import React, { useState, useContext } from "react";
const UserContext = React.createContext();

const App = () => {
  const [username, setUsername] = useState();

  if (username) {
    return (
      <>
        <div className="listing-result">
          <UserContext.Provider value={{ username, setUsername }}>
            <Dashboard />
          </UserContext.Provider>
        </div>
        
      </>
    );
  } else {
    return (
      <>
        <div className="listing-result">
          <button onClick={() => setUsername("Chris")}>Login</button>
        </div>
        
      </>
    );
  }
};

const Dashboard = (props) => {
  return <Header />;
};

const Header = (props) => {
  return <UserControls />;
};

const UserControls = (props) => {
  return (
    <>
      <WelcomeMessage />
      <Logout />
    </>
  );
};

const WelcomeMessage = () => {
  const { username } = useContext(UserContext);
  return <>Welcome {username}!</>;
};

const Logout = (props) => {
  const { setUsername } = useContext(UserContext);
  return (
    <button
      onClick={() => {
        setUsername("");
      }}
    >
      Logout
    </button>
  );
};


    
  );
}

export default App;
