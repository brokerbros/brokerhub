import React from 'react';
import './Property.css';

class Properties extends Component {
    state = {
        data,
        name: data.name,
        address: data.address
    };

    render() {
        return (
            <div className='container'>
                <h1>Name</h1>
                <h2>Address</h2>
                <img src={logo} />
                <div className=''>
                    {props.children}
                </div>
                {/* <table> */}
            </div>
        );
    }
}

export default Properties;