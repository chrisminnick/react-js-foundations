import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: 'black', color: 'white' }
                : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/aboutUs"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: 'black', color: 'white' }
                : undefined
            }
          >
            About Us
          </NavLink>
          <ul>
            <li>
              <NavLink
                exact
                to="/aboutUs/team"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: 'black', color: 'white' }
                    : undefined
                }
              >
                Meet the Team
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/aboutUs/history"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: 'black', color: 'white' }
                    : undefined
                }
              >
                Company History
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            exact
            to="/contactUs"
            style={({ isActive }) =>
              isActive
                ? { backgroundColor: 'black', color: 'white' }
                : undefined
            }
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
