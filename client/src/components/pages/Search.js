import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import "./main.css";
import "./map.css";
import SideNav from "../SideNav/SideNav";

<<<<<<< HEAD
const Search = () =>
    <div className="container" id="map">
    <h1>Broker Bros, Bro</h1>
    <p>Insert Map Here</p>
     <SideNav />
  </div>;
=======
// const Search = () =>
//     <div className="container" id="map">
//     <h1>Broker Bros, Bro</h1>
//     <p>Insert Map Here</p>
//   </div>;
>>>>>>> eb6d153ac15415f2e780a571c6257b84345a59a4

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

export default Search;