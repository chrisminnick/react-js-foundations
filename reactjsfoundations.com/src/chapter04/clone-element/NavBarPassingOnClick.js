import NavBar from './NavBar';
import NavItem from './NavItem';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function App(props) {
  return (
    <>
      <NavBar
        onClick={() => {
          console.log('clicked');
        }}
      >
        <NavItem />
        <NavItem />
        <NavItem />
      </NavBar>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import NavBar from './NavBar';
import NavItem from './NavItem';

function App(props){
  return (
    <NavBar onClick={()=>{console.log('clicked');}}>
      <NavItem />
      <NavItem />
      <NavItem />
    </NavBar>);
}

export default App;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default App;
