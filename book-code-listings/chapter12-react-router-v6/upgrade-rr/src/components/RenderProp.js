import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function OrderDetails() {
  let { orderid } = useParams();
  return <h1>Details for order # {orderid}</h1>;
}
function ComponentProp(props) {
  let { orderid } = useParams();
  console.log(orderid);
  return (
    <>
      <Link to="/orders/4">Order #4</Link>
      <Routes>
        <Route path="orders">
          <Route path=":orderid" element={<OrderDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default ComponentProp;
