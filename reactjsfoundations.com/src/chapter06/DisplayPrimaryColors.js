import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function DisplayPrimaryColor(props) {
  return (
    <>
      <p>You picked: {props.primaryColor}</p>
      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </>
  );
}

DisplayPrimaryColor.propTypes = {
  primaryColor: PropTypes.oneOf(['red', 'green', 'blue']),
};

export default DisplayPrimaryColor;
