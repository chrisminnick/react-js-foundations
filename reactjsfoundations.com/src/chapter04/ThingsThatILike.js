import ThingsThatAreFunny from './ThingsThatAreFunny';
import Joke from './Joke';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default function ThingsILike(props) {
  return (
    <>
      <ThingsThatAreFunny>
        <ul>
          <li>
            <Joke id="0" />
          </li>
          <li>
            <Joke id="1" />
          </li>
        </ul>
      </ThingsThatAreFunny>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import ThingsThatAreFunny from './ThingsThatAreFunny';
import Joke from './Joke';

export default function ThingsILike(props){
    return (
      <ThingsThatAreFunny>
        <ul>
            <li><Joke id="0" /></li>
            <li><Joke id="1" /></li>
        </ul>
      </ThingsThatAreFunny>
    )
}`}
      </SyntaxHighlighter>
    </>
  );
}
