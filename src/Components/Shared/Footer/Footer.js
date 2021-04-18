import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faCcVisa, faCcMastercard, faCcPaypal, faCcAmex, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const companyName = [
        {name: "We Provide Awesome audio podcast editing" , link: ""},
        {name: "services making your production" , link: "/checkup"},
        {name: "in the next level." , link: ""},
        {name: "We can edit one-one interviews" , link: ""},
        {name: "round table and more.." , link: ""},
    ]
    const ourAddress = [
        {name: "350 Northern BLVD" , link: "//google.com/map"},
        {name: "Suite 324-1033" , link: ""},
        {name: "Albany,NY 12204-1000" , link: ""},
       
    ]
    const compliance = [
        {name: "ADA Compliance" , link: "#"},
        {name: "CCPA Law" , link: "#"},
        {name: "GDPR Law" , link: "#"},
        {name: "Privacy Policy" , link: "#"},
        {name: "Cookies" , link: "#"},
        {name: "Terms of Services" , link: "#"}
    ]
    const aboutUs = [
        {name: "Pricing" , link: "#"},
        {name: "Services" , link: "#"},
        {name: "Testimonials" , link: "#"},
        {name: "Portfolio" , link: "#"},
        {name: "Contact" , link: "#"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row py-3">
                    <FooterCol key={1} menuTitle={"EZE Service"} menuItems={companyName}>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//linkedin.com"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                        </ul>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//visa.com"><FontAwesomeIcon className="icon active-icon" icon={faCcVisa} /></a></li>
                            <li className="list-inline-item"><a href="//mastercard.com"><FontAwesomeIcon className="icon active-icon" icon={faCcMastercard} /></a></li>
                            <li className="list-inline-item"><a href="//paypal.com"><FontAwesomeIcon className="icon active-icon" icon={faCcPaypal} /></a></li>
                            <li className="list-inline-item"><a href="//paypal.com"><FontAwesomeIcon className="icon active-icon" icon={faCcAmex} /></a></li>
                        </ul>
                        </FooterCol>
                    <FooterCol key={2} menuTitle="About US" menuItems={aboutUs}/>
                    <FooterCol key={3} menuTitle="Compliance Resources" menuItems={compliance}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <div>
                            <h6 className="text-styleA">Call now</h6>
                            <p className="text-white"><FontAwesomeIcon className="text-styleB" icon={faPhoneAlt} /> +1(518) 32541235</p>
                            <p className="text-white"><FontAwesomeIcon className="text-styleB" icon={faEnvelope} /> hello@ezeservices.net</p>
                        </div>
                    </FooterCol>
                </div>
                <p className="text-center">Copyright {(new Date()).getFullYear()} | EZE Service All Rights Reserved</p>
            </div>
        </footer>
        
    );
};

export default Footer;