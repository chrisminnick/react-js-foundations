import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div id="search-box">
        <SearchInput term={searchTerm} onChange={setSearchTerm} />
        <SearchResults term={searchTerm} />
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={github}
      >{`import {useState} from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function SearchBox() {
  const [searchTerm,setSearchTerm] = useState("");

  return (
    <div id="search-box">
      <SearchInput term={searchTerm} onChange={setSearchTerm} />
      <SearchResults term={searchTerm} />
    </div>
  )
}

export default SearchBox;`}</SyntaxHighlighter>
    </>
  );
}

export default SearchBox;
