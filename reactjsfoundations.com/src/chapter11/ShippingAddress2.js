import { useState } from 'react';
import useZipLookup from './useZipLookup';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ShippingAddress2(props) {
  const [zipcode, setZipcode] = useState('');
  const [city, state] = useZipLookup(zipcode);

  const setZip = (e) => {
    e.preventDefault();
    setZipcode(e.target.zipcode.value);
  };

  return (
    <>
      <form onSubmit={setZip}>
        Zipcode: <input type="text" name="zipcode" />
        <button type="submit">Lookup City/State</button>
        <br />
        City: {city}
        <br />
        State: {state}
        <br />
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {useRef,useState} from 'react';
import useZipLookup from './useZipLookup';

function ShippingAddress2(props){
  const [zipcode,setZipcode] = useState('');
  const [city,state] = useZipLookup(zipcode);

  const setZip = (e)=>{
    e.preventDefault();
    setZipcode(e.target.zipcode.value);
  }

    return (
      <form onSubmit={setZip}>
        Zipcode: <input type="text" name="zipcode" /> 
        <button type="submit">Lookup City/State</button><br />

        City: {city}<br />
        State: {state}<br />

      </form>
    )
}

export default ShippingAddress2;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default ShippingAddress2;
