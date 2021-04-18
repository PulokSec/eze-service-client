import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import Testimonial from './Testimonial';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

        useEffect(() => {
            fetch('https://protected-fjord-22180.herokuapp.com/allReviews')
                .then(res => res.json())
                .then(data => setReviews(data))
        }, [])

    return (
       <section className="testimonials" id="testimonial">
           <div className="container py-5">
               <div className="section-header">
                   <h2 className="text-styleA text-uppercase text-center">TESTIMONIALS</h2>
                   <h4 className="text-center">See What Our Clients Says About Us</h4>
                   <p className="text-center">Customer Satisfaction is our priority at all cost</p>
               </div>
               <div className="card-deck mt-5">
                    {
                        reviews.map(review => <Testimonial review={review}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;