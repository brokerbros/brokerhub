import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { Position } from '@blueprintjs/core'

class Navbar extends Component {

  authenticatedNavImport() {
    if (this.props.authenticated === true) {
      return (
        <li className={window.location.pathname === "/import" ? "active" : ""}>
          <Link to="/import" className="pt-button pt-minimal">Import File</Link>
        </li>
        );
    }
  }

  authenticatedNavProfile() {
    if (this.props.authenticated === true) {
      return (
          <li className={window.location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile/account" className="pt-button pt-minimal">Profile</Link>
          </li>
        );
    }
  }

  render() {
     return (
      <nav className="pt-navbar">
      <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading" ><Link to="/" className="pt-button pt-minimal">BrokerHub</Link></div>
         <ul className="pt-navbar-group pt-align-left">
           <li className={window.location.pathname === "/" ? "active" : ""}>
             <Link to="/"></Link>
           </li>

           <li className={window.location.pathname === "/property" ? "active" : ""}>
             <Link to="/property" className="pt-button pt-minimal">Property</Link>
           </li>
           <li className={window.location.pathname === "/search" ? "active" : ""}>
           <Link to="/search" className="pt-button pt-minimal">Map</Link>
           </li>
           {this.authenticatedNavImport()}
           {this.authenticatedNavProfile()}
           <li className="searchBar">
              <form>
                <input type="text" placeholder="Search..." />
                <input type="submit" value="Submit" />
              </form>
           </li>
          </ul>
      </div>
      {
        this.props.authenticated
        ? (
          <div className="pt-navbar-group pt-align-right">
            <span className="pt-navbar-divider"></span>
            <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out">Log Out</Link>
          </div>
        )
          : (
            <div className="pt-navbar-group pt-align-right">
              <Link className="pt-button pt-intent-primary" to="/login">Register/Log In</Link>
            </div>
          )
      }
    </nav>

      );
    }
}


export default Navbar;
