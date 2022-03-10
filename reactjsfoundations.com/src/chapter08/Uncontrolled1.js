import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SignUp(props) {
  return (
    <>
      <form>
        <input type="text" name="emailAddress" />
        <button>Sign up for our newsletter</button>
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function SignUp(props){
  return(
    <form>
      <input type="text" name="emailAddress" />
      <button>Sign up for our newsletter</button>
    </form>
  )
}

export default SignUp;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default SignUp;
