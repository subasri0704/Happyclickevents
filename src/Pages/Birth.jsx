import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const birthdayPhotos = [
  {
    src: "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg",
    title: "Birthday Cake",
    description: "A sweet moment captured during the cake cutting ceremony.",
  },
  {
    src: "https://images.pexels.com/photos/7600387/pexels-photo-7600387.jpeg",
    title: "Birthday Party",
    description: "Friends and family enjoying the special day.",
  },
  {
    src: "https://images.pexels.com/photos/3905853/pexels-photo-3905853.jpeg",
    title: "Balloons Fun",
    description: "Colorful balloons make every birthday brighter.",
  },
  {
    src: "https://images.pexels.com/photos/3534022/pexels-photo-3534022.jpeg",
    title: "Birthday Candles",
    description: "Make a wish and blow the candles with joy.",
  },
  {
    src: "https://images.pexels.com/photos/257855/pexels-photo-257855.jpeg",
    title: "Gift Moments",
    description: "Exciting gift unwrapping moments captured perfectly.",
  },
  {
    src: "https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg",
    title: "Birthday Dance",
    description: "Fun-filled dance and laughter with friends and family.",
  },
];

const Birth = () => {
  return (
    <div className="container my-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "36px", fontWeight: "bold", color: "#d63384",marginTop:"25px"}}
      >
        Birthday Photography
      </h2>

      <div className="row g-4">
        {birthdayPhotos.map((photo, index) => (
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

export default Birth