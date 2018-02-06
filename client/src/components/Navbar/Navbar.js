import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () =>
<div class="Navbar">
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/"></Link>
    </li>
    <li className={window.location.pathname === "/search" ? "active" : ""}>
      <Link to="/search">Search</Link>
    </li>
    <li className={window.location.pathname === "/property" ? "active" : ""}>
      <Link to="/property">Property</Link>
    </li>
    <li className={window.location.pathname === "/import" ? "active" : ""}>
      <Link to="/import">Import File</Link>
    </li>
    <li className={window.location.pathname === "/profile" ? "active" : ""}>
      <Link to="/profile">Profile</Link>
    </li>
  </ul>

</div>

export default Navbar;
