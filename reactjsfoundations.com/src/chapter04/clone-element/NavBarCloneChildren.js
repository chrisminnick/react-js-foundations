import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function NavBar(props) {
  return (
    <>
      <div>
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            onClick: props.onClick,
          });
        })}
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </>
  );
}

export default NavBar;
