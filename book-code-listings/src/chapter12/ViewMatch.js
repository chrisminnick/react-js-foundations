import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewMatch(props) {

    const matchView = Object.keys(props.match).map((key) => {
        return <tr><td><strong>{key}</strong></td><td>{ String(props.match[key]) }</td></tr>
     })

    return (
          <>
            <h1>Current Match</h1>
            <table>
            
                {matchView}
            
            </table>
          </>
          
      );
}

export default withRouter(ViewMatch);