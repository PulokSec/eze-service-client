import React, { useContext, useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import { UserContext } from '../../../App';
import './serviceDetails.css'
const Services = () => {
  const [serviceData,setServiceData] = useState([]);
  const {setCart} = useContext(UserContext);
  const handleCart = cart =>{
    setCart(cart)
  }
  useEffect(()=>{
    fetch('https://protected-fjord-22180.herokuapp.com/services')
    .then(res => res.json())
    .then(data =>{
      setServiceData(data);
    })
  },[])
  return (
    <section id="services" className='services-container'>
      <div className="container py-5">
      <h2 className="text-styleA text-center">OUR SERVICES</h2>
      </div>
      <div className='d-flex justify-content-center'>
      <div className="card-deck my-5 py-5">
      {
        serviceData.map( service => <ServiceDetails handleCart={handleCart} service={service}/>)
      }
      </div>
    </div>
    </section>
  );
};

export default Services;