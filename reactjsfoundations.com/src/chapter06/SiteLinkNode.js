import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SiteLink(props) {
  return (
    <>
      <a href={props.url}>{props.linkName}</a>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import PropTypes from 'prop-types';

function SiteLink(props) {
  return (
    <a href={props.url}>{props.linkName}</a>
  );
}

SiteLink.propTypes = {
  linkName: PropTypes.node
}

export default SiteLink;
`}
      </SyntaxHighlighter>
    </>
  );
}

SiteLink.propTypes = {
  linkName: PropTypes.node,
};

export default SiteLink;
