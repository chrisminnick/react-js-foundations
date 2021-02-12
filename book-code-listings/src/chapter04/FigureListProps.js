import {Component} from 'react';
import BasicFigureProps from './BasicFigureProps';

class FigureListProps extends Component {
  render() {
    return (
        <div style={{display:"flex"}}>
            <BasicFigureProps filename="images/dog.png" caption="Dog" />
            <BasicFigureProps filename="images/cat.png" caption="Cat" />
            <BasicFigureProps filename="images/chickens.png" caption="Chickens" />
        </div>
    )
  }
}
export default FigureListProps;
