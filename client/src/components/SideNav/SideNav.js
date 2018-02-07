import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";

const SideNav = () =>
<div id="SideNav">
	<ul className="nav nav-tabs">
    	<li className={window.location.pathname === "/" ? "active" : ""}>
      		<h1>Properties</h1>
      	</li>
     </ul>
</div>


export default SideNav;