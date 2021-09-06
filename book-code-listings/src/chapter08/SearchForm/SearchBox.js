import {useState} from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function SearchBox(){
  const [searchTerm,setSearchTerm] = useState();

  return(
    <>
      <SearchInput searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} />
      <SearchResults searchTerm = {searchTerm} />
      <pre>
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
      </pre>
    </>
  );
}
export default SearchBox;