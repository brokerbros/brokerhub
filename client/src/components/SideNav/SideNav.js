import React from "react";
import { Link } from "react-router-dom";

const SideNav = () =>
	<ul className="nav nav-tabs">
    	<li className={window.location.pathname === "/" ? "active" : ""}>
      		<p> Insert Property Info Here </p>
    	</li>

	</ul>;



export default SideNav;