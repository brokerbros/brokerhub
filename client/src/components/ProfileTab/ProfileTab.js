import React, {Component} from "react";
import "./ProfileTab.css"


class ProfileTab extends Component {
  constructor(){
    super()
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    let newVal = this.props.currentUserInfo;

    newVal[name] = value;

    this.props.updateCurrentUserInfo(newVal);    
  };

  handleInputSave = event => {
    event.preventDefault();
    this.props.updateDatabaseUserInfo()
  }

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
          	<form className="form-group">
          		<label >Contact Email</label>
					    <input 
                className="form-control" 
                name="contactEmail"
                value={this.props.currentUserInfo.contactEmail}
                onChange={this.handleInputChange}
                placeholder="ex. myemail@example.com" 
                type="email"
              />
          		<label >Phone Number</label>
					    <input 
                className="form-control"
                name="telephone"
                value={this.props.currentUserInfo.telephone}
                onChange={this.handleInputChange}
                placeholder="ex. (555)-555-5555"/>
					    <label >Cell Phone Number</label>
					    <input
                className="form-control"
                name="cellphone"
                value={this.props.currentUserInfo.cellphone}
                onChange={this.handleInputChange}
                placeholder="ex. (555)-555-5555"/>
					    <label >Fax Number</label>
					    <input
                className="form-control"
                name="fax"
                value={this.props.currentUserInfo.fax}
                onChange={this.handleInputChange}
                placeholder="ex. (555)-555-5555"
              />
					    <button
                className="btn btn-save" 
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </form>
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
          	<form className="form-group">
          		<label >Title</label>
					    <input
                className="form-control"
                name="title"
                value={this.props.currentUserInfo.title}
                onChange={this.handleInputChange}
                placeholder="ex. Senior Vice President"/>
					    <label >Location</label>
					    <input 
                className="form-control"
                name="location"
                value={this.props.currentUserInfo.location}
                onChange={this.handleInputChange}
                placeholder="ex. HQ - Los Angeles"/>
					    <button
                className="btn btn-save"
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </form>
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
          	<form className="form-group">
							<label >Scope of Service Experience</label>
					    <textarea
                className="form-control"
                name="scopeExperience"
                value={this.props.currentUserInfo.scopeExperience}
                onChange={this.handleInputChange}
                rows="10"
              />
              <button 
                className="btn btn-save"
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </form>
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
          	<form className="form-group">
					    <label >Background & Experience</label>
					    <textarea
                className="form-control"
                name="background"
                value={this.props.currentUserInfo.background}
                onChange={this.handleInputChange}
                rows="10"
              />
              <button 
                className="btn btn-save"
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </form>
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
          <form className="col-10 col-sm-6">
          	<div className="form-group">
					    <label >Education</label>
					    <textarea
                className="form-control"
                name="education"
                value={this.props.currentUserInfo.education}
                onChange={this.handleInputChange}
                rows="10"
              />
              <button 
                className="btn btn-save"
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </div>
          </form>
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
          <form className="col-10 col-sm-6">
          	<div className="form-group">
					    <label >Transaction History</label>
					    <textarea
                className="form-control"
                name="transactionHistory"
                value={this.props.currentUserInfo.transactionHistory}
                onChange={this.handleInputChange}
                rows="10"
              />
              <button 
                className="btn btn-save"
                type="submit"
                onClick={this.handleInputSave}
              >Save</button>
					  </div>
          </form>
        </div>
		  </section>
		);
	}
}

export default ProfileTab;