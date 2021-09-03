function NavItem(props){
    return (
    <>
      <button onClick={props.onClick}>Click Me</button>
    <pre>
{`function NavItem(props){
  return (
    <button onClick={props.onClick}>Click Me</button>
  )
}

export default NavItem;`}
    </pre>
    </>
    )
  }
  
  export default NavItem;
  