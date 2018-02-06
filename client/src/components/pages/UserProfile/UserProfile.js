import React, {Component} from "react";
import "./UserProfile.css"
import AccountTab from "../../AccountTab";
import ProfileTab from "../../ProfileTab";
import PropertiesTab from "../../PropertiesTab";


class UserProfile extends Component {
  // constructor(){
  //   super()
  // }
	  	// state = {
	//   data,
	//   name: data.name,
	//   address: data.address
 //  };
	render() {
		return (
			<div className="user-profile-page">
    		<div className="account-header">
          Manage Account
        </div>
        <div className="row justify-content-around">
          <div className="col-12 col-sm-3 col-md-2 col-lg-1">
            <nav className="manage-account-nav">
              <div class="nav d-flex-column d-sm-flex-column nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item account-nav-link active" id="nav-account-tab" data-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="true">Account</a>
                <div class="w-100 d-none d-md-block"></div>
                <a class="nav-item account-nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                <div class="w-100 d-none d-md-block"></div>
                <a class="nav-item account-nav-link" id="nav-properties-tab" data-toggle="tab" href="#nav-properties" role="tab" aria-controls="nav-properties" aria-selected="false">Properties</a>
              </div>
            </nav>
          </div>
          <div className="col-12 col-sm-9 col-md-10">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
                <AccountTab/>
              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <ProfileTab/>
              </div>
              <div class="tab-pane fade" id="nav-properties" role="tabpanel" aria-labelledby="nav-properties-tab">
                <PropertiesTab/>
              </div>
            </div>
          </div>
        </div>
		  </div>
		);
	}
}

export default UserProfile;