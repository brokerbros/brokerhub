import React from "react";
import "./SideNav.css";
import Form from "../Form";

const SideNav = () =>
<div id="SideNav">
	<ul className="nav nav-tabs">
    	<li className={window.location.pathname === "/" ? "active" : ""}>
      		<h1>Properties</h1>
		</li>
     </ul>
     <ul className="buttons">
     	<button onclick="">
     	A
		</button>
		<button onclick="">
		B
		</button>
		<button onclick="">
		C
		</button>
     </ul>
</div>




export default SideNav;