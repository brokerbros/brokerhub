import React from "react"; 
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import picture from './suburban-family.jpg';
import "./Parallax.css";    

const Parallax = () => (
<div className="container">
            <section>
                <div className="image" data-type="background" data-speed="2">
                </div>
                <div className="stuff" data-type="content">
                    <div className="form-outer text-center d-flex align-items-center">
                        <div className="container">
                            <div id="form1" className="form-inner">
                            <img src={ picture }  />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div className="container">
    
                </div>
            <section>
                <div className="image" data-type="background" data-speed="7">
                </div>
                <div className="stuff" id="discover" data-type="content">
                    <div className="container" id="bottomDiv">
                                        <Jumbotron>
                    <h1>Brokerhub...the BEST option</h1>
                        <p>
                   At Brokerhub we care about fulfilling your needs.  That means going the extra mile to make sure you are fully satisfied with our service.
                         </p>
                        <p>
                        <Button bsStyle="primary">Learn more</Button>
                        </p>
                    </Jumbotron> 
                    </div> 
                </div>
            </section>
</div>    
)    

export default Parallax;