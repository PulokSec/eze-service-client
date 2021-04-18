import React from 'react';
import './Team.css'
const Team = (props) => {
  const {name,imageURL,description,post} = props.team;
  return (
    <div className="card mt-5 shadow-sm d-flex align-items-center justify-content-center">
      <img src={imageURL} class="card-img card-img-top" alt=""/>
            <div className="card-body">
            <h2 class="card-title text-center text-styleA">{name}</h2>
      <h5 class="card-title text-center">{post}</h5>
                <p className="card-text text-center">{description}</p>
            </div>
       </div>
  );
};

export default Team;