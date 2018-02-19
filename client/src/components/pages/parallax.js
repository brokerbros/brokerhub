import React from "react"; 
import { Grid, Jumbotron, Button } from 'react-bootstrap';    

const Parallax = () => (
<div className="container">
            <section>
                <div className="image" data-type="background" data-speed="2">
                </div>
                <div className="stuff" data-type="content">
                    <div className="form-outer text-center d-flex align-items-center">
                        <div className="container">
                            <div id="form1" className="form-inner">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div className="container">
                    <Jumbotron>
                    <h1>Hello, world!</h1>
                        <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                         </p>
                        <p>
                        <Button bsStyle="primary">Learn more</Button>
                        </p>
                    </Jumbotron>     
                </div>
            <section>
                <div className="image" data-type="background" data-speed="7">
                </div>
                <div className="stuff" id="discover" data-type="content">
                    <div className="container" id="bottomDiv">
                    </div> 
                </div>
            </section>
</div>    
)    

export default Parallax;