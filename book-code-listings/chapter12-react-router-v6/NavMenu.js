import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{ backgroundColor: 'black', color: 'white' }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            activeStyle={{ backgroundColor: 'black', color: 'white' }}
          >
            About Us
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="/aboutUs/team"
                activeStyle={{ backgroundColor: 'black', color: 'white' }}
              >
                Meet the Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs/history"
                activeStyle={{ backgroundColor: 'black', color: 'white' }}
              >
                Company History
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            activeStyle={{ backgroundColor: 'black', color: 'white' }}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/aboutUs" element={<p>about us</p>} />
        <Route path="/aboutUs/team" element={<p>meet the team</p>} />
      </Routes>
    </div>
  );
}

export default NavMenu;
