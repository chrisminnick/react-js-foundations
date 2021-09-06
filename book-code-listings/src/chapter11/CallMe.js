import {useEffect,useState,useRef} from 'react';

function CallMe(props){

  const [phoneNumber,setPhoneNumber] = useState();
  const [currentNumber,setCurrentNumber] = useState();

  const phoneInputRef = useRef();

  const handleClick = (e)=>{
      setPhoneNumber(currentNumber);
  }

  const placeCall = () => {
    if(currentNumber){
      console.log(`dialing ${currentNumber}`);
    }
  };
  
  
  useEffect(() => {
    placeCall(phoneNumber);
  },[phoneNumber,placeCall]);

  return(
    <>
      <label>Enter the number to call:</label>
      <input type="phone" ref={phoneInputRef} onChange={()=>{setCurrentNumber(phoneInputRef.current.value)}}/>
      <button onClick={handleClick}>
        Place Call
      </button>
      <h1>{currentNumber}</h1>
      <pre>
        {`import {useEffect,useState,useRef} from 'react';

function CallMe(props){

  const [phoneNumber,setPhoneNumber] = useState();
  const [currentNumber,setCurrentNumber] = useState();

  const phoneInputRef = useRef();

  const handleClick = (e)=>{
      setPhoneNumber(currentNumber);
  }

  const placeCall = () => {
    if(currentNumber){
      console.log(\`dialing ${currentNumber}\`);
    }
  };
  
  
  useEffect(() => {
    placeCall(phoneNumber);
  },[phoneNumber,placeCall]);

  return(
    <>
      <label>Enter the number to call:</label>
      <input type="phone" ref={phoneInputRef} onChange={()=>{setCurrentNumber(phoneInputRef.current.value)}}/>
      <button onClick={handleClick}>
        Place Call
      </button>
      <h1>{currentNumber}</h1>
    </>
  );
}

export default CallMe;`}
      </pre>
    </>
  );
}

export default CallMe;