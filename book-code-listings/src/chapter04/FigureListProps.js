import {Component} from 'react';
import BasicFigureProps from './BasicFigureProps';

class FigureListProps extends Component {
  render() {
    return (
        <div style={{display:"flex"}}>
            <BasicFigureProps filename="images/dog.jpeg" caption="Chauncey" />
            <BasicFigureProps filename="images/cat.jpeg" caption="Murray" />
            <BasicFigureProps filename="images/chickens.jpeg" caption="Lefty and Ginger" />
        </div>
    )
  }
}
export default FigureListProps;
