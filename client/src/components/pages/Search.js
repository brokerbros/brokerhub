import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MapContainer } from '../Map'
import "./main.css";
import "./map.css";
import SideNav from "../SideNav/SideNav";

class Search extends Component {

	render() {
		return ( 
		<div className='container'>
			<h1>Map Container</h1>
			<MapContainer />
		</div>
		);
	}	
}

export default Search;