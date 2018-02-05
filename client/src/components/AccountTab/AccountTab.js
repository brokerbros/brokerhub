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
    		<div className="row account-info-section">
          <div className="col-12 col-sm-4 ">
          	<p className="account-info-title">
          		Account Information
          	</p>
          	<p className="account-info-text">
          		Enter the email and name to be used for your account.
          	</p>
          </div>
          <div className="col-12 col-sm-8">
          	<div className="form-group">
          		<label for="new-email">Email Address</label>
					    <input className="form-control" name="new-email" value="email@mail.com"/>
					    <label for="new-full-name">Full Name</label>
					    <input className="form-control" name="new-full-name" value="Adam Template"/>
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
    		<div className="row account-info-section">
          <div className="col-12 col-sm-4 ">
          	<p className="account-info-title">
          		Password
          	</p>
          	<p className="account-info-text">
          		Does not apply to authentication through Google or Facebook.
          	</p>
          </div>
          <div className="col-12 col-sm-8">
          	<div className="form-group">
          		<label for="current-password">Current Password</label>
					    <input className="form-control" name="current-password" type="password" placeholder="Enter your current password"/>
					    <div className="form-seperator"/>
					    <label for="new-full-name">Full Name</label>
					    <input className="form-control" name="new-full-name" type="password"/>
					    <label for="new-full-name">Full Name</label>
					    <input className="form-control" name="new-full-name" type="password"/>
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
		  </section>
		);
	}
}

export default AccountTab;