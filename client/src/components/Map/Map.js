import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


// Instantiates the Map element with the default requirements.
export class MapContainer extends React.Component {
	render() {
		const style = {
 			width: '100%',
  			height: '100%'
		}

		if (!this.props.loaded) {
			return <div>Loading...</div>
		}
		return (
			<Map 
				google={this.props.google} 
				style={style}
				initialCenter={{
					lat: 34.040363,
					lng: -118.248691
				}}
				zoom={10}
				onClick={this.onMapClicked}
				>

			</Map>
		);

	}
}

// Exports it as a higher-order function so it doesn't break.
export default GoogleApiWrapper({
	apiKey: ('AIzaSyAmfTEDDd7pBkvhl9TR37cIeEDFb6YbWL8')
})(MapContainer)