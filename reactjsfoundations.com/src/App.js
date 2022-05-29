import { lazy } from 'react';
import { routes } from './routes';
import usePageTracking from './usePageTracking';
import Helmet from 'react-helmet';
import CodeLinks from './CodeLinks';
import BottomNav from './BottomNav';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import WpBlogWidget from './WpBlogWidget';

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
        <Suspense fallback={<div></div>}>
          <div id="column2">
            <main>
              {routes}
              <CodeLinks />
            </main>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <MainNav />
          </Suspense>
          <div id="column3">
            <div className="social_icons">
              <SocialIcon
                url="https://twitter.com/chrisminnick"
                style={{ height: 40, width: 40, margin: '8px' }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/chrisminnick/"
                style={{ height: 40, width: 40, margin: '8px' }}
              />
            </div>
            <a
              href="https://www.amazon.com/dp/1119685540?&linkCode=li3&tag=chrismincom-20&linkId=6c69efbcfd2ca6ae74a870e3a88a40db&language=en_US&ref_=as_li_ss_il"
              target="_blank"
            >
              <img
                alt="ReactJS Foundations"
                border="0"
                width="200"
                height="250"
                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=1119685540&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=chrismincom-20&language=en_US"
              />
            </a>
            <img
              src="https://ir-na.amazon-adsystem.com/e/ir?t=chrismincom-20&language=en_US&l=li3&o=1&a=1119685540"
              width="1"
              height="1"
              border="0"
              alt=""
              style={{ border: 'none !important', margin: '0px !important' }}
            />
            <br />
            <br />
            <WpBlogWidget posts="3" title="Latest Blog Posts" />
          </div>
        </Suspense>
      </div>
      <BottomNav />
    </>
  );
}

export default App;
