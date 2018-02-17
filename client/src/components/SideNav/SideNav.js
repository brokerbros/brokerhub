import React from "react";
import "./SideNav.css";
import Form from "../Form/form.js"


<<<<<<< HEAD
const SideNav = () =>
<div id="SideNav">
		<Form />
</div>
=======
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
>>>>>>> 4fb3d3189dc88efd4d0ccd6ee65a7b8c911f67da


	)
}