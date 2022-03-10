import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function TermsOfUse(props) {
  return (
    <>
      <textarea
        value={props.terms}
        onChange={props.updateTerms}
        style={{ height: '200px', width: '300px' }}
      />
      <SyntaxHighlighter language="javascript" style={github}>
        {`function TermsOfUse(props){
  return(
    <textarea value={props.terms} onChange={props.updateTerms} />
  );
}

export default TermsOfUse;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default TermsOfUse;
