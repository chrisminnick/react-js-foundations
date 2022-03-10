import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function Farm(props) {
  const onTheFarm = props.animals.map((animal) => {
    return `On his farm he had some ${animal}. `;
  });

  return (
    <div>
      <p>{props.farmer} had a farm.</p>
      {onTheFarm}
    </div>
  );
}
