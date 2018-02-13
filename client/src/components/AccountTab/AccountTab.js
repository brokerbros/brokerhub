import React, {Component} from "react";
import "./AccountTab.css"


class AccountTab extends Component {
  constructor(){
    super()
    this.state = {
      userInfo: null
    }
  }

  componentDidMount() {
    this.setState({
      userInfo: this.props.currentUserInfo
    });
    console.log(this.state.userInfo)
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
          		Account Information
          	</p>
          	<p className="account-info-text">
          		Enter the email and name to be used for your account.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<form className="form-group">
          		<label >Email Address</label>
					    <input 
                className="form-control" 
                name="contactEmail"
                value={this.props.currentUserInfo.contactEmail}
                onChange={this.handleInputChange}
                placeholder="email@mail.com" 
                type="email"/>
					    <label >First Name</label>
					    <input
                className="form-control"
                name="firstName"
                value={this.props.currentUserInfo.firstName}
                onChange={this.handleInputChange}
                placeholder="Adam"
              />
					    <label >Last Name</label>
					    <input
                className="form-control"
                name="lastName"
                value={this.props.currentUserInfo.lastName}
                onChange={this.handleInputChange}
                placeholder="Template"
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
          		Password
          	</p>
          	<p className="account-info-text">
          		Does not apply to authentication through Google or Facebook.
          	</p>
          </div>
          <div className="col-10 col-sm-6">
          	<form className="form-group">
          		<label >Current Password</label>
					    <input className="form-control current-password" name="current-password" type="password" placeholder="Enter your current password"/>
					    <div className="form-separator"/>
					    <label >New Password</label>
					    <input className="form-control" name="new-password" type="password" placeholder="Enter a new password"/>
					    <label >Confirm Password</label>
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