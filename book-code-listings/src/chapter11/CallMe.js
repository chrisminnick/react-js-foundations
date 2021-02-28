import {useEffect,useState,useRef} from 'react';

function CallMe(props){

  const [phoneNumber,setPhoneNumber] = useState();
  const [currentNumber,setCurrentNumber] = useState();

  const phoneInputRef = useRef();

  const handleClick = (e)=>{
      e.preventDefault();
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
    <form>
      <label>Enter the number to call:</label>
      <input type="phone" ref={phoneInputRef} onChange={()=>{setCurrentNumber(phoneInputRef.current.value)}}/>
      <button onClick={handleClick}>
        Place Call
      </button>
      <h1>{currentNumber}</h1>
    </form>
  );
}

export default CallMe;
