import { warningStyle, infoStyle, successStyle } from './messageStyles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function DisplayStatus(props) {
  let messageStyle;
  switch (props.message.type) {
    case 'warning':
      messageStyle = warningStyle;
      break;
    case 'info':
      messageStyle = infoStyle;
      break;
    case 'success':
      messageStyle = successStyle;
      break;
    default:
      messageStyle = infoStyle;
      break;
  }

  return (
    <>
      <p style={messageStyle}>{props.message.text}</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {warningStyle,infoStyle,successStyle} from './messageStyles';

function DisplayStatus(props){
let messageStyle;
switch(props.message.type){
  case 'warning':
    messageStyle = warningStyle;
    break;
  case 'info':
    messageStyle = infoStyle;
    break;
  case 'success':
    messageStyle = successStyle;
    break;
  default:
    messageStyle = infoStyle;
    break;
}

  return (
    <p style={messageStyle}>{props.message.text}</p>
  );
}

export default DisplayStatus;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default DisplayStatus;
