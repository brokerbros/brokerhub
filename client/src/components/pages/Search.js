import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MapContainer } from '../Map'
import API from "../../utils/API";
// import { Col, Row,  Container } from "../Grid";
import "./main.css";
import "./map.css";
import SideNav from "../SideNav/SideNav";

<<<<<<< HEAD
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
=======
>>>>>>> 880b4272452055f50b799ba4a800eff9ac089418


class Search extends Component {
	state = {
		properties: [],
		latitude: "",
		longitude: "",
		propertyName: ""
	};

	componentDidMount() {
		this.loadProperties();
	}

	loadProperties = () => {
		API.getProperties()
			.then(res => 
				this.setState({ properties: res.data, latitude: "", longitude: "", propertyName: "" })
			)
			.catch(err => console.log(err));
	};

	render() {
		return ( 
		<div className="container">
			<div className="row">
				<div className="col-8">
				<h1>Map Container</h1>
				</div>
				<div className="col-4">
				<h1>Search Bar</h1>
				</div>
			</div>
			<div className="row">
				<MapContainer />
			</div>
		</div>
		);
	}	
}

export default Search;