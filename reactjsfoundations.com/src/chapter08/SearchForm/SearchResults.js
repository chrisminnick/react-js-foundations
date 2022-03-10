import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SearchResults(props) {
  return (
    <>
      <p>You're searching for: {props.searchTerm}</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function SearchResults(props){
  return(
    <p>You're searching for: {props.searchTerm}</p>
  );
}

export default SearchResults;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default SearchResults;
