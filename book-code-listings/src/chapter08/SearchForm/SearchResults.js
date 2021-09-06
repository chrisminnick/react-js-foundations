function SearchResults(props){
  return(
    <>
    <p>You're searching for: {props.searchTerm}</p>
    <pre>
      {`function SearchResults(props){
  return(
    <p>You're searching for: {props.searchTerm}</p>
  );
}

export default SearchResults;
`}
    </pre>
    </>
  );
}

export default SearchResults;
