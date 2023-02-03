import React from "react";

const CityCard = () => {
  return (
    <div>
      <div
        className="card"
        style={{ width: "500px", height: "80px", margin: "1rem 5rem" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: "70px" }}
              src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/new-images/Facade.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
            />
          </div>
          <div className="container">
            <h5 style={{ fontSize: "12px" }}>Bhopal</h5>
            <p style={{ fontSize: "12px" }}>Taj hotel</p>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "500px", height: "80px", margin: "1rem 5rem" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: "70px" }}
              src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
            />
          </div>
          <div className="container">
            <h5 style={{ fontSize: "12px" }}>Mumbai</h5>
            <p style={{ fontSize: "12px" }}>Taj hotel</p>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "500px", height: "80px", margin: "1rem 5rem" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: "70px" }}
              src="https://www.tajhotels.com/content/dam/luxury/hotels/taj-exotica-dubai/Header-Image.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
            />
          </div>
          <div className="container">
            <h5 style={{ fontSize: "12px" }}>Dubai</h5>
            <p style={{ fontSize: "12px" }}>Taj hotel</p>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "500px", height: "80px", margin: "1rem 5rem" }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ width: "70px" }}
              src="https://www.tajhotels.com/content/dam/luxury/tle/16x7/Exterior-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
            />
          </div>
          <div className="container">
            <h5 style={{ fontSize: "12px" }}>LandsEnd</h5>
            <p style={{ fontSize: "12px" }}>Taj hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
