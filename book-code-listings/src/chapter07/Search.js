import {useState} from 'react';

function Search(props){
  
    const [term,setTerm] = useState('');

    const updateTerm = (searchTerm)=>{
      setTerm(searchTerm);
    }
    
    return(
      <>
        <input type="text" value={term} onChange={(e)=>{updateTerm(e.target.value)}} /><br />
        You're searching for: {term}
        <pre>
          {`import {useState} from 'react';

function Search(props){
  
    const [term,setTerm] = useState('');

    const updateTerm = (searchTerm)=>{
      setTerm(searchTerm);
    }
    
    return(
      <>
        <input type="text" value={term} onChange={(e)=>{updateTerm(e.target.value)}} /><br />
        You're searching for: {term}
      </>
    );
  }
  
  export default Search;
  `}
        </pre>
      </>
    );
  }
  
  export default Search;
  