import PropTypes from 'prop-types';

function BorderBox(props){
  return(
    <>
    <div style={{border:"1px solid black"}}>{props.children}</div>
    <pre>
{`import PropTypes from 'prop-types';

function BorderBox(props){
  return(
    <div style={{border:"1px solid black"}}>{props.children}</div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.element.isRequired
}

export default BorderBox;
`}
    </pre>
    </>
  )
}

BorderBox.propTypes = {
  children: PropTypes.element.isRequired
}

export default BorderBox;
