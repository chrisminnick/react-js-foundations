import {Component} from 'react';

class BasicFigure extends Component {

  render() {
    return(
      <figure>
        <img src="images/cat.jpeg" alt="a cat" />
        <figcaption>This is a picture of a cat.</figcaption>
      </figure>
    );
  }
}

export default BasicFigure;
