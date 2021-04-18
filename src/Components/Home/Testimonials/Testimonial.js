import React from 'react';
import img from '../../images/male.png'

const Testimonial = (props) => {
    const {description,name,post ,image,rating} = props.review;
    let row = [];
    for(let i=0;i<rating;i++){
        row.push(i);
    }
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                {image ? <img className="mx-3" src={image} width="60" alt="Profile Pic"/> :<img className="mx-3" src={img} width="60" alt="Profile Pic"/>  }
                <div>
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
    );
};

export default Testimonial;