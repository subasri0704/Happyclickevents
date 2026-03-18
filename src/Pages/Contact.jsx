import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
     <div>

      {/* Banner */}
      <section className="banner">
        <div className="banner-overlay">
          <h1>Get in Touch</h1>
          <p>Make your event unforgettable with Happy Clicks Event</p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container info-cards">

        <div className="info-card">
          <i className="fas fa-phone-alt"></i>
          <h5>Call / WhatsApp</h5>
          <p>+91 6374134489</p>
        </div>

        <div className="info-card">
          <i className="fas fa-map-marker-alt"></i>
          <h5>Location</h5>
          <p>55,Nehru street,Ram nagar,Coimbatore-641009</p>
        </div>

        <div className="info-card">
          <i className="fas fa-envelope"></i>
          <h5>Email</h5>
          <p>info@happyclicksevent.com</p>
        </div>

        <div className="info-card">
          <i className="fab fa-instagram"></i>
          <h5>Instagram</h5>
          <p>@happyclicksevent</p>
        </div>

      </section>


      {/* Contact Section */}
      <section className="container mt-5 mb-5">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
              className="img-fluid rounded shadow"
              alt="Event"
            />
          </div>


          {/* Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">

              <h4>Send Us a Message</h4>

              <form>

                <div className="row">

                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                </div>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  required
                />

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>

                <button type="submit">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
  
export default Contact