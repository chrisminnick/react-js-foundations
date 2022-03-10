import Map from './Map';
import StoreList from './StoreList';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function StoresNearYou(props) {
  return (
    <>
      <div id="map-container">
        <Map
          latitude={props.latitude || '37.3230'}
          longitude={props.longitude || '122.0322'}
        />
      </div>
      <div id="store-list">
        <StoreList
          latitude={props.latitude || '37.3230'}
          longitude={props.longitude || '122.0322'}
        />
      </div>
      <SyntaxHighlighter language="javascript" style={github}>
        {`import Map from './Map';
import StoreList from './StoreList';

function StoresNearYou(props){
  return(
    <>
      <div id="map-container">
        <Map 
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
      <div id="store-list">
        <StoreList
          latitude={props.latitude || "37.3230"} 
          longitude={props.longitude || "122.0322"} 
        />
      </div>
    </>
  )
}

export default StoresNearYou;
`}
      </SyntaxHighlighter>
    </>
  );
}

export default StoresNearYou;
