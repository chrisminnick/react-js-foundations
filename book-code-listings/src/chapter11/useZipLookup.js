import {useEffect,useState,useDebugValue} from 'react';

function useZipLookup(zipcode){
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  
  useDebugValue(zipcode);
  
  const API_URL = 'https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/';
  const API_KEY = 'DEMOAPIKEY';

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


    return [city,state];
}

export default useZipLookup;