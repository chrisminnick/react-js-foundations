import { Component } from "react";
import BasicFigureProps from "./BasicFigureProps";

class FigureList extends Component {
  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <BasicFigureProps filename="images/dog.png" caption="Chauncey" />
          <BasicFigureProps filename="images/cat.png" caption="Murray" />
          <BasicFigureProps
            filename="images/chickens.png"
            caption="Lefty and Ginger"
          />
        </div>
        
      </>
    );
  }
}
export default FigureList;
