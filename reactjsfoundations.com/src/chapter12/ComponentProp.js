import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function ComponentProp(props) {
  const OrderDetails = (props) => {
    return <h1>Details for order # {props.match.params.orderid}</h1>;
  };

  return (
    <>
      <Router>
        <Link to="/orders/4">Order #4</Link>
        <Route path="/orders/:orderid" component={OrderDetails} />
      </Router>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import React from "react";
import {
  BrowserRouter as Router, 
  Route,
  Link
} from "react-router-dom";

function ComponentProp(props) {

    const OrderDetails = (props)=>{
        return (
            <h1>Details for order # {props.match.params.orderid}</h1>
        )
    }

    return (
          <>
            <Router>
                <Link to="/orders/4">Order #4</Link>
                <Route path="/orders/:orderid" component={OrderDetails} />
            </Router>
          </>
          
      );
}

export default ComponentProp;`}
      </SyntaxHighlighter>
    </>
  );
}

export default ComponentProp;
