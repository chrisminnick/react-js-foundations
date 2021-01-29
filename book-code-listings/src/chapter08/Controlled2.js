import {useState} from 'react';

function SignUp(props){

  const [emailAddress,setEmailAddress] = useState();

  const handleChange = (e)=>{
    setEmailAddress(e.target.value);
  }

  return(
    <>
      <form>
        <label>Enter your email address:
          <input value={emailAddress} onChange={handleChange} type="text" />
        </label>
      </form>
      <p>Your email address: {emailAddress}</p>
    </>
  )
}

export default SignUp;