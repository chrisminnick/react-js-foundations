import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
        <button onClick={() => setUsername('Chris')}>Login</button>
        <SyntaxHighlighter language="javascript" style={github}>
          {`import React,{useState} from 'react';
 
 const App = () => {
   const [username,setUsername] = useState();
   
     if (username) {
         return (
           <Dashboard>
             <Header>
                 <UserControls>
                     <WelcomeMessage username={username} />
                     <Logout setUsername={setUsername} />
                 </UserControls>
             </Header>
           </Dashboard>
         )
     } else {
         return <button onClick={()=>setUsername('Chris')}>Login</button>
     }
 }
 
 const Dashboard = (props) => {
     return (<>{props.children}</>);
 }
 
 const Header = (props) => {
     return (<>{props.children}</>);
 }
 
 const UserControls = (props) => {
     return (<>{props.children}</>);
 }
 
 const WelcomeMessage = (props) => {
     return <>Welcome {props.username}!</>
 }
 
 const Logout = (props) => {
     return <button onClick = {()=>{props.setUsername('')}}>Logout</button>
 }
 
 export default App;`}
        </SyntaxHighlighter>
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
        props.setUsername('');
      }}
    >
      Logout
    </button>
  );
};

export default App;
