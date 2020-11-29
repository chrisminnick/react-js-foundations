function SearchInput(props) {

    return (
      <div id="search-box">
        <input  type="text" 
                name="search" 
                value={props.term}
                onChange={(e)=>{props.onChange(e.target.value)}} />
      </div>
    )
  }
export default SearchInput;