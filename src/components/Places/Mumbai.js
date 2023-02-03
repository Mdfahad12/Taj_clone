import React from "react";
import { Link, useLocation } from "react-router-dom";
import Mumbai1 from "./Mumbai1";
const Mumbai = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
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

      <Mumbai1 />
      <br />
      <h1>Guest Rooms</h1>
      <div className="wrap">
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Luxury%20Room%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ height: "230px" }}
          />
          <div className="container">
            <h4>
              <b>Luxury Room</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              These cozy rooms located in the historic Palace Wing are <br />
              the gateway to a memorable experience. Perfect for
              <br /> meditation, these windowless rooms offer you complete
              <br /> tranquillity. Designed for our jet-setting business <br />
              travellers who require silence.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              33 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />
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
              />{" "}
              King
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Spacious rooms and bathrooms..</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "4rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 35,000 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Executive_suite_-_bedroom11.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "370px", height: "225px" }}
          />
          <div className="container">
            <h4>
              <b>Executive Suite 1 Bedroom City View</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              These immaculately planned rooms offer an exclusive <br />
              host of amenities such as access to buffet breakfast <br />
              at the Sea Lounge or Shamiana, high-tea at the Palace
              <br /> Lounge from 1530 hrs to 1730 hrs
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              70 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />{" "}
              Complimentary WiFi Up to 3 guests
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
              />{" "}
              King
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Classic decor providing a sense of history</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "5rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 49,600 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/new-images/Bell%20Tower%20Suite%20-%20Bedroom.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "365px", height: "280px" }}
          />
          <div className="container">
            <h4>
              <b>Signature Suite</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              These rooms have an old world charm with the delicate
              <br /> Rajput bay-windows that offer spectacular views of the
              Arabian Sea or the
              <br />
              Gateway of India. Includes butler
              <br /> service and WiFi for four devices.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              121-139 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />
              Complimentary WiFi
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
              King
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Unique suite offering a Rajasthani splendour</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 1,63,000 *</h5>
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
            style={{ width: "210px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Expert Choice Award by Trip Expert
            <br /> (Feb 2019)
          </h3>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Times Food & Nightlife Awards 2019
          </h3>
          <p style={{ fontSize: "15px" }}>
            Golden Dragon - Best Chinese Restaurant
            <br /> (South Mumbai) Wasabi by Morimoto Best <br />
            Japanese Restaurant (South Mumbai (March
            <br /> 2019)
          </p>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Reader’s Choice DestinAsian Award
          </h3>
          <p style={{ fontSize: "15px" }}>
            Best Hotel (14th consecutive year) (March 2019)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mumbai;
