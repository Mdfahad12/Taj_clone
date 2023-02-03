import React from "react";
import { useLocation } from "react-router-dom";
import "./Checklist.scss";
import { Link } from "react-router-dom";

const Checklist = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <div>
      <div className="slid"></div>
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
      <div style={{ display: "flex", margin: "3rem 5rem" }}>
        <div>
          <img
            style={{ width: "350px" }}
            src="https://www.tajhotels.com/content/dam/tajhotels/bhopal/new-images/Facade.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
        </div>
        <div style={{ margin: "0rem 3rem" }}>
          <h3>Taj Lakefront Bhopal</h3>
          <a
            href="https://www.google.com/maps/place/23%C2%B012'55.8%22N+77%C2%B022'59.5%22E/@23.2155,77.3832,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe61fb7a0a80ea2b7!8m2!3d23.2155!4d77.3832"
            style={{ fontSize: "10px" }}
          >
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVckUrdOnUMwvShzgAzA51gN5KTxV4DaHkiMzYhX9rxRy8PrlM-6Z&usqp=CAE&s"
              alt=""
            />
            Link Road No. 3, Prempura, Bhadbhada Chouraha, Bhopal
          </a>
          <p style={{ fontSize: "13px" }}>
            Taj Lakefront, Bhopal, is located 17 km from
            <br /> the airport, with easy access to commercial
            <br /> hubs and tourist destinations. The hotel’s 152
            <br />
            rooms, iconic restaurants and recreational <br />
            facilities are the hallmarks of Taj’s hospitality
            <br /> and service.
          </p>
        </div>
        <div style={{ fontSize: "15px", margin: "3rem 2rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />
            142 rooms and 10
            <br /> suites
          </div>
          <br />
          <div>
            <img
              style={{ width: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdykIXGi81em-yt4VRprseTv7WRYuFNq6QdA&usqp=CAU"
              alt=""
            />
            Three iconic <br />
            restaurants and bar
          </div>
        </div>
        <div style={{ fontSize: "15px", margin: "2rem 3rem" }}>
          <div>
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1RGEKRfEMQ3X6p043e0pKQR1WonFxMOa4qA&usqp=CAU"
              alt=""
            />
            Lake facing on
            <br /> one side and hill facing <br />
            on the other
          </div>
          <br />
          <div>
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiO9aLjsYhVtB9I94APT2kHcs7afSJB3me1_0ccg-7dWxPQVP5K9ZEqAJbmCMHyo7lxXc&usqp=CAU"
              alt=""
            />
            Jiva Spa
          </div>
        </div>
        <div>
          <div>Fetching best rates</div>
          <br />
          <div style={{ margin: "4rem 1rem " }}>
            <h3 style={{ fontSize: "5px" }}>Starting Rate/Night</h3>
            <h2>7756</h2>
          <Link to="/Bhopal" state={{data:state}}>  <button>View Hotel</button></Link>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", margin: "3rem 5rem" }}>
        <div>
          <img
            style={{ width: "350px", height: "280px" }}
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Mumbai/images/16x7/AAG_27642205-H1-015Pooside-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <h3 style={{ fontSize: "23px" }}>The Taj Mahal Palace</h3>
          <a
            href="https://www.google.com/maps/place/18%C2%B055'18.2%22N+72%C2%B049'58.9%22E/@18.921727,72.83302,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf23d8add23a8cce1!8m2!3d18.921727!4d72.83302"
            style={{ fontSize: "10px" }}
          >
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVckUrdOnUMwvShzgAzA51gN5KTxV4DaHkiMzYhX9rxRy8PrlM-6Z&usqp=CAE&s"
              alt=""
            />
            Apollo Bunder, Mumbai
          </a>
          <p style={{ fontSize: "11px", opacity: "0.4" }}>
            25.0km from Chhatrapati Shivaji International <br />
            Airport
          </p>
          <p style={{ fontSize: "13px" }}>
            A landmark hotel that overlooks the Arabian <br />
            Sea and the Gateway of India. Built in 1903,
            <br /> this is India’s first luxury hotel.
          </p>
        </div>
        <div style={{ fontSize: "15px", margin: "3rem 2rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />
            India's First Luxury <br />
            Hotel
          </div>
          <br />
          <div>
            <img
              style={{ width: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLM34jaeOqWKt2qOuwAemQvHuYF53WCN5RA&usqp=CAU"
              alt=""
            />{" "}
            High-tea & Live Music
            <br /> Every Evening
          </div>
        </div>
        <div style={{ fontSize: "15px", margin: "2rem 3rem" }}>
          <div>
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdykIXGi81em-yt4VRprseTv7WRYuFNq6QdA&usqp=CAU"
              alt=""
            />{" "}
            9 Iconic Restaurants &<br /> Bars
          </div>
          <br />
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Luxury Shopping
            <br /> Arcade
          </div>
        </div>
        <div>
          <div>Fetching best rates</div>
          <br />
          <div style={{ margin: "4rem 1rem " }}>
            <h3 style={{ fontSize: "5px" }}>Starting Rate/Night</h3>
            <h2>27500</h2>
            <Link to="/Mumbai" state={{data:state}}><button>View Hotel</button></Link>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", margin: "3rem 5rem" }}>
        <div>
          <img
            style={{ width: "350px" }}
            src="https://www.tajhotels.com/content/dam/luxury/hotels/taj-exotica-dubai/Header-Image.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <h3>Taj Dubai</h3>
          <a
            href="https://www.google.com/maps/place/25%C2%B011'32.4%22N+55%C2%B016'01.9%22E/@25.192326,55.267194,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xce7e53a3e7dde192!8m2!3d25.192326!4d55.267194s"
            style={{ fontSize: "10px" }}
          >
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVckUrdOnUMwvShzgAzA51gN5KTxV4DaHkiMzYhX9rxRy8PrlM-6Z&usqp=CAE&s"
              alt=""
            />
            Burj Khalifa Street, Business Bay, PO Box 8489, Dubai
          </a>
          <p style={{ fontSize: "13px" }}>
            The hotel is set in an upscale location
            <br />
            offering views of the Burj-Khalifa. It is in
            <br /> close proximity to Dubai's commercial and entertainment hubs.
          </p>
        </div>
        <div style={{ fontSize: "15px", margin: "3rem 1rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Located in Downtown Dubai
          </div>
          <br />
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Close to Dubai Opera & Dubai Mall
          </div>
        </div>
        <div style={{ fontSize: "15px", margin: "2rem 3rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Rooms with View of <br />
            Burj Khalifa
          </div>
          <br />
          <div>
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UAMGWY4LT0-StTAJwOYJI-S7_iYqVORNHQ&usqp=CAU"
              alt=""
            />{" "}
            20 Mins from International Airport
          </div>
        </div>
        <div>
          <div>Fetching best rates</div>
          <br />
          <div style={{ margin: "4rem 1rem " }}>
            <h3 style={{ fontSize: "5px" }}>Starting Rate/Night</h3>
            <h2> 850*</h2>
            <Link to="/Dubai" state={{ data: state }}>
              {" "}
              <button>View Hotel</button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", margin: "3rem 5rem" }}>
        <div>
          <img
            style={{ width: "350px", height: "280px" }}
            src="https://www.tajhotels.com/content/dam/luxury/tle/16x7/Exterior-16x7.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <h3 style={{ fontSize: "23px" }}>Taj Lands End</h3>
          <a
            href="https://www.google.com/maps/place/19%C2%B002'37.5%22N+72%C2%B049'09.6%22E/@19.043751,72.819324,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc1b25f33d67c07eb!8m2!3d19.043751!4d72.819324s"
            style={{ fontSize: "15px", opacity: "0.6" }}
          >
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVckUrdOnUMwvShzgAzA51gN5KTxV4DaHkiMzYhX9rxRy8PrlM-6Z&usqp=CAE&s"
              alt=""
            />
            Byramji Jeejeebhoy Road,Bandstand, Bandra (West), Mumbai
          </a>
          <p style={{ fontSize: "11px", opacity: "0.4" }}>
            10.2km from Chhatrapati Shivaji International
            <br /> Airport
          </p>
        </div>
        <div style={{ fontSize: "15px", margin: "3rem 2rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Panoramic View of the Arabian Sea
          </div>
          <br />
          <div>
            <img
              style={{ width: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdykIXGi81em-yt4VRprseTv7WRYuFNq6QdA&usqp=CAU"
              alt=""
            />{" "}
            Luxurious rooms &<br /> suites with Arabian
            <br /> Sea & Bandstand
            <br /> views
          </div>
        </div>
        <div style={{ fontSize: "15px", margin: "2rem 3rem" }}>
          <div>
            <img
              style={{ width: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDwo5gL25kMLqACr8l_d4cwtpvWfu7hOu8Q&usqp=CAU"
              alt=""
            />{" "}
            Easy Access to Business <br />
            Districts
          </div>
          <br />
          <div>
            <img
              style={{ width: "30px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UAMGWY4LT0-StTAJwOYJI-S7_iYqVORNHQ&usqp=CAU"
              alt=""
            />
            12 KMs from the <br />
            Airport
          </div>
        </div>
        <div>
          <div>Fetching best rates</div>
          <br />
          <div style={{ margin: "4rem 1rem " }}>
            <h3 style={{ fontSize: "5px" }}>Starting Rate/Night</h3>
            <h2>17000</h2>
            <Link to="/LandsEnd" state={{data:state}}> <button>View Hotel</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
