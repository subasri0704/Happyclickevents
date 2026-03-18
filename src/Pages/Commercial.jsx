import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const commercialPhotos = [
  {
    src: "https://images.pexels.com/photos/3259509/pexels-photo-3259509.jpeg",
    title: "Product Shoot",
    description: "Professional product photography for catalogs and websites.",
  },
  {
    src: "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg",
    title: "Branding Shoot",
    description: "Capturing brand essence with style and creativity.",
  },
  {
    src: "https://images.pexels.com/photos/5650043/pexels-photo-5650043.jpeg",
    title: "Commercial Advertisement",
    description: "High-quality shots for advertisement campaigns.",
  },
  {
    src: "https://images.pexels.com/photos/4552130/pexels-photo-4552130.jpeg",
    title: "Food Photography",
    description: "Deliciously styled food photography for menus and social media.",
  },
  {
    src: "https://images.pexels.com/photos/3215765/pexels-photo-3215765.jpeg",
    title: "Fashion Shoot",
    description: "Capturing models and fashion products with elegance.",
  },
  {
    src: "https://images.pexels.com/photos/8382241/pexels-photo-8382241.jpeg",
    title: "Corporate Photography",
    description: "Professional corporate portraits and team shots.",
  },
];

const Commercial = () => {
  return (
    <div className="container my-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "36px", fontWeight: "bold", color: "#d63384",marginTop:"25px" }}
      >
        Commercial Photography
      </h2>

      <div className="row g-4">
        {commercialPhotos.map((photo, index) => (
          <div key={index} className="col-md-4 d-flex">
            <div className="card shadow-sm flex-fill h-100">
              <img
                src={photo.src}
                className="card-img-top"
                alt={photo.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title"
                  style={{ fontSize: "18px", fontWeight: "bold", color: "#d63384" }}
                >
                  {photo.title}
                </h5>
                <p className="card-text" style={{ fontSize: "14px", color: "#555", flexGrow: 1 }}>
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


export default Commercial