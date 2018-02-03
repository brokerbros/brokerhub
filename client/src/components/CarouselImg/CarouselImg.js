import React from "react";
import "./CarouselImg.css";

const CarouselImg = (props) => {
    return (
        <div>
            <img className='d-block w-100' src={props.image} />
            <p className='legend'>{props.id}</p>
        </div>
    );
}

export default CarouselImg;