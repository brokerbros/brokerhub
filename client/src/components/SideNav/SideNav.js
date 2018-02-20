import React from "react";
import "./SideNav.css";
//import Form from "../Form";

export const SideNav = ({ children }) => {
	return (
	<div className="list-overflow-container" id="SideNav">
		<ul className="nav nav-tabs">
	    	<li className={window.location.pathname === "/" ? "active" : ""}>
	      		<h1>Properties</h1>
			</li>
	     </ul>
	     <ul className="list-group">
	     	{children}
	     </ul>
	</div>


	)
}