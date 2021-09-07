import React from "react";
import {
  withRouter
} from "react-router-dom";

function NavMenu(props) {
    function handleClick() {
        props.history.push("/home");
      }
    
      return (
        <>
          <button type="button" onClick={handleClick}>
            Go home
          </button>
          <pre>{`import React from "react";
import {
  withRouter
} from "react-router-dom";

function NavMenu(props) {
    function handleClick() {
        props.history.push("/home");
      }
    
      return (
          <button type="button" onClick={handleClick}>
            Go home
          </button>
      );
}

export default withRouter(NavMenu);`}</pre>
          </>
      );
}

export default withRouter(NavMenu);