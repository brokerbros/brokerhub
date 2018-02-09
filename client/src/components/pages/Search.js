import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MapContainer } from '../Map'
import API from "../../utils/api";
// import { Col, Row,  Container } from "../Grid";
import "./main.css";
import "./map.css";
import SideNav from "../SideNav/SideNav";

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
				</div>
			</div>
			<div className="row">
				<div className="col-4">
				</div>
			</div>
			<div className="row">
				<MapContainer />
				<SideNav />
			</div>
		</div>
		);
	}	
}

export default Search;