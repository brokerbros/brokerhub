import React, {Component} from "react";
import "./Profile.css"


class Profile extends Component {
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
			<div className="container-fluid profilePage background-image">
    		<div className="contactInfo">
    			<div className="row justify-content-center">
            <div className="col-10">
					   <p className="brokerName">Adam Comora</p>
            </div>
            <div className="col-10">
					   <p className="brokerTitle">Senior Vice President</p>
            </div>
    			</div>
    			<div className="row justify-content-center">
    				<div className="col-7 col-sm-5 text-center">
    				<img className="profileImg" src="https://api.naiglobal.com/api/userimages?userId=2227&imageType=profile" alt="Profile Image"/>
    				</div>
    				<div className="col-10 col-sm-6 col-md-6">
            <div class="card">
              <div class="card-body contact-card">
                <h5 class="contact-header">NAI Capital HQ - Encino</h5>
                <p class="contact-text">16001 Ventura Boulevard Suite 200 </p>
                <p class="contact-text">Encino, California United States 91436</p>
                <p class="contact-text">
                  <span>T:</span>
                  <span>1 (555) 555-555</span>
                  <span> C:</span>
                  <span>1 (555) 555-555</span>
                  <span> F:</span>
                  <span>1 (555) 555-555</span>
                </p>
                <a href={`mailto:${"email@email.com"}?subject=Information Request via Your Web Site`}>email@email.com</a>
                <p class="contact-text">Licence #:100000001</p>
              </div>
            </div>
    				</div>
    			</div>
    		</div>
    		<div className="aboutMe">
    		</div>
		  </div>
		);
	}
}

export default Profile;