import React from "react";
import {LessTraveledPath,MoreTraveledPath} from './PathOptions';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function ChooseYourAdventure() {
  return (
    <>
    <BrowserRouter>
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

        
        <Switch>
          <Route path="/worn">
            <MoreTraveledPath />
          </Route>
          <Route path="/untrodden">
            <LessTraveledPath />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
    <pre>
      {`import React from "react";
import {LessTraveledPath,MoreTraveledPath} from './PathOptions';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function ChooseYourAdventure() {
  return (
    <BrowserRouter>
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

        
        <Switch>
          <Route path="/worn">
            <MoreTraveledPath />
          </Route>
          <Route path="/untrodden">
            <LessTraveledPath />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default ChooseYourAdventure;
`}
    </pre>
    </>
  );
}

export default ChooseYourAdventure;