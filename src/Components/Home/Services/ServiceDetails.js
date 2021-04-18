import React from 'react';
import { Link } from 'react-router-dom';
import './serviceDetails.css'

const ServiceDetails = ({service,handleCart}) => {
  return (
    <div className="card my-5 shadow-sm d-flex align-items-center justify-content-center">
      <img className="card-image card-img-top" src={service.imageURL} alt=""/>
      <div className="card-body">
      <h5 className="card-title text-center text-styleA">{service.title}</h5>
      <h5 className="card-title text-center">{service.price}$</h5>
      <p className="card-text text-center">{service.description}</p>
      <div className=" d-flex align-items-center justify-content-center">
      <Link to="/payment" onClick={()=>{handleCart(service)}} className="btn button text-white">Get Started</Link>
      </div>
      </div>
    </div>
  );
};

export default ServiceDetails;