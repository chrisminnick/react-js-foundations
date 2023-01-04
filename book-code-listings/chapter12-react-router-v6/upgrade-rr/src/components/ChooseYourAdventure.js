import React from 'react';
import { LessTraveledPath, MoreTraveledPath } from './PathOptions';
import { Routes, Route, Link } from 'react-router-dom';

function ChooseYourAdventure() {
  return (
    <>
      <div>
        <p>You come to a fork in the road. Which path will you take?</p>
        <ul>
          <li>
            <Link to="/worn">The More Well-traveled Path</Link>
          </li>
          <li>
            <Link to="/untrodden">The Less Well-traveled Path</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/worn" element={<MoreTraveledPath />} />
          <Route path="/untrodden" element={<LessTraveledPath />} />
        </Routes>
      </div>
    </>
  );
}

export default ChooseYourAdventure;
