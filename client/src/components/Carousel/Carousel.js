import React from "react";
import "./Carousel.css";

const CarouselImg = props => {
    <div>
        <img src={props.children} />
        <p className="legend">{props.children}</p>
    </div>
}

export default CarouselImg;