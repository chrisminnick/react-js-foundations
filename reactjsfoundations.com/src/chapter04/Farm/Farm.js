import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Farm(props) {
  return (
    <>
      <div>
        <p>{props.farmer} had a farm.</p>
        <p>On his farm, he had some {props.animals[0]}.</p>
        <p>On his farm, he had some {props.animals[1]}.</p>
        <p>On his farm, he had some {props.animals[2]}.</p>
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`export default function Farm(props){
  
  return (
  <div>  
    <p>{props.farmer} had a farm.</p>
    <p>On his farm, he had some {props.animals[0]}.</p>
    <p>On his farm, he had some {props.animals[1]}.</p>
    <p>On his farm, he had some {props.animals[2]}.</p>
  </div>
  )

}
`}
      </SyntaxHighlighter>
    </>
  );
}
