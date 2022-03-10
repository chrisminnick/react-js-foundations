import { Component } from 'react';
import BasicFigure from './BasicFigure';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';
import BasicFigure from './BasicFigure';

class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
      </>
    )
  }
}
export default FigureList;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}
export default FigureList;
