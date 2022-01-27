import { lazy } from 'react';
import { routes } from './routes';
import usePageTracking from './usePageTracking';
import Helmet from 'react-helmet';
import CodeLinks from './CodeLinks';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorBoundary from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const MainNav = lazy(() => import('./MainNav'));

function App(props) {
  usePageTracking();
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>ReactJS Foundations by Chris Minnick</title>
        <meta
          name="description"
          content="Code examples, tutorials, updates, downloads, and blog for ReactJS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
        <meta
          property="og:url"
          content={`https://www.reactjsfoundations.com${location.pathname}${location.search}`}
        />
        <meta
          property="og:image"
          content="https://www.reactjsfoundations.com/images/cover.jpg"
        />
        <meta
          property="og:description"
          content="Code examples, tutorials, updates, downloads, and blog for ReactJS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
      </Helmet>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <div id="column2">
            <main>
              {routes}
              <CodeLinks />
            </main>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <MainNav />
          </Suspense>
        </Suspense>
      </div>
      <BottomNav />
    </>
  );
}

export default App;
