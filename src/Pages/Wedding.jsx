import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
const weddingPhotos = [
  {
    src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    title: "Bride & Groom",
    description: "Capturing the special moments of love and joy.",
  },
  {
    src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    title: "Romantic Pose",
    description: "A perfect moment frozen in time for eternity.",
  },
  {
    src: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg",
    title: "Celebration",
    description: "Joyful emotions and candid moments captured beautifully.",
  },
  {
    src: "https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg",
    title: "Ceremony",
    description: "Timeless wedding rituals captured with elegance.",
  },
  {
    src: "https://images.pexels.com/photos/3361200/pexels-photo-3361200.jpeg",
    title: "Candid Moments",
    description: "Natural, unposed photos that tell a story.",
  },
  {
    src: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg",
    title: "Wedding Dance",
    description: "Memorable moments filled with fun and happiness.",
  },
];

const Wedding = () => {
  return (
   <div className="container my-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "36px", fontWeight: "bold", color: "#d63384",marginTop:"25px" }}
      >
        Wedding Photography
      </h2>

      <div className="row g-4">
        {weddingPhotos.map((photo, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm">
              <img
                src={photo.src}
                className="card-img-top"
                alt={photo.title}
                style={{ transition: "transform 0.4s ease, opacity 0.4s ease" }}
              />
              <div className="card-body text-center">
                <h5
                  className="card-title"
                  style={{ fontSize: "18px", fontWeight: "bold", color: "#d63384" }}
                >
                  {photo.title}
                </h5>
                <p className="card-text" style={{ fontSize: "14px", color: "#555" }}>
                  {photo.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wedding