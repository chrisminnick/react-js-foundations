import Map from './Map';
import StoreList from './StoreList';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function StoresNearYou(props) {
  return (
    <>
      <div id="map-container">
        <Map latitude={props.latitude} longitude={props.longitude} />
      </div>
      <div id="store-list">
        <StoreList latitude={props.latitude} longitude={props.longitude} />
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import Map from './Map';
import StoreList from './StoreList';

function StoresNearYou(props){
  return(
    <>
      <div id="map-container">
        <Map latitude={props.latitude} longitude={props.longitude} />
      </div>
      <div id="store-list">
        <StoreList latitude={props.latitude} longitude={props.longitude} />
      </div>
    </>
  )
}

StoresNearYou.defaultProps = {
  latitude: "37.3230",
  longitude: "122.0322"
}

export default StoresNearYou;

`}
      </SyntaxHighlighter>
    </>
  );
}

StoresNearYou.defaultProps = {
  latitude: '37.3230',
  longitude: '122.0322',
};

export default StoresNearYou;
