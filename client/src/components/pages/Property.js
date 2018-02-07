import React, {
    Component
} from "react";
import CarouselImg from '../CarouselImg';
import './Property.css';

import data from "../../testdata.json";
import data2 from "../../testdata2.json";
console.log(data2);
class Property extends Component {
    state = {
        data: data,
        data2: data2
    };

    render() {
        return (
            <div className="page-body">
                <div className="topbar-container">
                    <h1 className="topbar">Property Information</h1>
                </div>
                <div className="property-container">
                    <h1>{this.state.data2[0].address}</h1>
                    <h3>{this.state.data2[0].city}, {this.state.data2[0].state} {this.state.data2[0].zipcode}</h3>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            {this.state.data.map(item => (
                                <li data-target="#carouselExampleIndicators" data-slide-to={item.id} class={item.id === 1 ? 'active' : ''}></li>
                            ))}
                        </ol>
                        <div class="carousel-inner">
                            {this.state.data.map(item => (
                                <CarouselImg
                                    id={item.id}
                                    image={item.image}
                                    active={item.id === 1 ? 'carousel-item active' : 'carousel-item'}
                                />
                            ))}
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <h2>Description</h2>
                    <p>{this.state.data2[0].description}</p>
                    <h2>Additional Information</h2>
                </div>
            </div>
        );
    }
}

export default Property;