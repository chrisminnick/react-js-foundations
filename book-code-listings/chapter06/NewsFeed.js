import { Component } from "react";
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
        
      </>
    );
  }
}


    <>
    
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
