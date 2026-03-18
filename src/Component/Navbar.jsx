import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import  logo from "../assets/images/logo.jfif"
const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>

      <div className="container">

        {/* <a className="navbar-brand" href="/">
          HappyClicks
        </a> */}

        
             <a className="navbar-brand" href="/">
  <img src={logo} alt="HappyClicks" className="navbar-logo" />
</a>
          


        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end" id="menu">

          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>



          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;