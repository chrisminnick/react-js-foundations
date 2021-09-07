import React from "react";
import {
  BrowserRouter as Router, 
  Route,
  Link
} from "react-router-dom";

function ComponentProp(props) {

    return (
          <>
            <Router>
                <Link to="/orders/4">Order #4</Link>
                <Route path="/orders/:orderid" render={props => (
                    <h1>Details for order # {props.match.params.orderid}</h1>
                )
                } />
            </Router>
            <pre>
              {`import React from "react";
import {
  BrowserRouter as Router, 
  Route,
  Link
} from "react-router-dom";

function ComponentProp(props) {

    return (
          <>
            <Router>
                <Link to="/orders/4">Order #4</Link>
                <Route path="/orders/:orderid" render={props => (
                    <h1>Details for order # {props.match.params.orderid}</h1>
                )
                } />
            </Router>
          </>
          
      );
}

export default ComponentProp;`}
            </pre>
          </>
          
      );
}

export default ComponentProp;