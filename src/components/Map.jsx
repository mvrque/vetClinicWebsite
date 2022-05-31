import React from 'react'
import { GoogleMapReact } from 'google-maps-react';
import './Map.css'
import LocationPin from './LocationPin'

const location = {
  address: 'Tatari 3, 10116 Tallinn',
  lat: 59.43217285227294, 
  lng: 24.746574120289214,
}

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAv4dsyugIf0Z_lRQaLXA8bH_W6CzYEtrI' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map;