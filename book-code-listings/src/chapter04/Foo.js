import React from 'react';

class Foo extends React.Component{
    constructor( props ){
      super( props );
      this.message = "hello";
      this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(event){
      console.log(this.message); // 'this' is undefined
    }
      
    render(){
      return (
        <button type="button" onClick={this.handleClick}>
          Click Me
        </button>
      );
    }
  }
    
  export default Foo;