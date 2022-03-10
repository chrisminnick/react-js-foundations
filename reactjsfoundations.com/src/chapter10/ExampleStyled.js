import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Heading = styled.h1`
  width: 50%;
  margin: 0 auto;
  font-size: 2.2em;
  color: #333300;
`;

const ExampleComponent = () => {
  return (
    <>
      <Heading>Example Heading</Heading>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import styled from 'styled-components';

const Heading = styled.h1\`
  width: 50%;
  margin: 0 auto;
  font-size: 2.2em;
  color: #333300;\`


const ExampleComponent = ()=>{
  return(
    <Heading>Example Heading</Heading>
  );
}

export default ExampleComponent;
`}
      </SyntaxHighlighter>
    </>
  );
};

export default ExampleComponent;
