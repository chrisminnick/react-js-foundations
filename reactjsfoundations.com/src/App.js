import { lazy } from "react";
import { routes } from "./routes";
import usePageTracking from "./usePageTracking";
import Helmet from "react-helmet";
import CodeLinks from "./CodeLinks";
import BottomNav from "./BottomNav";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
const MainNav = lazy(() => import("./MainNav"));

function App(props) {
  usePageTracking();
  const location = useLocation();
  return (
    <>
      <Helmet>
        <title>React JS Foundations by Chris Minnick</title>

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
          content="Code examples, tutorials, updates, downloads, and blog for React JS Foundations by Chris Minnick. Get up to speed on building applications with ReactJS."
        />
      </Helmet>
      <div class="container">
        <div id="column2">
          <Suspense fallback={<div>Loading...</div>}>
            <header style={{ display: "block" }}>
              <a
                href="/"
                style={{
                  fontSize: "1.75em",
                  fontWeight: "800",
                  display: "block",
                  color: "#000",
                }}
              >
                React JS Foundations
              </a>
              <p>by Chris Minnick</p>
            </header>
            <main>
              {routes}
              <CodeLinks />
              <BottomNav />
            </main>
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <MainNav />
        </Suspense>
      </div>
    </>
  );
}

export default App;
