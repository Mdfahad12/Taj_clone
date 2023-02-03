import React from "react";
import "./Dining.scss";
import Inputdata from "./Inputdata";
import Table from "./Table";
const Dining = () => {
  return (
    <div>
      <img
        className="him"
        src="https://www.tajhotels.com/content/dam/luxury/tajbengal/gallery/HIGH-TEA-DETAIL-2.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
        alt=""
      />
      <br></br>
      <h1 className="fa">Unique Diving</h1>
      <p className="mno">
        In our bid to deliver authentic, undiluted experiences, we’ve introduced
        a unique regional home style dining <br />
        experience. Always prepared with a local touch, the home-style cooking
        ensures that you maintain good health
        <br /> throughout your stay. And at the same time it gives you the
        opportunity to dabble in the local delicacies.
      </p>
      <h1>Signature Restaurants</h1>
      <br></br>
      <div className="wrap">
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/4x3/the-All-New-Machan.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>Machan</b>
            </h4>
            <p>
              {" "}
              Welcome to the fabled Machan, the Capital’s original and
              much-loved dining destination with a culinary legacy that began in
              1978.{" "}
            </p>
            <a href="/" style={{position:"relative",left:"460px"}}><button style={{backgroundColor:"rgb(210, 151, 81)"}}>View Details</button></a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Wasabi%20by%20Morimoto%203.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "570px", height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>Wasabi By Morimoto</b>
            </h4>
            <p>
              Enjoy classic Japanese dishes with innovative contemporary twists,
              made with ingredients specially flown in from Japan.
            </p>
            <a href="/" style={{position:"relative",left:"460px"}}><button style={{backgroundColor:"rgb(210, 151, 81)"}}>View Details</button></a>
          </div>
        </div>
      </div>
      <Inputdata />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Dining;
