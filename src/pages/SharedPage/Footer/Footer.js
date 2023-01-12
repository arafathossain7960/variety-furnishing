import React from 'react';

const Footer = () => {
    return (
   <div>
            <footer className="footer p-10 bg-accent text-light">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Free delivery</a>
    <a className="link link-hover">Re-fund </a>
    <a className="link link-hover">1 year service</a>
    <a className="link link-hover">1 week replacement</a>
  </div> 
  <div>
    <span className="footer-title">Categories</span> 
    <a className="link link-hover">Bedroom</a>
    <a className="link link-hover">Kitchen room</a>
    <a className="link link-hover">Drawing room</a>
    <a className="link link-hover">Office room</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover">Email: variety@furnishing.com</a>
    <a className="link link-hover">Phone: +120345012</a>
    <a className="link link-hover">Whatsapp: +120345012</a>
    <a className="link link-hover">Office: #2/C, beleyRoad, Tokio. </a>
  </div>
</footer>
<div>
    <p className='text-center bg-accent text-light pb-8'>All copy 2023	&#169; by <span className='bolder text-primary'>variety-furnishing.com</span> </p>
</div>
        </div>
    );
};

export default Footer;