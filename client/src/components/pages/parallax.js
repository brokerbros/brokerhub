import React from "react"; 
import { Jumbotron, Button, Panel, Grid, Row, Col } from 'react-bootstrap';
import "./Parallax.css";    

const Parallax = () => (
<div className="parallax-container">
            <section>
                <div className="image" data-type="background" data-speed="2">
                </div>
                <div className="stuff" data-type="content">
                    <div className="form-outer text-center d-flex align-items-center">
                        <div className="container">
                        <Jumbotron>
                        <h1 className="spacing">What's BrokerHub?</h1>
                        <p className="spacing">
                        BrokerHub is a web application that can be used to store, display and update real estate information for small to medium sized Real Estate Brokerage firms. 
                        </p>
                        <p>
                        <Button bsStyle="primary" href="#features">Learn more</Button>
                        </p>
                        </Jumbotron> 
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div className="image" data-type="background" data-speed="7">
                </div>
                <div className="information" id="discover" data-type="content">
                    
                        <h1 className="header-title">Features</h1>
                        <Grid>

                        <Row className="show-grid">
                            <Col className="features-list" xs={6} md={3} >
                                <h1 className="feature-title">Easy to use design</h1>
                                <p>Our mobile optimized fully responsive design simplifies the time required to update listings.</p>
                            </Col>
                            <Col className="features-list" xs={6} md={3} >
                                <h1 className="feature-title">Information all in one place</h1>
                                <p>Customizable gallery images for featured and sold listings. Displays essentials such property information</p>
                            </Col>
                            <Col className="features-list" xsHidden md={3}>
                                <h1 className="feature-title">Share information</h1>
                                <p>Keep track of listings and leads all within one platform. Use the platform to expand your presence.</p>
                            </Col>
                        </Row>

                        </Grid>
                    
                </div>
            </section>     

        <section>
            <div className="image" data-type="background" data-speed="7">
            </div>
            <div className="stuff" id="discover" data-type="content">
                
                <h1 className="header-title">We’re here for you, Let’s talk!</h1>
                <p className="feature-title">
                1(800)555-5555
                </p>
                
            </div>
        </section>       
</div>    
)    

export default Parallax;