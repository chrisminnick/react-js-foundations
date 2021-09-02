import {Component} from 'react';
import BasicFigure from './BasicFigure';

class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
      <pre>
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
      </pre>
      </>
    )
  }
}
export default FigureList;
