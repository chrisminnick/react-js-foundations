import PropTypes from 'prop-types';

function DisplayPrimaryColor(props){
  return(
    <>
    <p>You picked: {props.primaryColor}</p>
    <pre>
{`import PropTypes from 'prop-types';

function DisplayPrimaryColor(props){
  return(
    <p>You picked: {props.primaryColor}</p>
  )
}

DisplayPrimaryColor.propTypes = {
  primaryColor:PropTypes.oneOf(['red','green','blue'])
}

export default DisplayPrimaryColor;
`}
    </pre>
    </>
  )
}

DisplayPrimaryColor.propTypes = {
  primaryColor:PropTypes.oneOf(['red','green','blue'])
}

export default DisplayPrimaryColor;
