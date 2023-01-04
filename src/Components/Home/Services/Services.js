import React, { useContext, useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import { UserContext } from '../../../App';
import Slider from 'react-slick';
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Services = () => {
  const [serviceData,setServiceData] = useState([]);
  const {setCart} = useContext(UserContext);
  const handleCart = cart =>{
    setCart(cart)
  }
  useEffect(()=>{
    fetch('https://pomato-server.onrender.com/services')
    .then(res => res.json())
    .then(data =>{
      setServiceData(data);
    })
  },[])
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
      }
    ]
  }
  return (
    <section id="services" className='services-container '>
      <div className="container py-5 carousel">
      <div className="section-header">
      <h2 className="text-styleA text-center py-3">OUR SERVICES</h2>
      </div>
      <Slider {...settings}>
      {
          serviceData.map( service => <ServiceDetails handleCart={handleCart} service={service}/>)
        }
      </Slider>
      </div>
    </section>
  );
};

export default Services;
