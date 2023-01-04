import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function ComponentProp(props) {
  const OrderDetails = (props) => {
    return <h1>Details for order # {props.match.params.orderid}</h1>;
  };

  return (
    <>
      <Link to="/orders/4">Order #4</Link>
      <Routes>
        <Route path="/orders/:orderid" element={<OrderDetails />} />
      </Routes>
    </>
  );
}

export default ComponentProp;
