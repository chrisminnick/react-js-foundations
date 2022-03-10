import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useState} from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function SearchBox(){
  const [searchTerm,setSearchTerm] = useState();

  return(
    <>
      <SearchInput searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <SearchResults searchTerm = {searchTerm} />
    </>
  );
}
export default SearchBox;`}
      </SyntaxHighlighter>
    </>
  );
}
export default SearchBox;
