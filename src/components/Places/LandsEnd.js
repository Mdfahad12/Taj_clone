import React from "react";
import { useLocation,Link } from "react-router-dom";
import LandsEnd1 from "./LandsEnd1";

const LandsEnd = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://www.tajhotels.com/content/dam/qmin/Qmin-Website-Banner-Desktop-Taj16.7.20.png"
          alt=""
        />
      </div>
      <div className="diba">
        <div style={{ margin: "0rem 6rem" }}>
          <label for="Hotel">
            <b>Hotel</b>
          </label>
          <div>{state.data.name}</div>
        </div>
        <div style={{ margin: "0rem 6rem" }}>
          <label for="Hotel">
            <b>Check in & check out</b>
          </label>
          <div>
            {state.data.timein} - {state.data.timeout}
          </div>
        </div>
        <div style={{ margin: "0rem 3rem" }}>
          <label for="Hotel">
            <b>Rooms&Guests</b>
          </label>
          <div>
            Room{state.data.rooms},{state.data.Adults}Guest&
            {state.data.children}Child
          </div>
        </div>
      </div>

      <LandsEnd1 />
      <br />
      <h1>Guest Rooms</h1>
      <div className="wrap">
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/tle/gallery/Taj%20Club%20Room.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ height: "195px" }}
          />
          <div className="container">
            <h4>
              <b>Taj Club Room</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Immaculately planned spacious rooms offer an exclusive <br />
              host of amenities, a glass-walled bathroom and
              <br /> comfortable sitting area
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              39 Sq Mtt
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />{" "}
              Complimentary WiFi
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />
              Up to 3 guests
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/bedType.png"
                alt=""
              />
              King/Twin
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Rooms with contemporary decor and breathtaking views.</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "4rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 21,000 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/tle/TLE_Images_Folderised/2_Rooms_Suites/Executive_Suites/16x7/Executive%20Suite%20Sea%20View%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "370px", height: "195px" }}
          />
          <div className="container">
            <h4>
              <b>Executive Suite Pool View King Bed</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Located in the pulsating epicenter of the city with <br/>magnificent
              pool views, our 63 Sq mt elegant suites<br/> exude contemporary style
              and timeless elegance.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
            63 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />{" "}
               Complimentary WiFi
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />
              Up to 4 guests
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/bedType.png"
                alt=""
              />{" "}
              King
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Serene suites catering to business travellers</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 34,000 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/tle/TLE_Images_Folderised/2_Rooms_Suites/Deluxe_Rooms/16x7/23_Deluxe_Luxury-Kingbed-View-16x5.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "365px", height: "320px" }}
          />
          <div className="container">
            <h4>
              <b>Deluxe Room</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
            Enjoy all the guest amenities the Taj is famous for as you<br/> luxuriate in our delightful Deluxe Rooms. 
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
             37 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />
              Complimentary WiFi{" "}
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />{" "}
              Up to 3 guests
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/bedType.png"
                alt=""
              />
             King/Twin
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Great views</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 1,84,000 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <h1>Awards</h1>
      <div style={{ display: "flex", margin: "1rem 10rem " }}>
        <div>
          <img
            style={{ width: "160px", margin: "0rem 4rem" }}
            src="https://www.tajhotels.com/content/dam/taj/3x2/awards.jpeg"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Booking.com Award of Excellence
          </h3>
          <p style={{ fontSize: "15px" }}>
            Taj Lands End was awarded the Booking.com <br />
            Award of Excellence in the Hotel category in <br />
            2014.
          </p>
        </div>
        <div style={{ margin: "1rem 3rem" }}>
          <img
            style={{ margin: "0rem 4 rem" }}
            src="https://www.tajhotels.com/content/dam/taj/3x2/awards.jpeg"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Earth Check awards
          </h3>
          <p style={{ fontSize: "15px" }}>
            Taj Lands End was recognised for environment
            <br />
            -friendly initiatives and was certified Gold <br />
            Standard by the Earth Check Company in 2015.
          </p>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            style={{ width: "160px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            TripAdvisor Certificate of Excellence
          </h3>
          <p style={{ fontSize: "15px" }}>
            Taj Lands End was awarded the TripAdvisor <br />
            Certificate of Excellence in 2014.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandsEnd;
