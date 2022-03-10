import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function MyForm(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="fullName" />
        <input type="text" id="phoneNumber" />
        <button>Submit</button>
      </form>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function MyForm(props){
    return (
      <form onSubmit={props.handleSubmit}>
        <input type="text" id="fullName" />
        <input type="text" id="phoneNumber" />
        <button>Submit</button>
      </form>
    );
  }
  export default MyForm;`}
      </SyntaxHighlighter>
    </>
  );
}
export default MyForm;
