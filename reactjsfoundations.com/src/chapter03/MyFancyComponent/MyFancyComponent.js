import MyFancyWidget from './MyFancyWidget';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function MyFancyComponent(props) {
  return (
    <>
      <MyFancyWidget
        widgetSize="huge"
        numberOfColumns="3"
        title="Welcome to My Widget"
      />
      <SyntaxHighlighter language="javascript" style={github}>
        {`import MyFancyWidget from './MyFancyWidget';

function MyFancyComponent(props){
  return(
    <MyFancyWidget
      widgetSize="huge"
      numberOfColumns="3"
      title="Welcome to My Widget" />
  )
}
export default MyFancyComponent;`}
      </SyntaxHighlighter>
    </>
  );
}
export default MyFancyComponent;
