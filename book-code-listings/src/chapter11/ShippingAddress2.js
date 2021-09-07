import {useState} from 'react';
import useZipLookup from './useZipLookup';

function ShippingAddress2(props){
  const [zipcode,setZipcode] = useState('');
  const [city,state] = useZipLookup(zipcode);

  const setZip = (e)=>{
    e.preventDefault();
    setZipcode(e.target.zipcode.value);
  }

    return (
      <>
      <form onSubmit={setZip}>
        Zipcode: <input type="text" name="zipcode" /> 
        <button type="submit">Lookup City/State</button><br />

        City: {city}<br />
        State: {state}<br />

      </form>
      <pre>
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
      </pre>
      </>
    )
}

export default ShippingAddress2;
