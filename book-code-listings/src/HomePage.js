import Introduction from './Introduction';
import WhereToBuy from './WhereToBuy';
import About from './About';
import CodeLinks from './CodeLinks';
import Helmet from 'react-helmet';
import DeviceIdentifier from 'react-device-identifier';

function HomePage() {
  return (
    <>
    <Helmet> 
      <title>React JS Foundations by Chris Minnick - Building User Interfaces with ReactJS: An
          Approachable Guide</title>
      <meta name="description" content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it." />
    </Helmet>
    <h2>Building User Interfaces with ReactJS: An
          Approachable Guide</h2>
      <Introduction />
      <DeviceIdentifier isDesktop={true}>

      <CodeLinks />
      </DeviceIdentifier>
      
  
      <WhereToBuy />
      <About />
    </>
  );
}

export default HomePage;
