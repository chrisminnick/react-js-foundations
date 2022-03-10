import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function BorderBox(props) {
  return (
    <>
      <div style={{ border: '1px solid black' }}>{props.children}</div>
      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </>
  );
}

BorderBox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BorderBox;
