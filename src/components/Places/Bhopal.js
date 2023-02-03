import React from "react";


import { useLocation ,Link} from "react-router-dom";

import Bhopal1 from "./Bhopal1";


const Bhopal = () => {
  

  const location = useLocation();
  const state = location.state;

  
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "500px" }}
          src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/new-images/Facade-2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
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

      <Bhopal1 />
      <br />
      <h1>Guest Rooms</h1>
      <div className="wrap">
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/images/img-3305.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ height: "250px" }}
          />
          <div className="container">
            <h4>
              <b>Deluxe Room Twin bed</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              Framed by the picturesque backdrop of the hills, the
              <br /> Deluxe Rooms are the epitome of tranquillity and <br />
              relaxation. The decor seamlessly merges the aesthetic
              <br /> philosophy of Madhya Pradesh with a European flair.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
              33 sq.m
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
              Up to 3 guests
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "20px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/bedType.png"
                alt=""
              />{" "}
              Twin Bed
            </p>
            <p style={{ fontSize: "15px" }}>
              <i>Spectacular vistas of the hills</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹ 7,750 *</h5>
            <Link to="/ReviewBhopal"> <button>View Details</button></Link> 
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/new-images/Deluxe-Room-Lake-View.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "370px", height: "250px" }}
          />
          <div className="container">
            <h4>
              <b>Deluxe Room Lake View King Bed</b>
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
              Free for upto 4 devices
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
              <i>Panoramic view of the soothing waters of the Upper Lake</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹8,860 *</h5>
            <Link to="/ReviewBhopal"><button >View Details</button></Link> 
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "800px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/9004-Taj-Bhopal_ExecSuite_View003.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "365px", height: "250px" }}
          />
          <div className="container">
            <h4>
              <b>2 Bedroom Luxury Suite</b>
            </h4>
            <p style={{ top: "182px", fontSize: "10px" }}>
              With magnificent views of the lake, situated on 8th and<br/> 9th floor,
              our Luxury suites with an interconnected<br/> Luxury Grande Twin
              bed-room offers extra space for the<br/> families who love to stay
              together.
            </p>
            <p style={{ fontSize: "15px" }}>
              <img
                style={{ width: "15px" }}
                src="https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png"
                alt=""
              />{" "}
            114 sq mtrs
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
               Up to 6 guests
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
              <i>Luxurious two-room suites with a private balcony overlooking the lake</i>
            </p>
            <div
              style={{
                position: "relative",
                left: "220px",
                margin: "6rem 1rem",
              }}
            >
              <p style={{ fontSize: "8px" }}>Starting Rate/Night</p>
              <h5>₹1,720 *</h5>
            <Link to="/Reviewbhopal"><button>View Details</button></Link>
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
          Best ‘Luxury Upscale Hotel’ in South<br/> Asia - 2022
          </h3>
          <p style={{ fontSize: "15px" }}>
          Awarded at 17th edition of Hotel Investment<br/> Conference-South Asia (HICSA)’s Hotel of the <br/>year Awards, 2022
          </p>
        </div>
        <div style={{ margin: "0rem 3rem" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxIv3QBcig6zIagAtLxgSnPsTl0anwl0FJw&usqp=CAU"
            alt=""
          />
          <h3 style={{ fontSize: "18px", margin: "0rem 2rem" }}>
          Best Wedding Destination of Central India
          </h3>
          <p style={{ fontSize: "15px" }}>
            Awarded at 16th Hospitality India’s Annual <br/>International Travel Awards
          </p>
        </div>
      
      </div>
    
    </div>
  );
};

export default Bhopal;
