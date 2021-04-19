import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './services.scss'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServiceDetails = ({service,handleCart}) => {
  return (
    <div className=" card-deck card-wrapper">
      <div className="card card-design">
      <div className="card-image img-top">
      <img className="" src={service.imageURL} alt=""/>
      </div>
      <div className="buy-button">
      <Link href="/payment" onClick={()=>{handleCart(service)}}><FontAwesomeIcon className="fa text-decoration-none" icon={faShoppingBag} />{service.price} $</Link>
      </div>
      <div className="details py-5">
      <h4 className="card-title text-center text-white text-uppercase">{service.title}</h4>
        <p className="text-center">{service.description}</p>
      </div>
    </div>
    </div>
  );
};

export default ServiceDetails;

