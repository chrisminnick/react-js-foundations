import ErrorBoundary from './ErrorBoundary';
import {useState} from 'react';

function SometimesBadContainer(){
  return (
      <ErrorBoundary>
          <SometimesBad />
      </ErrorBoundary>
  )
}

function SometimesBad(){
  const {message,setMessage} = useState();

  return (
    <div>
      <h1>Choose Wisely</h1>
      <button onClick={setMessage({whoops})}>Mystery Button 1</button>
      <button onClick={setMessage("great!")}>Mystery Button 2</button>
      {message}
    </div>
  );
}

export default SometimesBadContainer;
