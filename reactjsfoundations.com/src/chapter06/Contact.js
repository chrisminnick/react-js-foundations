import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Contact(props) {
  return (
    <>
      <li>
        {props.fullName}: {props.phone}
      </li>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import PropTypes from 'prop-types';

function Contact(props){
    return(
        <li>{props.fullName}: {props.phone}</li>
    )
}

const isPhoneNumber = function(props, propName, componentName) {
const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

if (!regex.test(props[propName])) {
    return new Error('Expected a phone number.');
}
}
  
Contact.propTypes = {
fullName: PropTypes.string,
phone: isPhoneNumber,
}

export default Contact;`}
      </SyntaxHighlighter>
    </>
  );
}

const isPhoneNumber = function (props, propName, componentName) {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a phone number.`
    );
  }
};

Contact.propTypes = {
  fullName: PropTypes.string,
  phone: isPhoneNumber,
};

export default Contact;
