const Grandpa = (props) => {
  return <Dad story={props.story} />;
};

const Dad = (props) => {
  return <Son story={props.story} />;
};

const Son = (props) => {
  return <Grandson story={props.story} />;
};

const Grandson = (props) => {
  return (
    <>
      <p>
        Here's the story that was passed down to the Grandson component:{" "}
        {props.story}
      </p>
      <pre>
        {`const Grandpa = (props) => {
  return (<Dad story = {props.story} />);
}
  
const Dad = (props) => {
  return (<Son story = {props.story} />);
}

const Son = (props) => {
  return (<Grandson story = {props.story} />);
}

const Grandson = (props) => {
  return (<p>Here's the story that was passed down to the Grandson component: {props.story}</p>);
}
  
export default Grandpa;`}
      </pre>
    </>
  );
};

export default Grandpa;
