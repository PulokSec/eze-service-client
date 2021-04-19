import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link'
import logo from '../../images/EZE.svg'
const NavBar = () => {
  return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
            <img
                src={logo}
                width="150"
                height="120"
                className="d-inline-block align-top"
                alt=""
            />
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
            <Nav>
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
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

