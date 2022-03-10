import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function LogInput() {
  const logChange = (e) => {
    console.dir(e);
  };
  return (
    <>
      <input onChange={logChange} />
      <SyntaxHighlighter language="javascript" style={github}>
        {`function LogInput(){
    const logChange=(e)=>{
        console.dir(e);
    }
    return(
        <input onChange={logChange} />
    )
}

export default LogInput;`}
      </SyntaxHighlighter>
    </>
  );
}

export default LogInput;
