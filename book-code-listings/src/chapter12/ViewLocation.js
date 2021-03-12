import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewLocation(props) {

    const locationView = Object.keys(props.location).map((key) => {
        return <tr><td><strong>{key}</strong></td><td>{ JSON.stringify(props.location[key]) }</td></tr>
     })

    return (
          <>
            <h1>Current Location</h1>
            <table>
            
                {locationView}
            
            </table>
          </>
          
      );
}

export default withRouter(ViewLocation);