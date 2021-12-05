import {Link} from 'react-router-dom';

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
      <div className="listing-result">
        <p>
          Here's the story that was passed down to the Grandson component:{" "}
          {props.story}
        </p>
      </div>
      
    </>
  );
};

    <>
      
      <h1>Prop Drilling</h1>
      <p>
        Data in React is passed down from parent components to child components
        using props. Often, it's necessary to pass certain data through multiple
        layers of components to get that data to the component where it's
        needed. This is what's referred to as 'prop drilling.'
      </p>
      <p>
        Prop drilling is a normal pattern and best practice in React. There are
        times, however, when 'global' data, such as user preferences or theming
        information must be passed to many different component and through
        multiple layers. If prop drilling becomes hard to keep track of or
        otherwise causes problems, it can be useful to use a technique such as <Link to="/listing1701">React Context</Link> 
        {` `}or <Link to="/listing1710">Composition</Link> to reduce or eliminate it.
      </p>
    </>
  );
}
export default Grandpa;
