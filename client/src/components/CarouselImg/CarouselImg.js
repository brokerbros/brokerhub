import React from "react";
import "./CarouselImg.css";

const CarouselImg = (props) => {
    return (
        <div className={props.clicked}>
            <img className='d-block w-100 pic-restruc' src={props.image} />
            <div className="carousel-caption d-none d-md-block">
                <p className='textcolor'>{props.id}</p>
            </div>
        </div>
    );
}

export default CarouselImg;