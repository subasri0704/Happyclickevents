import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container py-5">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h5>Happy Clicks Event</h5>
            <p>
              We provide professional event photography, videography,
              and creative services to make your moments unforgettable.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
             
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact Info</h5>
            <p><i className="fas fa-phone"></i> +91 6374134489</p>
            <p><i className="fas fa-envelope"></i> info@happyclicksevent.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 55, Nehru street, Ram nagar, Coimbatore - 641009</p>
          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center pt-3 mt-4">
          <p className="mb-0">
            © {new Date().getFullYear()} Happy Clicks Event. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;