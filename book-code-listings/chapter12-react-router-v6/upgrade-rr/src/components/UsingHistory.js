import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavMenu(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    </>
  );
}

export default NavMenu;
