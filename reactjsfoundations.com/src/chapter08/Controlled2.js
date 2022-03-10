import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SignUp(props) {
  const [emailAddress, setEmailAddress] = useState('');

  const handleChange = (e) => {
    setEmailAddress(e.target.value);
  };

  return (
    <>
      <form>
        <label>
          Enter your email address:
          <input value={emailAddress} onChange={handleChange} type="text" />
        </label>
      </form>
      <br />
      Your email address: {emailAddress}
      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </>
  );
}

export default SignUp;
