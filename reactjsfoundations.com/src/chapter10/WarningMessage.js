import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WarningMessage(props) {
  return (
    <>
      <p style={{ color: 'red', padding: '6px', backgroundColor: '#000000' }}>
        {props.warningMessage}
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function WarningMessage(props){
    return (
      <p style={{color:"red",padding:"6px",backgroundColor:"#000000"}}>
        {props.warningMessage}
      </p>
    )
  }
  
  export default WarningMessage;
  `}
      </SyntaxHighlighter>
    </>
  );
}

export default WarningMessage;
