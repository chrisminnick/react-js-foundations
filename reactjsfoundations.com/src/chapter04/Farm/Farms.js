import Farm from './Farm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Farms() {
  return (
    <>
      <Farm farmer="Old McDonald" animals={['pigs', 'cows', 'chickens']} />
      <Farm farmer="Mr. Jones" animals={['pigs', 'horses', 'donkey', 'goat']} />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import Farm from './Farm';

export default function Farms(){
  return(
    <>
      <Farm 
        farmer="Old McDonald"
        animals={['pigs','cows','chickens']} />
      <Farm
        farmer="Mr. Jones"
        animals={['pigs','horses','donkey','goat']} />  
    </>
  )
}`}
      </SyntaxHighlighter>
    </>
  );
}
