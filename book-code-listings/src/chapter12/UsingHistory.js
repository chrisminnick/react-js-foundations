import React from "react";
import {
  useHistory
} from "react-router-dom";

function NavMenu(props) {

  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
    
  return (
      <>
    <button type="button" onClick={handleClick}>
      Go home
    </button>
    <pre>{`import React from "react";
import {
  useHistory
} from "react-router-dom";

function NavMenu(props) {

  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }
    
  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}

export default NavMenu;`}</pre></>
  );
}

export default NavMenu;