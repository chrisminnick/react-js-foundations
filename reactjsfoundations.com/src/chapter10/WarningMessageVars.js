import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WarningMessage(props) {
  const warningStyle = {
    color: 'red',
    padding: '6px',
    backgroundColor: '#000000',
  };

  return (
    <>
      <p style={warningStyle}>{props.warningMessage}</p>
      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`function WarningMessage(props){

const warningStyle = {color:"red",padding:"6px",backgroundColor:"#000000"};

return (
  <p style={warningStyle}>
    {props.warningMessage}
  </p>
)
}

export default WarningMessage;
`}</SyntaxHighlighter>
    </>
  );
}

export default WarningMessage;
