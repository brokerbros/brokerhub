import React, {Component} from "react";
import "./Profile.css"
import API from '../../../utils/api'
import PlaceholderImage from '../../../images/default-placeholder.png'

class Profile extends Component {
  // constructor(){
  //   super()

  // }
	 state = {
      viewUser: ''
    }


   componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    let urlParam = window.location.pathname.split('/');
    if (urlParam[3]) {
      API.getUserById(urlParam[3])
        .then(res => {
          return this.setState({viewUser: res.data})
        })
        .catch(err => console.log(err));
      //this.setState({currentProperty: urlParam[2]});
    }

  }


	render() {
		return (
			<div className="profilePage">
    		<div className="contactInfo background-image">
    			<div className="row justify-content-center">
            <div className="col-10 col-sm-6">
					   <p className="brokerName">{`${this.state.viewUser.firstName} ${this.state.viewUser.lastName}`}</p>
             <p className="brokerTitle">{this.state.viewUser.title}</p>
            </div>
            <div className="col-8 col-sm-5 text-center">
              <img className="profileImg" src={PlaceholderImage} alt="Placeholder"/>
            </div>
    			</div>
    		</div>
    		<div className="aboutMe">
          <div className="row justify-content-start">
            <div className="col-11 col-md-7 order-2 order-md-1">
              <p className="header">Scope of Service Experience</p>
              <p className="about-text">{this.state.viewUser.scopeExperience}</p>
              <p className="header">Background & Experience</p>
              <p className="about-text">{this.state.viewUser.background}</p>
              <p className="header">Education</p>
              <p className="about-text">{this.state.viewUser.education}</p>
              <p className="header">Transaction History</p>
              <p className="about-text">{this.state.viewUser.transactionHistory}</p>
            </div>
            <div className="col-11 col-sm-8 col-md-5 order-1 order-md-2">
              <div className="card">
                <div className="card-body contact-card">
                  <h5 className="header">{this.state.viewUser.location}</h5>
                  <p className="contact-text">Address Line 1</p>
                  <p className="contact-text">Address Line 2</p>
                  <p className="contact-text">T: <span>{this.state.viewUser.telephone}</span></p>
                  <p className="contact-text">C: <span>{this.state.viewUser.cellphone}</span></p>
                  <p className="contact-text">F: <span>{this.state.viewUser.fax}</span></p>
                  <a href={`mailto:${this.state.viewUser.contactEmail}?subject=Information Request via Your Web Site`}>{this.state.viewUser.contactEmail}</a>
                  <p className="contact-text">Licence #{this.state.viewUser.licenseNumber}</p>
                </div>
              </div>
            </div>
          </div>
    		</div>
		  </div>
		);
	}
}

export default Profile;