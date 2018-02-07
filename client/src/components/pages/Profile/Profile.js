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
			<div className="profilePage">
    		<div className="contactInfo background-image">
    			<div className="row justify-content-center">
            <div className="col-10 col-sm-6">
					   <p className="brokerName">Adam Template</p>
             <p className="brokerTitle">Senior Vice President</p>
            </div>
            <div className="col-8 col-sm-5 text-center">
              <img className="profileImg" src="https://api.naiglobal.com/api/userimages?userId=2227&imageType=profile" alt="Adam Comora"/>
            </div>
    			</div>
    		</div>
    		<div className="aboutMe">
          <div className="row justify-content-start">
            <div className="col-11 col-md-7 order-2 order-md-1">
              <p className="header">Scope of Service Experience</p>
              <p className="about-text">As Vice President for NAI Capital, Inc., Adam has distinguished himself as a proven deal maker who applies extensive market knowledge, the latest technology has to offer, as well as a wealth of information and resources to further accommodate his clients throughout the transaction process. Adam assures his clients’ satisfaction by genuine customer service allowing him to advise clients’ and maintain relationships through listening, communicating and educating clients to the highest standards. </p>
              <p className="header">Background & Experience</p>
              <p className="about-text">Since 2001, Adam Comora has represented Tenants and Landlords in all aspects of the leasing and sales of commercial properties. Adam offers a rare blend of talents and expertise to his progressive and results-oriented service as a successful real estate agent specializing in Office and Industrial Real Estate in the San Fernando Valley and surrounding areas. Adam enhances his capabilities and value to clients by also specializing in Investment Properties. This includes wide experience in all areas of commercial real estate, including development, office, retail and multifamily properties. Adam currently represents portfolios consisting of over 1,250,000 square feet of Office and Industrial Properties.</p>
              <p className="header">Education</p>
              <p className="about-text">Adam brings a solid educational and business background to Industrial Real Estate and Investments. He attended the University of Arizona where he majored in Communications. Later he spent one year with United Fabrics International in Los Angeles, leading the company in sales for the West Coast area prior to entering the commercial real estate industry in 2001. From 2001 through 2012, Adam served as Vice President for Delphi Business Properties in Van Nuys and was a dynamic producer each and every year. He is currently living in Sherman Oaks and has a diverse range of interests, including fine arts, classic cars, basketball, football, baseball, golf, tennis, snowboarding, traveling and other outdoor activities. Adam is also involved with numerous charities.</p>
              <p className="header">Transaction History</p>
              <p className="about-text">Some prominent clients he has served are Smart & Final, AIDS Project Los Angeles, Easton Sports, Paris Industrial Parks, Hager Pacific Properties, Standard Management Company, American Medical Response, Authentic Entertainment, Kaman Industrial Technologies. National Material Supply, Abex Display Systems, All American Moving & Storage, National Material Supply, Dr. Ramesh Arora, Verona Group LLC and many others. </p>
            </div>
            <div className="col-11 col-sm-8 col-md-5 order-1 order-md-2">
              <div className="card">
                <div className="card-body contact-card">
                  <h5 className="header">NAI Capital HQ - Encino</h5>
                  <p className="contact-text">16001 Ventura Boulevard Suite 200 </p>
                  <p className="contact-text">Encino, California United States 91436</p>
                  <p className="contact-text">T: <span>1 (555) 555-555</span></p>
                  <p className="contact-text">C: <span>1 (555) 555-555</span></p>
                  <p className="contact-text">F: <span>1 (555) 555-555</span></p>
                  <a href={`mailto:${"email@email.com"}?subject=Information Request via Your Web Site`}>email@email.com</a>
                  <p className="contact-text">Licence #:100000001</p>
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