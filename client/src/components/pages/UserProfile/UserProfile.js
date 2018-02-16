import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./UserProfile.css"
import AccountTab from "../../AccountTab";
import ProfileTab from "../../ProfileTab";
import PropertiesTab from "../../PropertiesTab";



class UserProfile extends Component {
  constructor(){
    super()
  }

  viewAccount(){
    return <Route exact path="/profile/account" render={(props) => {
        return (
          <AccountTab 
            authenticated={this.props.authenticated} 
            currentUserInfo={this.props.currentUserInfo}
            updateCurrentUserInfo={this.props.updateCurrentUserInfo}
            updateDatabaseUserInfo={this.props.updateDatabaseUserInfo}
          />
        );
      }} />
  }

  viewProfile(){
    return <Route exact path="/profile/information" render={(props) => {
        return (
          <ProfileTab
            authenticated={this.props.authenticated} 
            currentUserInfo={this.props.currentUserInfo}
            updateCurrentUserInfo={this.props.updateCurrentUserInfo}
            updateDatabaseUserInfo={this.props.updateDatabaseUserInfo}
          />
        );
      }} />
  }

  viewProperties(){
    return <Route exact path="/profile/properties" render={(props) => {
        return (
          <div>
          Property information goes here...
          </div>
        );
      }} />
  }
	  	
	render() {
		return (
			<div className="user-profile-page">
    		<div className="account-header">
          Manage Account
        </div>
        <div className="row justify-content-around">
          <div className="col-12 col-sm-3 col-md-2 col-lg-1">
            <nav className="manage-account-nav">
              <div className="nav d-flex-column d-sm-flex-column nav-tabs" id="nav-tab" role="tablist">

                  <Link 
                    className={window.location.pathname === "/profile/account"? "nav-item account-nav-link active" : "nav-item account-nav-link"} 
                    to={"/profile/" + "account"}
                  >
                  Account
                  </Link>

                <div className="w-100 d-none d-md-block"></div>

                  <Link
                    className={window.location.pathname === "/profile/information"? "nav-item account-nav-link active" : "nav-item account-nav-link"} 
                    to={"/profile/" + "information"}
                  >
                    Profile Information
                  </Link>

                <div className="w-100 d-none d-md-block"></div>
                  <Link
                    className={window.location.pathname === "/profile/properties"? "nav-item account-nav-link active" : "nav-item account-nav-link"} 
                    to={"/profile/" + "properties"}
                  >
                    Properties
                  </Link>
              </div>
            </nav>
          </div>
          <div className="col-12 col-sm-9 col-md-10">
            <div className="tab-content" id="nav-tabContent">
              {this.viewAccount()}
              {this.viewProfile()}
              {this.viewProperties()}
            </div>
          </div>
        </div>
		  </div>
		);
	}
}

export default UserProfile;