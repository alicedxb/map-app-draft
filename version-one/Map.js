import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import { mapStyle } from './mapStyle.js';


class Map extends Component {
    render() {

  	    const Map = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = {{ lat: 41.6934, 
                	               lng: 44.8015 }}
                defaultZoom = {13}
                defaultOptions = {{ styles: mapStyle.styles }}
            >
            </GoogleMap>
  	    ));

  	    return(
  	        <div>
  	        <Map
  	        containerElement={ <div style={{ height: '600px', width: '1000px' }} /> }
  	        mapElement={ <div style={{ height: '100%' }} /> }
  	        />
  	    </div>
  	);

  	    }
};

export default Map;