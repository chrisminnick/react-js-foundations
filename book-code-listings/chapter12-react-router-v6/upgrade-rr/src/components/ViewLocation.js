import React from 'react';
import { useLocation } from 'react-router-dom';

function ViewLocation(props) {
  let location = useLocation();
  return (
    <>
      <h1>Current Location</h1>
      <ul>
        <li>pathname: {location.pathname}</li>
        <li>hash: {location.hash}</li>
        <li>search: {location.search}</li>
        <li>key: {location.key}</li>
      </ul>
    </>
  );
}

export default ViewLocation;
