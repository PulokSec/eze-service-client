import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';
import Slider from 'react-slick';
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
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

        useEffect(() => {
            fetch('https://pomato-server.onrender.com/allReviews')
                .then(res => res.json())
                .then(data => setReviews(data))
        }, [])

    return (
       <section className="testimonials" id="testimonial">
           <div className="container py-5 carousel">
               <div className="section-header">
                   <h2 className="text-styleA text-uppercase text-center">TESTIMONIALS</h2>
                   <h4 className="text-center">See What Our Clients Says About Us</h4>
                   <p className="text-center">Customer Satisfaction is our priority at all cost</p>
               </div>
               <Slider {...settings}>
               {
                  reviews.map(review => <Testimonial review={review}/>)
                }
               </Slider>
           </div>
       </section>
    );
};

export default Testimonials;