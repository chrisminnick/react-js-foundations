import {useEffect,useState} from 'react';

function TimerOnceFun(props){

    const [count,setCount] = useState(0);

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
          console.log(time++);
          if(time===10){
            console.log(`time's up!`);
            clearInterval(interval);
          }
        }, 1000);
        return () => clearInterval(interval);
    },[]);


    
    return (<><p>Check the console to see the timer.
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
      </p>
      <pre>
        {`import {useEffect,useState} from 'react';

function TimerOnceFun(props){

    const [count,setCount] = useState(0);

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
          console.log(time++);
          if(time===10){
            console.log(\`time's up!\`);
            clearInterval(interval);
          }
        }, 1000);
        return () => clearInterval(interval);
    },[]);


    
    return (<p>Check the console to see the timer.
        <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
      </p>
      );
}

export default TimerOnceFun;`}
      </pre></>
      );
}

export default TimerOnceFun;