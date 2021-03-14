import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewMatch(props) {

  const iterate = (obj) => {
    let result = [];
    Object.keys(obj).forEach(key => {

    if (typeof obj[key] === 'object') {
      result.push(<li key={key}>{key}: </li>);
      iterate(obj[key])
    } else {
      result.push(<li key={key}>{key}: {obj[key]}</li>);
    }
    })
    return result;
  }

    return (
          <>
            <h1>Current Match</h1>
            <table>
            
                {iterate(props.match)}
            
            </table>
          </>
          
      );
}

export default withRouter(ViewMatch);