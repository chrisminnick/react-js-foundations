import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Component } from 'react';
class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      headlines: [],
    };
  }
  render() {
    return (
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        <CodeAndText />
      </>
    );
  }
}

function CodeAndText() {
  return (
    <>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import {Component} from 'react'

class NewsFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      headlines:[]
    }
  }
  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
      </>
    )
  }
}

export default NewsFeed;`}
      </SyntaxHighlighter>
      <hr />

      <h1>Using State in a Class Component</h1>
      <p>
        Class components are components created by extending the React.Component
        class. Although almost everything in React can be done using function
        components, understanding class components will give you a deeper
        understanding of how React works, and it will also enable you to use the
        features and techniques in React that aren't accessible using function
        components.
      </p>

      <p>
        To create a class component, import React into your module and then
        extend React's Component class.
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';

class MyComponent extends React.Component {

...

}`}
      </SyntaxHighlighter>
      <p>
        A JavaScript class can have a constructor method, which will only run
        once during the lifecycle of the component. The constructor is used to
        initialize the state object and to bind functions to the class. The
        constructor method is optional, but if you do use it, you must call the
        super() method as the first thing inside constructor. The super() method
        calls the constructor of the parent class. You should also pass the
        props object to super().
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';

class MyComponent extends React.Component {

constructor(props){
  super(props);
  this.state = {
    ...
  }
 }
 
...

}

export default MyComponent;`}
      </SyntaxHighlighter>
      <p>
        The rest of a component may contain any number of methods, but one
        method, render() must be present. The render() method of a class
        component is essentially the same as a function component (except that
        it can't access hooks). The render method has a return statement that
        uses JSX to define the part of the user interface the component is
        responsible for.
      </p>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from 'react';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ...
    }
  }
 
  render(){
    return (<h1>Welcome to my component.</h1>);
  }
}

export default MyComponent;`}
      </SyntaxHighlighter>
      <p>
        The state object, which can be initialized in the constructor of a class
        component, holds the stateful properties of a component. When these
        properties change, React re-renders the component. The reason React
        knows to re-render the component when the state object changes, is
        because the developer only changes the state object using React's
        setState() method.
      </p>
    </>
  );
}
export default NewsFeed;
