import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function SizeSelect(props) {
  return (
    <>
      <select name="size" value={props.size} onChange={props.changeSize}>
        <option value="xs">Extra Small</option>
        <option value="sm">Small</option>
        <option vlue="md">Medium</option>
        <option value="lg">Large</option>
        <option value="xl">Extra Large</option>
      </select>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function SizeSelect(props){
    return(
      <select name="size" value={props.size} onChange={props.changeSize}>
        <option value="xs">Extra Small</option>
        <option value="sm">Small</option>
        <option vlue="md">Medium</option>
        <option value="lg">Large</option>
        <option value="xl">Extra Large</option>
      </select>
    );
  }
  
  export default SizeSelect;
  `}
      </SyntaxHighlighter>
    </>
  );
}

export default SizeSelect;
