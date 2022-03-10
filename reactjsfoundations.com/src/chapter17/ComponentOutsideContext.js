import React, { useState, useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const UserContext = React.createContext();

const App = () => {
  const [username, setUsername] = useState();

  if (username) {
    return (
      <>
        <UserContext.Provider value={{ username, setUsername }}>
          <Dashboard />
        </UserContext.Provider>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React,{useState,useContext} from 'react';
const UserContext = React.createContext();

const App = () => {
  const [username,setUsername] = useState();
  
    if (username) {
        return (
        <>
            <UserContext.Provider value={{username,setUsername}}>
              <Dashboard/>
            </UserContext.Provider>
          </>

        )
    } else {
        return <button onClick={()=>setUsername('Chris')}>Login</button>
    }
}

const Dashboard = (props) => {
    return <Header />
}

const Header = (props) => {
    return <UserControls />
}

const UserControls = (props) => {
    return (<>
      <WelcomeMessage />
      <Logout />
    </>)
}

const WelcomeMessage = () => {
    const {username} = useContext(UserContext);
    return <>Welcome {username}!</>
}

const Logout = (props) => {
    const {setUsername} = useContext(UserContext);
    return <button onClick = {()=>{setUsername('')}}>Logout</button>
}

export default App;`}
        </SyntaxHighlighter>
      </>
    );
  } else {
    return <button onClick={() => setUsername('Chris')}>Login</button>;
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
        setUsername('');
      }}
    >
      Logout
    </button>
  );
};

export default App;
