import React from 'react';
import { LessTraveledPath, MoreTraveledPath } from './PathOptions';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
      <SyntaxHighlighter language="javascript" style={github}>
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
      </SyntaxHighlighter>
    </>
  );
}

export default ChooseYourAdventure;
