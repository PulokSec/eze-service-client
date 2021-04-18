import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light">

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link className="nav-link mr-5 text-white" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white" smooth to="#services">Services</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mr-5  text-white" smooth to="#testimonial">Testimonial</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white" smooth to="#teams">Teams</Link>
        </li>        
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white" smooth to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white" smooth to="/login">Login</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link mr-5 text-white" smooth to="#contacts">Contact Us</Link>
        </li>
    </ul>
</div>
</nav>
  );
};

export default Navbar;