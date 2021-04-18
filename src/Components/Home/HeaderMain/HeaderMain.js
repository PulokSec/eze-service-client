import React from 'react';
import { Link } from 'react-router-dom';
import headerBg from '../../images/walk_in_the_city_1ma6.png'

const HeaderMain = () => {
  return (
    <main className="">
      <div className="container">
      <div className="row">
      <div className="col-md-5 offset-md-1 mt-5 ">
          <h1 style={{color: '#d5dfe5'}}>YOU HIT RECORD <br/> WE HANDLE THE REST</h1>
          <p style={{color: '#ffece2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ducimus. Neque accusantium amet eveniet ipsa impedit. Debitis, nemo nisi molestias, illo magni architecto officiis, quo quaerat optio mollitia maxime fuga.</p>
          <Link to="#" className="btn button text-white">Subscribe</Link>
      </div>
      <div className="col-md-5 py-5">
        <img src={headerBg} alt="" className="img-fluid"/>
      </div>
      </div>
      </div>
    </main>
  );
};

export default HeaderMain;