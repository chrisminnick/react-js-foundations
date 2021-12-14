import { Component } from "react";
import BasicFigureProps from "./BasicFigureProps";

class FigureList extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <BasicFigureProps filename="images/dog.png" caption="Chauncey" nocode/>
          <BasicFigureProps filename="images/cat.png" caption="Murray" nocode/>
          <BasicFigureProps
            filename="images/chickens.png"
            caption="Lefty and Ginger" nocode
          />
        </div>
        <pre>
          {`import {Component} from 'react';
import BasicFigureProps from './BasicFigureProps';

class FigureList extends Component {
  render() {
    return (
      <div style={{display:"flex"}}>  
        <BasicFigureProps filename="dog.jpg" caption="Chauncey" />
        <BasicFigureProps filename="cat.jpg" caption="Murray" />
        <BasicFigureProps filename="chickens.jpg" caption="Lefty and Ginger" />
      </div>
    )
  }
}
export default FigureList;`}
        </pre>
      </>
    );
  }
}
export default FigureList;
