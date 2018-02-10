import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { MapContainer } from '../Map'
import API from "../../utils/api";
import { Col, Row,  Container } from "../Grid";
import "./main.css";
import "./map.css";
import { Link } from "react-router-dom";
import { SideNav } from "../SideNav/SideNav";
import { List, ListItem } from "../List";

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
				<MapContainer />
				
			</div>
			<div className="row">
				<SideNav>
					{this.state.properties.length ? (
						<List>
							{this.state.properties.map(property => (
								<ListItem key={property._id}>
									<Link to={"/property/" + property._id}>
										<h4>{property.propertyName}</h4>
									</Link>
								</ListItem>
								))}
						</List>
						) : (
						<h3>No Results to Display</h3>
					)}
				</SideNav>
			</div>
		</div>
		);
	}	
}

export default Search;