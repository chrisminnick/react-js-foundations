import StyledChild from './StyledChild';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//import './style.css';

function StyledParent(props) {
  return (
    <>
      <StyledChild />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import StyledChild from './StyledChild';

import './style.css';

function StyledParent(props){
    return (<StyledChild />)
}

export default StyledParent;`}
      </SyntaxHighlighter>
    </>
  );
}

export default StyledParent;
