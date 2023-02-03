import React from "react";
import "./CardSlider.scss";
const Slides = [
  {
    images:
      "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/3x2/ViewoftheGatewayofIndia-3x2.jpg",
    button: (
      <a href="/">
        <button
          style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}
        >
          view Details
        </button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>Mumbai</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/Goa/16x7intro/E%20X%20O%20T%20I%20C%20A%20-%20Aerial_1.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>Goa</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/Delhi/Intro-16x7/BK2GFB-16X7.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>New Delhi</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/Jaipur/16x7intro/hawa-mahal-441563.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>jaipur</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/Kolkata/16x7intro/Intro-16x7-Kolkata.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>Kolkata</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_51_Buckingham_Suites_Residences/images/16x7/London-16.5.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>london</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/1Maldives/Intro-16x7/Intro-16x7.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>Maldives</h4>
  },
  {
    images:
      "https://www.tajhotels.com/content/dam/thrp/destinations/Kochi/16x7intro/42-18936323-16X7.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg",
    button: (
      <a href="/">
        <button  style={{
            backgroundColor: "#D29751",
            position: "relative",
            left: "260px",
            top:"-50px"
          }}>view Details</button>
      </a>
    ),
    title:<h4 style={{color:"#D29751",position:"relative",top:"-7px"}}>cochin</h4>
  },
];

const slideLeft = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 500;
};
const slideRight = () => {
  let slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 500;
};

const CardSlider = () => {
  return (
    <div>
      <div id="main-slide-conatiner">
        <button className="slider-icon-left" onClick={slideLeft}>
          {" "}
          &#8810;
        </button>
        <div id="slider">
          {Slides.map((slide, index) => {
            return (
              <div className="slider-card">
                <div className="slider-card-image">
                  <img
                    style={{ width: "360px", height: "370px" }}
                    src={slide.images}
                    alt=""
                  />
                  <br></br>
                {slide.title}  {slide.button}
                </div>
              </div>
            );
          })}
        </div>
        <button className="slider-icon-right" onClick={slideRight}>
          {" "}
          &#8811;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
