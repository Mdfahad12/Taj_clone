import React from "react";
import { useLocation ,Link} from "react-router-dom";
import Dubai1 from "./Dubai1";

const Dubai = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Dubai/new-images-2022/Taj-Dubai-Mahraja-Suite-Bedroom.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
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
      <img
        style={{ width: "230px", margin: "1rem 38rem" }}
        src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Dubai/DUBAI_ASSURED_LOGOpng.PNG"
        alt=""
      />
      <Dubai1></Dubai1>
      <br />
      <h1>Guest Rooms</h1>
      <div className="wrap">
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Dubai/new-images-2022/Taj-Dubai-Grand-Luxury-Suite-Bedroom-View.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ height: "230px" }}
          />
          <div className="container">
            <h4>
              <b>Grand Luxury Suite Burj View</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Located between 29th to 31st floor, Grand Luxury Suites
              <br /> Burj View feature hardwood flooring, elegant furnishing
              <br /> and carpets, spacious master bedroom with floor to
              <br /> ceiling views of the iconic Burj Khalifa, separate living
              <br /> room and dining area with fully equipped kitchen, all set
              <br /> across 155 sq metres of luxury and sophistication.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              58 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />
              Free for upto 4 devices.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />
              4(3 Adults,3 Children)
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
              <i>Spacious room with sofa bed. Perfect for families.</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "4rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>AED 2,640 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Dubai/images/16x7/1%20Luxury%20Junior%20Suite%20City%20View.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "370px", height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>Taj Club Rooms</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Lavishly decorated in elegant golden tones, Taj Club Rooms
              conveniently located on the higher floors, granting direct access
              to the Taj Lounge.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              45 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />{" "}
              Free for upto 4 devices.3(2 Adults,2 Children)
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />
              3(2 Adults,2 Children)
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
              <i>Access to Taj Club, butler & other services</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "8rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>AED 1,860 *</h5>
              <Link to="/ReviewBhopal"><button>View Details</button></Link>   
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Dubai/new-images-2022/Taj-Dubai-Luxury-Burj-View-Room-King.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "365px", height: "280px" }}
          />
          <div className="container">
            <h4>
              <b> Luxury Junior Suite City View</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Complete with rich furnishings, Luxury Junior Suites City
              <br /> View are located from 29th to 32nd floor of the hotel,{" "}
              <br />
              featuring a spacious open-plan design with king bed,
              <br /> intricate ‘jali’ screens, extended lounge space with sofa-
              <br />
              bed and a dedicated family dining area.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              82 Sq Mt
            </p>
            <p style={{ fontSize: "15px" }}>
              {" "}
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png"
                alt=""
              />
              Free for upto 4 devices.{" "}
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/maximumOccoumpany.png"
                alt=""
              />{" "}
              4(3 Adults,3 Children)
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
              <i>Open-plan suites for a residential-style living</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>AED 1,720 *</h5>
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
            Luxury Design Hotel
          </h3>
          <p style={{ fontSize: "15px" }}>
            Taj Dubai awarded Best Luxury Design Hotel in
            <br /> the United Arab Emirates at the World Luxury <br />
            Hotel Awards{" "}
          </p>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Haute Grandeur Global Awards - 2018
          </h3>
          <p style={{ fontSize: "15px" }}>
            Best City Hotel in the United Arab Emirates <br />- 2018 Haute
            Grandeur Global Awards{" "}
          </p>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
            Haute Grandeur Global Awards- 2018
          </h3>
          <p style={{ fontSize: "15px" }}>
            Best Luxury Family Restaurant in the United
            <br /> Arab Emirates, Best Scenic Setting in the United <br />
            Arab Emirates,{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dubai;
