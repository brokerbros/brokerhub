import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Marker from './children/Marker';
//import { Link } from "react-router-dom";
import API from "../../utils/api";
import InfoWindow from './children/InfoWindow'


// Instantiates the Map element with the default requirements.
export class MapContainer extends Component {
	constructor() {
		super()
		this.onMarkerClick = this.onMarkerClick.bind(this)
		this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
	}

	state = {
		showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    properties: [],
    latitude: "",
    longitude: "",
    propertyName: "",
    squarefeet: "",
    type: "",
    askingrent: ""
	}

	componentDidMount() {
		this.getProperties();
	}

	getProperties = () => {
		API.getProperties()
			.then(res => 
				this.setState({ properties: res.data, latitude: "", longitude: "", propertyName: "", squarefeet: "", type: "", askingrent: "" })
			)
			.catch(err => console.log(err));
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
 			width: '1000px',
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
				this.state.properties.map(property => 
					<Marker
						onClick={this.onMarkerClick}
						_id={property._id}
						key={property._id}
						name={ property.propertyName }
						size={ property.squarefeet }
						type={ property.type }
						rent={ property.askingrent }
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
			    	<h4>{this.state.selectedPlace.name}</h4>
			    	<p>Size: {this.state.selectedPlace.size} square feet</p>
			    	<p>Type: {this.state.selectedPlace.type}</p>
			    	<p>Rent: $ {this.state.selectedPlace.rent}/SF</p>			    
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