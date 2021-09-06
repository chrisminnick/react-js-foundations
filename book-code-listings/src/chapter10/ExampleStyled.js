import styled from 'styled-components';

const Heading = styled.h1`
  width: 50%;
  margin: 0 auto;
  font-size: 2.2em;
  color: #333300;`


const ExampleComponent = ()=>{
  return(
      <>
    <Heading>Example Heading</Heading>
    <pre>
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
    </pre>
    </>
  );
}

export default ExampleComponent;
