import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Marker from './children/Marker';
import InfoWindow from './children/InfoWindow'

const propertySeed = [
  {
    latitude: 34.063878,
    longitude: -118.448450,
    propertyName: "UCLA Extension"
  },
  {
    latitude: 34.069829,
    longitude: -118.444737,
    propertyName: "UCLA Anderson School of Management"
  },
  {
    latitude: 34.064135,
    longitude: -118.359208,
    propertyName: "LA County Museum of Art"
  },
  {
    latitude: 34.022717,
    longitude: -118.284959,
    propertyName: "University of Southern California"
  },
  {
    latitude: 33.942850,
    longitude: -118.408206,
    propertyName: "Los Angeles International Airport"
  }

];

// Instantiates the Map element with the default requirements.
export class MapContainer extends React.Component {
	constructor() {
		super()
		this.onMarkerClick = this.onMarkerClick.bind(this)
		this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
	}

	state = {
		showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
	}

	onMarkerClick(props, marker, e) {
		this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
	}

	onInfoWindowClose() {
		this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
	}

	render() {
		const style = {
 			width: '100%',
  			height: '100%',
  			overflow: 'hidden'
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
			{
				propertySeed.map(property => 
					<Marker
						onClick={this.onMarkerClick}
						name={ property.propertyName }
						position={{lat: property.latitude, lng: property.longitude}}
					/>
				)
			}

			<InfoWindow
					google={this.props.google}
			  	marker={this.state.activeMarker}
			  	visible={this.state.showingInfoWindow}
			  	onClose={this.onInfoWindowClose}
			>
			   	<div>
			    	<h1>{this.state.selectedPlace.name}</h1>
			    </div>
			</InfoWindow>

			</Map>
		);

	}
}

// Exports it as a higher-order function so it doesn't break.
export default GoogleApiWrapper({
	apiKey: ('AIzaSyAmfTEDDd7pBkvhl9TR37cIeEDFb6YbWL8')
})(MapContainer)