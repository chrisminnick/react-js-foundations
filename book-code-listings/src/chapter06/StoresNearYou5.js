import Map from './Map';
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
      <pre>
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
      </pre>
    </>
  )
}

StoresNearYou.defaultProps = {
  latitude: "37.3230",
  longitude: "122.0322"
}

export default StoresNearYou;

