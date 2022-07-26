import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '300px',
  
  position: 'none'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={
          {
            lat: 59.432204,
            lng: 24.746822
          }
        }
      >
        <Marker onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'} 
          position={{ lat: 59.432204, lng: 24.746822}} />
          
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0qRAA-wthKQiUrMhknuNSVX8511zokx4'
})(MapContainer);