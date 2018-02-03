import React from 'react';
import Carousel from 'react-responsive-carousel';
import './Carousel';
import './Property.css';

class Properties extends Component {
    state = {
        data,
        name: data.name,
        pictures: data.pictures,
        address: data.address
    };

    render() {
        return (
            <div className='container'>
                <h1>Name</h1>
                <h2>Address</h2>
                <Carousel>
                    <CarouselImg />
                </Carousel>
                <div className=''>
                    {props.children}
                </div>
                {/* <table> */}
            </div>
        );
    }
}

export default Properties;