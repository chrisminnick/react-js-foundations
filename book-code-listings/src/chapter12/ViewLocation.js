import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewLocation(props) {

    return (
          <>
            <h1>Current Location</h1>
            <ul>
                <li>pathname: {props.location.pathname}</li>
                <li>hash: {props.location.hash}</li>
                <li>search: {props.location.search}</li>
                <li>key: {props.location.key}</li>
            
            </ul>
            <pre>
              {`import React from "react";
import {
  withRouter
} from "react-router-dom";

function ViewLocation(props) {

    return (
          <>
            <h1>Current Location</h1>
            <ul>
                <li>pathname: {props.location.pathname}</li>
                <li>hash: {props.location.hash}</li>
                <li>search: {props.location.search}</li>
                <li>key: {props.location.key}</li>
            
            </ul>
          </>
          
      );
}

export default withRouter(ViewLocation);`}
            </pre>
          </>
          
      );
}

export default withRouter(ViewLocation);