import React, { Component } from "react";
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import "./main.css";
import "./map.css";
import SideNav from "../SideNav/SideNav";

// const Search = () =>
//     <div className="container" id="map">
//     <h1>Broker Bros, Bro</h1>
//     <p>Insert Map Here</p>
//   </div>;

// export default Search;

const Search = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {lat: 34.040363, lng: -118.248691},
		zoom: 10
	};

	render() {
		return (
		<GoogleMapReact
			defaultCenter={this.props.center}
			defaultZoom={this.props.zoom}
		>

			<Search
			 lat={34.040363}
			 lng={-118.248691}
			 text={'BrokerBros, Bro!'}
			/>
		</GoogleMapReact>
		);
	}
}

// ReactDOM.render(
// 	<div style={{width: '100%', height: '400px'}}>
// 		<SimpleMap/>
// 	</div>,
// 	document.getElementById('root')
// );

export default Search;