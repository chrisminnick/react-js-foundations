import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";
  
function Reports() {
  let { path, url } = useRouteMatch();
  
    return (
      <>
      <div>
        <h2>Reports</h2>
        <ul>
          <li>
            <Link to={`${url}/profitloss`}>Profit and Loss</Link>
          </li>
          <li>
            <Link to={`${url}/balancesheet`}>Balance Sheet</Link>
          </li>
          <li>
            <Link to={`${url}/payroll`}>Payroll</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Select a report.</h3>
          </Route>
          <Route path={`${path}/:reportId`}>
            <Report />
          </Route>
        </Switch>
      </div>
      <pre>
        {`import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation
} from "react-router-dom";
  
function Reports() {
  let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Reports</h2>
        <ul>
          <li>
            <Link to={\`\${url}/profitloss\`}>Profit and Loss</Link>
          </li>
          <li>
            <Link to={\`\${url}/balancesheet\`}>Balance Sheet</Link>
          </li>
          <li>
            <Link to={\`\${url}/payroll\`}>Payroll</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Select a report.</h3>
          </Route>
          <Route path={\`\${path}/:reportId\`}>
            <Report />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Report() {
  
    let { reportId } = useParams();
  
    return (
      <div>
        <h3>{reportId}</h3>
      </div>
    );
  }

function App() {
  const location = useLocation();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={\`\${location.pathname}/reports\`}>Reports</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path={\`\${location.pathname}/reports\`}>
            <Reports />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
`}
      </pre>
      </>
    );
  }
  
  function Report() {
  
    let { reportId } = useParams();
  
    return (
      <div>
        <h3>{reportId}</h3>
      </div>
    );
  }

function App() {
  const location = useLocation();
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to={`${location.pathname}/reports`}>Reports</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path={`${location.pathname}/reports`}>
            <Reports />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
