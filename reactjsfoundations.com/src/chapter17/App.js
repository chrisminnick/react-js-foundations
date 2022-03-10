import { UnitsProvider } from './contexts/UnitsContext';
import Header from './Header';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const App = (props) => {
  return (
    <>
      <UnitsProvider>
        <Header />
      </UnitsProvider>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import { UnitsProvider } from './contexts/UnitsContext';
import Header from './Header';

const App = (props) => {
    return (
        <>
        <UnitsProvider>
            <Header />
        </UnitsProvider>
        
        </>
    )
}

export default App;`}
      </SyntaxHighlighter>
    </>
  );
};

export default App;
