import React, {Component} from "react";
import "./ProfileTab.css"


class ProfileTab extends Component {
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
          		Contact Information
          	</p>
          	<p className="account-info-text">
          		Enter contact information for your profile.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
          		<label for="new-contact-email">Contact Email</label>
					    <input className="form-control" name="new-phone" placeholder="ex. myemail@example.com"/>
          		<label for="new-phone">Phone Number</label>
					    <input className="form-control" name="new-phone" placeholder="ex. (555)-555-5555"/>
					    <label for="new-cell-phone">Cell Phone Number</label>
					    <input className="form-control" name="new-cell-phone" placeholder="ex. (555)-555-5555"/>
					    <label for="new-fax">Fax Number</label>
					    <input className="form-control" name="new-fax" placeholder="ex. (555)-555-5555"/>
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
    		<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Title and Location Information
          	</p>
          	<p className="account-info-text">
          		Enter additional information to display on your profile.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
          		<label for="new-title">Title</label>
					    <input className="form-control" name="new-title" placeholder="ex. Senior Vice President"/>
					    <label for="new-location">Location</label>
					    <input className="form-control" name="new-location" placeholder="ex. HQ - Los Angeles"/>
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
      	<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Scope of Service Experience
          	</p>
          	<p className="account-info-text">
          		Enter additional information to highlight your service experience.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
							<label for="new-experience">Scope of Service Experience</label>
					    <textarea className="form-control" rows="10" name="new-experience" />
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
      	<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Background & Experience
          	</p>
          	<p className="account-info-text">
          		Enter additional information to highlight your background and experience.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
					    <label for="new-background">Background & Experience</label>
					    <textarea className="form-control" rows="10" name="new-background" />
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
      	<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Education
          	</p>
          	<p className="account-info-text">
          		Enter additional information to highlight your education/credentials.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
					    <label for="new-education">Education</label>
					    <textarea className="form-control" rows="10" name="new-education" />
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
      	<div className="row account-info-section justify-content-around">
          <div className="col-10 col-sm-4 ">
          	<p className="account-info-title">
          		Transaction History
          	</p>
          	<p className="account-info-text">
          		Enter additional information to highlight your trasaction experience.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<div className="form-group">
					    <label for="new-transaction-history">Transaction History</label>
					    <textarea className="form-control" rows="10" name="new-transaction-history" />
					    <button className="btn btn-save" type="submit">Save</button>
					  </div>
          </div>
        </div>
		  </section>
		);
	}
}

export default ProfileTab;