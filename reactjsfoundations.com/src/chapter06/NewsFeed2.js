import { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class NewsFeed2 extends Component {
  state = {
    date: new Date(),
    headlines: [],
  };

  render() {
    return (
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react'

class NewsFeed2 extends Component {

  state = {
    date: new Date(),
    headlines:[]
  }

  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
      </>
    )
  }
}

export default NewsFeed2;`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default NewsFeed2;
