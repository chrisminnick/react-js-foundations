import {useState} from 'react';

function CountUp(){
  const [count,setCount] = useState(0);
  return (
    <>
    <div>
      <button onClick={()=>setCount(count+1)}>Add One</button>
      {count}
    </div>
    <pre>
{`import {useState} from 'react';

function CountUp(){
  const [count,setCount] = useState(0);
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Add One</button>
      {count}
    </div>
  );
}

export default CountUp;`}
    </pre>
    </>
  );
}

export default CountUp;