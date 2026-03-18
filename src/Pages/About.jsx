
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css"; 
import React,{useEffect} from "react";
import { Link } from "react-router-dom";

const About = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  ];
  
 useEffect(() => {

    const cards = document.querySelectorAll(".card-3d");

    cards.forEach(card => {

      const box = card.querySelector(".card-box");

      card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 12;
        const rotateY = (x - centerX) / 12;

        box.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;
      });

      card.addEventListener("mouseleave", () => {
        box.style.transform = `
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      });

    });

  }, []);

  return (
    <>
    {/* Banner Section */}
<section className="about-banner">
  <div className="container text-center">
    <h1 className="banner-title">Happy Clicks Event</h1>
    <p className="banner-subtitle">
      Capturing Moments • Creating Memories
    </p>
  </div>
</section>
      {/* About Section */}
      <section className="py-5 about-bg">
        <div className="container bg-white p-4 p-lg-5 rounded shadow">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="about-heading">ABOUT US</h1>
              <h3 className="about-subheading mb-4">
                About Happy Clicks Event
              </h3>
              <p>
                Happy Clicks Event is a professional event rental and experiential
                services company, focused on delivering unique guest engagement
                experiences using the latest technology.
              </p>
              <p className="goal-text">
                Our goal is simple — to turn ordinary events into extraordinary memories.
              </p>
              <p>
                With high-quality equipment, smooth execution, and friendly on-site
                support, we ensure your event stands out and leaves a lasting
                impression.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://images.pexels.com/photos/3691227/pexels-photo-3691227.jpeg"
                alt="Event"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

     <section className="gallery-3d">
  <div className="container">
    <h2 className="gallery-title">Gallery</h2>

    <div className="card-grid">

      {/* Card 1 */}
      <div className="card-3d">
        <Link to="/wedding" style={{ textDecoration: "none" }}>
       
          <div className="card-box">
            <h5 className="wed">Wedding</h5>
            <img
              src="https://images.pexels.com/photos/2959190/pexels-photo-2959190.jpeg"
              alt="gallery"
            />
          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="card-3d">
        <Link to="/birth" style={{ textDecoration: "none" }}>
          <div className="card-box">
            <h5 className="wed">Birthday</h5>
            <img
              src="https://images.pexels.com/photos/9628320/pexels-photo-9628320.jpeg"
              alt="gallery"
            />
          </div>
        </Link>
      </div>

      {/* Card 3 */}
      <div className="card-3d">
        <Link to="/commercial" style={{ textDecoration: "none" }}>
          <div className="card-box">
            <h5 className="wed">Commercial Photography</h5>
            <img
              src="https://images.ctfassets.net/3s5io6mnxfqz/4qwS3wZA8C5hntlr3rrOo7/6edf8ae897cde45699b7df5296c1e718/AdobeStock_275407493.jpeg"
              alt="gallery"
            />
          </div>
        </Link>
      </div>

    </div>
  </div>
</section>
    {/* Why Choose Us Section */}
      <section className="py-5 why-choose-bg">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row g-3">
            {[
              "Modern & Interactive Technology",
              "Professional Setup & On-Site Support",
              "Custom Branding Options",
              "Reliable & On-Time Service",
              "Affordable Packages",
            ].map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="feature-card text-center p-3 rounded">
                  <span className="tick-icon">✔</span>
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;