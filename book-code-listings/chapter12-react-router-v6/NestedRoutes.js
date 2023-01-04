import { Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

function Reports() {
  let { pathname } = useLocation();

  return (
    <>
      <div>
        <h2>Reports</h2>
        <ul>
          <li>
            <Link to={`/profitloss`}>Profit and Loss</Link>
          </li>
          <li>
            <Link to={`/balancesheet`}>Balance Sheet</Link>
          </li>
          <li>
            <Link to={`/payroll`}>Payroll</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path={pathname} element={<h3>Select a report.</h3>} />
          <Route path={`${pathname}/:reportId`} element={<Report />} />
        </Routes>
      </div>
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
    <div>
      <ul>
        <li>
          <Link to={`reports`}>Reports</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path={`reports/*`} element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;
