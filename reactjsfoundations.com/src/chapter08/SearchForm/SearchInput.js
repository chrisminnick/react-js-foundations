import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SearchInput(props) {
  const handleChange = (e) => {
    props.setSearchTerm(e.target.value);
  };

  return (
    <>
      <label>
        Enter your search term:
        <input type="text" value={props.searchTerm} onChange={handleChange} />
      </label>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function SearchInput(props){

const handleChange = (e)=>{
  props.setSearchTerm(e.target.value);
}

return(
  <label>Enter your search term:
    <input type="text" value={props.searchTerm} onChange={handleChange} />
  </label>
);
}

export default SearchInput;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default SearchInput;
