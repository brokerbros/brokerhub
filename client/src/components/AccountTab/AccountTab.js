import React, {Component} from "react";
import "./AccountTab.css"


class AccountTab extends Component {
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
			<section className="account-tab-section">
    		<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Account Information
          	</p>
          	<p className="account-info-text">
          		Enter the email and name to be used for your account.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<form className="form-group">
          		<label for="new-email">Email Address</label>
					    <input className="form-control" name="new-email" placeholder="email@mail.com" type="email"/>
					    <label for="new-first-name">First Name</label>
					    <input className="form-control" name="new-first-name" placeholder="Adam"/>
					    <label for="new-last-name">Last Name</label>
					    <input className="form-control" name="new-last-name" placeholder="Template"/>
					    <button className="btn btn-save" type="submit">Save</button>
					  </form>
          </div>
        </div>
    		<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Password
          	</p>
          	<p className="account-info-text">
          		Does not apply to authentication through Google or Facebook.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<form className="form-group">
          		<label for="current-password">Current Password</label>
					    <input className="form-control current-password" name="current-password" type="password" placeholder="Enter your current password"/>
					    <div className="form-separator"/>
					    <label for="new-password">New Password</label>
					    <input className="form-control" name="new-password" type="password" placeholder="Enter a new password"/>
					    <label for="new-confirm-password">Confirm Password</label>
					    <input className="form-control" name="new-confirm-password" type="password" placeholder="Enter the password again"/>
					    <button className="btn btn-save" type="submit">Change</button>
					  </form>
          </div>
        </div>
		  </section>
		);
	}
}

export default AccountTab;