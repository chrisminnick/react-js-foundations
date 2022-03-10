import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function WarningButton() {
  return (
    <>
      <div className="listing-result">
        <button
          onClick={() => {
            alert('Are you sure?');
          }}
        >
          Don't Click Here
        </button>
      </div>
      <CodeAndText />
    </>
  );
}

function CodeAndText() {
  return (
    <>
      <SyntaxHighlighter language="javascript" style={github}>
        {`function WarningButton(){

return (
  <button onClick={()=>{alert('Are you sure?');}}>Don't Click Here</button>
);

}

export default WarningButton;    `}
      </SyntaxHighlighter>
    </>
  );
}

export default WarningButton;
