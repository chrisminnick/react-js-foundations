import {useState} from 'react';

function SignUp(props){

  const [emailAddress,setEmailAddress] = useState('');

  const handleChange = (e)=>{
    setEmailAddress(e.target.value);
  }

  return(
    <>
      <form>
        <label>Enter your email address:
          <input value={emailAddress} onChange={handleChange} type="text" />
        </label>
      </form><br />
      Your email address: {emailAddress}
      <pre>
        {`import {useState} from 'react';

function SignUp(props){

  const [emailAddress,setEmailAddress] = useState('');

  const handleChange = (e)=>{
    setEmailAddress(e.target.value);
  }

  return(
    <>
      <form>
        <label>Enter your email address:
          <input value={emailAddress} onChange={handleChange} type="text" />
        </label>
      </form><br />
      Your email address: {emailAddress}
    </>
  )
}

export default SignUp;
`}
      </pre>
    </>
  )
}

export default SignUp;