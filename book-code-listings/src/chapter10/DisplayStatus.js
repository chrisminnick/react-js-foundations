import {warningStyle,infoStyle,successStyle} from './messageStyles';

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
    <>
    <p style={messageStyle}>{props.message.text}</p>
    <pre>
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
    </pre>
    </>
  );
}

export default DisplayStatus;
