import {useEffect,useRef,useState} from 'react';

function ShippingAddress(props){
  const [zipcode,setZipcode] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');

  const zipRef = useRef();
  const API_URL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
  const API_KEY = 'DEMOAPIKEY';



  const setZip = (e)=>{
    e.preventDefault();
    setZipcode(zipRef.current.value);
  }

  useEffect(()=>{
    if (zipcode){  
      const loadAddressData = async ()=>{
        const response = await fetch(`${API_URL}${zipcode}?key=${API_KEY}`);
        const data = await response.json();
        setCity(data.City);
        setState(data.State);
      }

      loadAddressData();

    }
    },[zipcode]);


    return (
      <form>
        Zipcode: <input type="text" ref={zipRef} /> 
        <button onClick={setZip}>Lookup City/State</button><br />

        City: {city}<br />
        State: {state}<br />

      </form>
    )
}

export default ShippingAddress;