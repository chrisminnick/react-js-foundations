import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div id="search-box">
        <SearchInput term={searchTerm} onChange={setSearchTerm} />
        <SearchResults term={searchTerm} />
      </div>
      
    </>
  );
}

export default SearchBox;
