import {useState,useRef} from 'react';
import useAxios from 'axios-hooks';
//import {API_KEY} from './config';

const API_KEY = 'fa06c370ce2f0491945df49ffd3fdafb';


function WeatherWidget() {
  const [city,setCity] = useState('London');
  const cityRef = useRef();

  const changeCity = (e) => {
    e.preventDefault();
    setCity(cityRef.current.value);
  }

  const [{data, loading, error}] = useAxios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error. {error.message}</p>;

  return (
    <><input type="text" ref={cityRef} /> <button onClick={changeCity}>Change City</button>
    <pre>{JSON.stringify(data,null,2)}</pre>
    <pre>
      {`import {useState,useRef} from 'react';
import useAxios from 'axios-hooks';
import {API_KEY} from './config';

function WeatherWidget() {
  const [city,setCity] = useState('London');
  const cityRef = useRef();

  const changeCity = (e) => {
    e.preventDefault();
    setCity(cityRef.current.value);
  }

  const [{data, loading, error}, refetch] = useAxios(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=${API_KEY}\`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error. {error.message}</p>;

  return (
    <><input type="text" ref={cityRef} /> <button onClick={changeCity}>Change City</button>
    <pre>{JSON.stringify(data,null,2)}</pre>
    </>
  );
}
export default WeatherWidget;`}
    </pre>
    </>
  );
}
export default WeatherWidget;