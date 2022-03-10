import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function StyledChild(props) {
  return (
    <>
      <p className="red">
        This is testing whether styles cascade. Uncomment the style.css import
        in the code to see. Visit some of the other examples to see how an
        imported css file affects an entire application.
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function StyledChild(props){
    return (<p className="red">This is testing whether styles cascade. 
    Uncomment the style.css import in the code to see. Visit some of the other 
    examples to see how an imported css file affects an entire application.</p>)
}

export default StyledChild;`}
      </SyntaxHighlighter>
    </>
  );
}

export default StyledChild;
