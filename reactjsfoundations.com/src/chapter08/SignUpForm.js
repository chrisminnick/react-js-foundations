import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SignUpForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.commitFormData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" value={props.email} onChange={props.setEmail} />
        <button>Sign Up!</button>
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function SignUpForm(props){

const handleSubmit = (e)=>{
  e.preventDefault();
  props.commitFormData();
}

return(
  <form onSubmit={handleSubmit}>
    <input type="email" value={props.email} onChange={props.setEmail} />
    <button>Sign Up!</button>
  </form>
)
}

export default SignUpForm;  `}
      </SyntaxHighlighter>
    </>
  );
}

export default SignUpForm;
