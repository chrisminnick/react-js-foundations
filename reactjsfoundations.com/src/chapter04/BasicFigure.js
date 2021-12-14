import { Component } from "react";

class BasicFigure extends Component {
  render() {
    return (
      <>
        <div className="listing-result">
          <figure>
            <img src="images/cat.png" alt="a cat" />
            <figcaption>This is a picture of a cat.</figcaption>
          </figure>
        </div>
        <CodeAndText />
      </>
    );
  }
}

function CodeAndText() {
  return (
    <pre>
      {`import {Component} from 'react';

class BasicFigure extends Component {

  render() {
    return(
      <figure>
        <img src="images/cat.png" alt="a cat" />
        <figcaption>This is a picture of a cat.</figcaption>
      </figure>
    );
  }
}

export default BasicFigure;
`}
    </pre>
  );
}

export default BasicFigure;
