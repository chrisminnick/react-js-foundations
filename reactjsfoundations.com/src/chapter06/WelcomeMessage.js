import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WelcomeMessage(props) {
  return (
    <>
      <p>Welcome back, {props.firstName}!</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import PropTypes from 'prop-types';

function WelcomeMessage(props){
  return (<p>Welcome back, {props.firstName}!</p>);
}
  
WelcomeMessage.propTypes = {
  firstName:PropTypes.string
}

export default WelcomeMessage;`}
      </SyntaxHighlighter>
    </>
  );
}

WelcomeMessage.propTypes = {
  firstName: PropTypes.string,
};

export default WelcomeMessage;
