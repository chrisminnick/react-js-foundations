import React from 'react';

function ReactMemoExample(props){
  return (
  <>
  <p>Hi, {props.firstName}. This component returns the same thing when given the same props.</p>
  <pre>
{`import React from 'react';

function ReactMemoExample(props){
  return (<p>Hi, {props.firstName}. This component returns the same thing when given the same props.</p>);
}

export default React.memo(ReactMemoExample);
`}</pre></>);
}

export default React.memo(ReactMemoExample);
