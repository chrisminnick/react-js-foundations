import PropTypes from 'prop-types';

function SiteLink(props) {
  return (
    <>
    <a href="{props.url}">{props.linkName}</a>
    <pre>
{`import PropTypes from 'prop-types';

function SiteLink(props) {
  return (
    <a href="{props.url}">{props.linkName}</a>
  );
}

SiteLink.propTypes = {
  linkName: PropTypes.node
}

export default SiteLink;
`}
    </pre>
    </>
  );
}

SiteLink.propTypes = {
  linkName: PropTypes.node
}

export default SiteLink;
