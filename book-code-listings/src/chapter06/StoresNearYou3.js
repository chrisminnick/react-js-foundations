import {Component} from 'react';
import Map from './Map';
import StoreList from './StoreList';

class StoresNearYou3 extends Component{

  static defaultProps = {
    latitude: "37.3230",
    longitude: "122.0322"
  }

  render(){
    return(
      <>
        <div id="map-container">
          <Map 
            latitude={this.props.latitude} 
            longitude={this.props.longitude} 
          />
        </div>
        <div id="store-list">
          <StoreList
            latitude={this.props.latitude} 
            longitude={this.props.longitude} 
          />
        </div>
        <pre>
{`import {Component} from 'react';
import Map from './Map';
import StoreList from './StoreList';

class StoresNearYou3 extends Component{

  static defaultProps = {
    latitude: "37.3230",
    longitude: "122.0322"
  }

  render(){
    return(
      <>
        <div id="map-container">
          <Map 
            latitude={this.props.latitude} 
            longitude={this.props.longitude} 
          />
        </div>
        <div id="store-list">
          <StoreList
            latitude={this.props.latitude} 
            longitude={this.props.longitude} 
          />
        </div>
      </>
    )
  }
}

export default StoresNearYou3;
`}
        </pre>
      </>
    )
  }
}

export default StoresNearYou3;
