import {useEffect,useState} from 'react';

function TimerFun(props){

    const [count,setCount] = useState(0);

    useEffect(() => {
        let time = 0;
        const interval = setInterval(() => {
          console.log(time++);
        }, 1000);
        return () => clearInterval(interval);
    });

    return (<p>Check the console to see the timer.</p>);
}

export default TimerFun;