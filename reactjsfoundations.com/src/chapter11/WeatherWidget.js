import { useState, useRef } from 'react';
import useAxios from 'axios-hooks';
//import {API_KEY} from './config';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const API_KEY = 'fa06c370ce2f0491945df49ffd3fdafb';

function WeatherWidget() {
  const [city, setCity] = useState('London');
  const cityRef = useRef();

  const changeCity = (e) => {
    e.preventDefault();
    setCity(cityRef.current.value);
  };

  const [{ data, loading, error }] = useAxios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error. {error.message}</p>;

  return (
    <>
      <div className="listing-result">
        <input type="text" ref={cityRef} />{' '}
        <button onClick={changeCity}>Change City</button>
        <SyntaxHighlighter language="javascript" style={github}>
          {JSON.stringify(data, null, 2)}
        </SyntaxHighlighter>
      </div>

      <CodeAndText />
    </>
  );
}

function CodeAndText() {
  return (
    <SyntaxHighlighter language="javascript" style={github}>
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

  const [{data, loading, error}, refetch] = useAxios( \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}\` );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an error. {error.message}</p>;

  return (
    <><input type="text" ref={cityRef} /> <button onClick={changeCity}>Change City</button>
    <SyntaxHighlighter language="javascript" style={github}>{JSON.stringify(data,null,2)}</SyntaxHighlighter>
    </>
  );
}
export default WeatherWidget;`}
    </SyntaxHighlighter>
  );
}
export default WeatherWidget;
