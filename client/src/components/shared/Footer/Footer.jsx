import './Footer.css';
import React from 'react';
import {Link } from "react-router-dom";

var date=new Date();
var year=date.getFullYear();

const FooterSecondary = () => {
    return(
        <footer className="footer-secondary">
            <div className='container'>
                <div className='logo-box'> 
                    <Link to='/'><img className='logo' src="logoWhite.svg" alt='logo'/></Link>
                </div>
                <div className='social-box'>
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href='https://www.linkedin.com/company/quengenesis'>-LinkedIn</a></li>
                        <li><a href='https://www.facebook.com/quengenesis'>-Facebook</a></li>
                        <li><a href='https://www.instagram.com/quengenesis.io/'>-Instagram</a></li>
                    </ul>
                </div>
                <div className='text-box-1'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/'>-Home</Link></li>
                        <li><Link to='/about'>-About</Link></li>
                        <li><Link to='/sales-and-marketing-consulting'>-Consulting</Link></li>
                        <li><Link to='/technology-and-it-services'>-Web & Software Services</Link></li>
                        <li><Link to='/contact'>-Contact</Link></li>
                    </ul>
                </div>

                <div className='text-box-2'>
                    <h2>Contact Us</h2>
                    <address>
                        8 The Green STE R<br/>
                        Dover, DE 19901<br/>
                        USA<br/><br/>
                        <a href='tel: 855-780-3061'>Ph: 855-780-3061</a>
                    </address>
                </div>
            </div>
        </footer>
    );
}

const FooterPrimary = () => {
    return(    
        <footer className="footer-primary">
            <div className="container">
                <p>Copyright © {year} Quengenesis, LLC. All rights reserved.</p>
            </div>
        </footer>
    );
}

const Footer=()=>{
    return(
        <>
            <FooterSecondary />
            <FooterPrimary />
        </>
    );
}
export default Footer;