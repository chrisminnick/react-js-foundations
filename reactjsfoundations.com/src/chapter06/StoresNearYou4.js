import { Component } from 'react';
import Map from './Map';
import StoreList from './StoreList';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class StoresNearYou4 extends Component {
  render() {
    return (
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
        <SyntaxHighlighter language="javascript" style={github}>
          {`import {Component} from 'react';
import Map from './Map';
import StoreList from './StoreList';

class StoresNearYou4 extends Component{

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

StoresNearYou4.defaultProps = {
    latitude: "37.3230",
    longitude: "122.0322"
}
  
export default StoresNearYou4;
`}
        </SyntaxHighlighter>
      </>
    );
  }
}

StoresNearYou4.defaultProps = {
  latitude: '37.3230',
  longitude: '122.0322',
};

export default StoresNearYou4;
