import React from 'react';

function NavBar(props){
  return (
    <>
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          onClick: props.onClick })   
      })}
    </div>
    <pre>
{`import React from 'react';

function NavBar(props){
  return (
    <div>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, {
          onClick: props.onClick })   
      })}
    </div>
   ) 
}

export default NavBar;
`}
    </pre>
    </>
   ) 
}

export default NavBar;
