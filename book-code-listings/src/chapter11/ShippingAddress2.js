import {useRef,useState} from 'react';
import useZipLookup from './useZipLookup';

function ShippingAddress2(props){
  const [zipcode,setZipcode] = useState('');
  const [city,state] = useZipLookup(zipcode);

  const zipRef = useRef();

  const setZip = (e)=>{
    e.preventDefault();
    setZipcode(zipRef.current.value);
  }


    return (
      <form>
        Zipcode: <input type="text" ref={zipRef} /> 
        <button onClick={setZip}>Lookup City/State</button><br />

        City: {city}<br />
        State: {state}<br />

      </form>
    )
}

export default ShippingAddress2;