import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const services = [
  {
    title: "Selfie Mirror / Magic Mirror",
    description:
      "An interactive, full-length touch screen mirror that entertains guests while capturing beautiful memories.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XF4VvJldMWGudEkDv-ucXMedgjNopw84fg&s",
  },
  {
    title: "Digital Standee Boards",
    description:
      "Upgrade from traditional banners to high-impact digital displays that attract attention instantly.",
    image:
      "https://www.corneaworld.com/cdn/shop/files/Image_1.jpg?v=1685970318",
  },
  {
    title: "AI Sketch Bots",
    description:
      "Give your guests a unique and memorable takeaway with AI-generated sketch portraits.",
    image:
      "https://images.squarespace-cdn.com/content/v1/6410969da904b7781f46e03d/109fc2fd-6174-440d-b320-3f6f3092ee78/sketchbot_on_table_round.png",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const images = [
    "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    "https://images.pexels.com/photos/13293704/pexels-photo-13293704.jpeg",
    "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg",
  ];

  const [index, setIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Real Moments <br />
            Real Emotion
          </h1>

          <p>
            Photography that feels like you — natural, effortless, unforgettable.
          </p>

            <button 
      className="btn btn-primary"
      onClick={() => navigate("/about")}
    >
      Find More
    </button>
        </div>

        <div className="arrow arrow-left" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </div>

        <div className="arrow arrow-right" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-wrapper">

            <div className="about-content">
              <h1>ABOUT US</h1>
              <h3>About Happy Clicks Event</h3>

              <p>
                Happy Clicks Event is a professional event rental and experiential
                services company.
              </p>

              <p className="goal">
                Our goal is simple — <br />
                <span>to turn ordinary events into extraordinary memories.</span>
              </p>

              <p>
                With high-quality equipment and friendly support, we ensure your
                event stands out.
              </p>
            </div>

            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/3691227/pexels-photo-3691227.jpeg"
                alt="Event"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <div
        style={{
          backgroundColor: "#e6f0ff",
          minHeight: "100vh",
          paddingBottom: "-10px",
        }}
      >
        <section className="text-center py-5">
          <div className="container">
            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              Our Services
            </h2>
          </div>
        </section>

        <section className="container py-5">
          <div className="row g-4">
            {services.map((service, i) => (
              <div key={i} className="col-md-4">
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    cursor: "pointer",
                    transition: "0.3s",
                    overflow: "hidden",
                  }}
                  onClick={() => navigate("/services")}
                >
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body text-center">
                    <h5
                      className="card-title"
                      style={{
                        color: "#1e3a8a",
                        fontWeight: "600",
                      }}
                    >
                      {service.title}
                    </h5>

                    <p
                      className="card-text"
                      style={{
                        fontSize: "15px",
                        color: "#555",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
      </div>

    </div>
  );
};

export default Home;