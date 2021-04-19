import React from 'react';
import img from '../../images/male.png'

const Testimonial = (props) => {
    const {description,name,post ,image,rating} = props.review;
    let row = [];
    for(let i=0;i<rating;i++){
        row.push(i);
    }
    return (
        <div className="card-deck mt-5 pl-3">
                      <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                {image ? <img  src={image} width="60" alt="Profile Pic"/> :<img src={img} width="60" alt="Profile Pic"/>  }
                <div className="pl-3">
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{post}</p>
                    <ul className="list-inline mt-2">
                        {
                            row.map(list=><li className="list-inline-item text-styleB">⭐</li>)
                        }
                    </ul>
                </div>
            </div>
       </div>      
        </div>
    );
};

export default Testimonial;