import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    name: "",
    timein: "",
    timeout: "",
    rooms: "",
    Adults: "",
    children: "",
  });
  const toggleCheck = (e) => {
    e.preventDefault();
    setCheck(true);
  };
  const toggleget = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/taj-brand-home-logo.PNG"
              alt=""
              style={{ width: "40px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Dining"
                >
                  Dining
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Wedding"
                >
                  Weddings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/GiftCard"
                >
                  Gift Card
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Holiday"
                >
                  Taj Holidays
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/FindBook"
                >
                  Find Bookings
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Calender"
                >
                  Event
                </Link>
              </li>

              <Link
                style={{
                  position: "relative",
                  left: "660px",
                  backgroundColor: "lightblue",
                }}
                className="nav-link active"
                aria-current="page"
                to="/Signin"
              >
                sign in
              </Link>
              <li className="nav-item">
                <button
                  onClick={toggleCheck}
                  className="nav-link active"
                  style={{
                    position: "relative",
                    left: "688px",
                    backgroundColor: "#b39758",
                  }}
                  aria-current="page"
                  type="submit"
                >
                  Book and stay
                </button>
                {check && (
                  <div
                    className="modelin"
                    onMouseLeave={() => {
                      setCheck(false);
                    }}
                  >
                    <div className="modal-contents">
                      <div
                        className="sr"
                        style={{ textAlign: "center", margin: "3rem 1rem" }}
                      >
                        <div className="popo">
                          <label for="hotel" className="am">
                            Hotel or Destination
                          </label>
                          <input
                            onChange={toggleget}
                            type="text"
                            autoComplete="off"
                            id="hotel"
                            name="name"
                          />

                          <div style={{ display: "flex", margin: "2rem 0rem" }}>
                            <div>
                              <label for="time in" className="am">
                                Check-in-Date
                              </label>
                              <br></br>
                              <input
                                onChange={toggleget}
                                type="date"
                                id="timein"
                                name="timein"
                              />
                            </div>
                            <div style={{ margin: "0rem 2rem" }}>
                              <label for="time out" className="am">
                                Check-out-Date
                              </label>
                              <br></br>
                              <input
                                onChange={toggleget}
                                type="date"
                                id="timeout"
                                name="timeout"
                              />
                            </div>
                          </div>

                          <div style={{ display: "flex" }}>
                            <div>
                              <label for="rooms" className="am">
                                Rooms
                              </label>
                              <br />
                              <select name="rooms" onChange={toggleget}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                            <div style={{ margin: "0rem 3rem" }}>
                              <label for="Adult" className="am">
                                Adults
                              </label>
                              <br />
                              <select name="Adults" onChange={toggleget}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                            <div style={{ margin: "0rem 1rem" }}>
                              <label for="Children" className="am">
                                Children
                              </label>
                              <br />
                              <select name="children" onChange={toggleget}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                            </div>
                          </div>
                          <br></br>
                          <Link to="/Checklist" state={{ data: data }}>
                            <button
                              className="btn"
                              style={{ backgroundColor: "#b39758" }}
                            >
                              Check availability
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
