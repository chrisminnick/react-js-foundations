import {useEffect,useState} from 'react';

function RenderCounter(){

  const [count,setCount] = useState(0);
  
  useEffect(()=>{console.log(count)});

  return(
    <>
      This component will count how many times it renders.
      <button onClick={()=>setCount((prev)=>prev+1)}>Update State</button>
      <pre>
        {`import {useEffect,useState} from 'react';

function RenderCounter(){

  const [count,setCount] = useState(0);
  
  useEffect(()=>{console.log(count)});

  return(
    <>
      This component will count how many times it renders.
      <button onClick={()=>setCount((prev)=>prev+1)}>Update State</button>
    </>
  );
}

export default RenderCounter;`}
      </pre>
    </>
  );
}

export default RenderCounter;