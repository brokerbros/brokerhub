import React, {
  Component
} from "react";

import API from '../../utils/api.js';

import CarouselImg from '../CarouselImg';
import './Property.css';

class Property extends Component {

  state = {
    currentProperty: '',
    data: [],
    data2: []
  };

  componentDidMount() {
    this.getID();
    this.loadProperties();
  }

  getID = () => {
    let urlParam = window.location.pathname.split('/');
    console.log(urlParam);
    this.setState({currentProperty: urlParam[2]});
  }

  loadProperties = () => {
    API.getProperty(this.state.currentProperty)
      .then(res => {
          return this.setState({data: res.data[this.state.currentProperty], data2: res.data[this.state.currentProperty].images})
        }
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="page-body">
        <div className="topbar-container">
          Property Information
        </div>
        <div className="property-container container">
          <h1>{this.state.data.propertyName}</h1>
          <h3>{this.state.data.address} {this.state.data.city}, {this.state.data.state} {this.state.data.zipcode}</h3>
          <hr />
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              {this.state.data2.map(item => (
                <li data-target="#carouselExampleIndicators" data-slide-to={item.id} className={item.id === 1 ? 'active' : ''}></li>
              ))}
            </ol>
            <div className="carousel-inner">
              {this.state.data2.map(item => (
                <CarouselImg
                  id={item.id}
                  name={item.address}
                  image={item.image}
                  active={item.id === 1 ? 'carousel-item active' : 'carousel-item'}
                />
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="container">
            <h2>Description</h2>
            <p>{this.state.data.description}</p>
          </div>
          <div className="container">
            <h2>Additional Information</h2>
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th><strong>Address</strong></th>
                  <th>{this.state.data.address}</th>
                </tr>
                <tr>
                  <th><strong>City</strong></th>
                  <th>{this.state.data.city}</th>
                </tr>
                <tr>
                  <th><strong>State</strong></th>
                  <th>{this.state.data.state}</th>
                </tr>
                <tr>
                  <th><strong>Zipcode</strong></th>
                  <th>{this.state.data.zipcode}</th>
                </tr>
                <tr>
                  <th><strong>Square Feet</strong></th>
                  <th>{this.state.data.squarefeet}</th>
                </tr>
                <tr>
                  <th><strong>Type</strong></th>
                  <th>{this.state.data.type}</th>
                </tr>
                <tr>
                  <th><strong>Asking Rent</strong></th>
                  <th>{this.state.data.askingrent}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Property;