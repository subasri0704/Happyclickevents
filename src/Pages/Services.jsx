import React from 'react'
import "./Services.css";
const Services = () => {
     const services = [
    {
      title: "Selfie Mirror / Magic Mirror",
      description:
        "An interactive, full-length touch screen mirror that entertains guests while capturing beautiful memories.",
      features: [
        "Touch-enabled interactive mirror",
        "Instant photo printing",
        "Fun animations & prompts",
        "Custom photo frames & branding",
        "Perfect for all age groups",
      ],
      bestFor:
        "Weddings, Receptions, Birthdays, Parties & Corporate Events",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/431451038/EW/XZ/OS/6428109/screenshot-2024-07-01-at-17-43-51-mirror-photo-booth-google-search-500x500.png",
    },
    {
      title: "Digital Standee Boards",
      description:
        "High-impact digital displays that attract attention instantly for promotions & branding.",
      features: [
        "High-resolution digital display",
        "Play videos, images & ads",
        "Ideal for promotions & branding",
        "Sleek, modern look",
      ],
      bestFor:
        "Corporate Events, Exhibitions, Malls, Product Launches & Promotions",
      image: "https://nevonexpress.in/wp-content/uploads/2022/11/32-inch-LCD-Standee-display-5-min.jpg",
    },
    {
      title: "AI Sketch Bots",
      description:
        "Give your guests a unique and memorable takeaway with AI-generated sketch portraits.",
      features: [
        "Converts photos into artistic AI sketches",
        "Instant digital output",
        "Fun & engaging experience",
        "Custom branding available",
      ],
      bestFor: "Weddings, Corporate Events, Brand Activations & Gifting",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZVr_ycAFE1vm030iez0Uhw7vEpEiYmcYpg&s",
    },
  ];

  return (
   <div>
      {/* Header */}
      <section className="services-header">
        <div className="container text-center">
          <h2>Our Services</h2>
          <p>Delivering memorable experiences through innovative technology</p>
        </div>
      </section>

      {/* Services Cards */}
      <div className="container py-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card mb-5"
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              minHeight: "300px",
              transition: "transform 0.3s, box-shadow 0.3s",
              marginBottom:"-10px",
            }}
          >
            <div
              className="service-image"
              style={{
                flex: "1 1 40%",
                minHeight: "300px",
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="service-content"
              style={{ flex: "1 1 60%", padding: "30px" }}
            >
              <h5 style={{ color: "#1e3a8a", fontWeight: 600, fontSize: "22px", marginBottom: "5px" }}>
                {service.title}
              </h5>
              <p style={{ fontSize: "14px", lineHeight: 1.6, marginBottom: "12px", color: "#555" }}>
                {service.description}
              </p>

              <div
                className="features-box"
                style={{
                  backgroundColor: "#e6f2ff",
                  borderLeft: "4px solid #00bfff",
                  borderRadius: "8px",
                  padding: "15px 20px",
                  marginBottom: "5px",
                }}
              >
                <h5 style={{ color: "#00bfff" }}>Features</h5>
                <ul style={{ listStyle: "disc inside", paddingLeft: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="best-for-box"
                style={{
                  backgroundColor: "#1e3a8a",
                  color: "#fff",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontWeight: 600,
                  textAlign: "center",
                  fontSize: "14px",
                  transition: "background 0.3s",
                  marginBottom:"-10px",
                }}
              >
                Best For: {service.bestFor}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services