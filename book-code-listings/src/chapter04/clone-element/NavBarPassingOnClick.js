import NavBar from './NavBar';
import NavItem from './NavItem';

function App(props){
  return (
    <>
    <NavBar onClick={()=>{console.log('clicked');}}>
      <NavItem />
      <NavItem />
      <NavItem />
    </NavBar>
    <pre>
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
    </pre>
    </>);
}

export default App;