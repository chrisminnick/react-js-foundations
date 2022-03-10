import styles from './my-component.module.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function DisplayMessage(props) {
  return (
    <>
      <p className={styles.redText}>This text is red.</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import styles from './my-component.module.css';

function DisplayMessage(props) {

  return (<p className = {styles.redText}>This text is red.</p>);

}

export default DisplayMessage;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default DisplayMessage;
