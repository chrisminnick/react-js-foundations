import PropTypes from 'prop-types';

function Contact(props){
    return(
        <>
        <li>{props.fullName}: {props.phone}</li>
        <pre>
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
        </pre>
        </>
    )
}

const isPhoneNumber = function(props, propName, componentName) {
const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

if (!regex.test(props[propName])) {
    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a phone number.`);
}
}
  
Contact.propTypes = {
fullName: PropTypes.string,
phone: isPhoneNumber,
}

export default Contact;
  