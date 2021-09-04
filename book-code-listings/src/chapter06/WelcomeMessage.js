import PropTypes from 'prop-types';

function WelcomeMessage(props){
  return (
  <>
  <p>Welcome back, {props.firstName}!</p>
  <pre>
{`import PropTypes from 'prop-types';

function WelcomeMessage(props){
  return (<p>Welcome back, {props.firstName}!</p>);
}
  
WelcomeMessage.propTypes = {
  firstName:PropTypes.string
}

export default WelcomeMessage;`}
  </pre>
  </>);
}
  
WelcomeMessage.propTypes = {
  firstName:PropTypes.string
}

export default WelcomeMessage;