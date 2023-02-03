import React from "react";
import Ideas from "./Ideas";
import "./Wedding.scss";
import video from "./videoplayback.mp4";
import Details from "./Details";
import { useState } from "react";
const Wedding = () => {
  const [propsal, setPropsal] = useState(false);
  const [propsi, setPropsi] = useState(false);
  const [honey, setHoney] = useState(false);
  const toggleprop = () => {
    setPropsal(!propsal);
  };
  const toggleProphi = () => {
    setPropsi(!propsi);
  };
  const togglepropsi = () => {
    setHoney(!honey);
  };

  if (propsal) {
    document.body.classList.add("active-model");
  } else {
    document.body.classList.remove("active-model");
  }
  if (propsi) {
    document.body.classList.add("active-model");
  } else {
    document.body.classList.remove("active-model");
  }
  if (honey) {
    document.body.classList.add("active-model");
  } else {
    document.body.classList.remove("active-model");
  }
  return (
    <div>
      <img
        className="tro"
        src="https://www.tajhotels.com/content/dam/luxury/weddings/Taj_Timeless%20Weddings_Desktop%20banner_21.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
        alt=""
      />
      <h1 className="fah">TIMELESS WEDDINGS</h1>
      <p className="and">
        A wedding with us has meant something special for generations. Elevate
        your big day into a memorable and momentous
        <br /> celebration with our iconic repertoire of grand palaces, world
        class resorts and iconic properties. Make your dreams come <br />
        true with timeless weddings.
      </p>
      <br></br>
      <div className="card" style={{ width: "750px", margin: " 1rem 24rem" }}>
        <video width="700" height="420" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <br></br>
      <Details />
      <br></br>
      <h1>EXPERIENCE TIMELESS WEDDINGS</h1>
      <p className="and">
        With Timeless Wedding let your celebration be the beginning of a legacy
        of romance that generations ahead will listen.
      </p>
      <div className="wrap">
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/RENEWAL%20OF%20VOWS%2099.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
            style={{ height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>THE PERFECT PROPOSAL</b>
            </h4>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "15px" }}>
                Be it a grand gesture of romance<br></br> or a few private
                moments only shared between you two.
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "15px",
                  height: "60px",
                }}
                onClick={toggleprop}
              >
                view Details
              </button>
            </div>
            {propsal && (
              <div className="mod">
                <div onClick={toggleprop} className="oveay"></div>
                <div className="mod-content">
                  <div className="sr" style={{ display: "flex" }}>
                    <div>
                      <h4 style={{ color: "red" }}>THE PERFECT PROPOSAL</h4>
                      <p style={{ color: "red", fontSize: "15px" }}>
                        Be it a grand gesture of romance or a few private
                        moments only shared between you<br></br> two. Weave
                        love, uniqueness and sophistication into your proposal.
                        As you let your<br></br>
                        emotions flow and profess your love, the hotel’s
                        attentive staff will combine keen <br></br>foresight
                        with absolute discretion to create the most
                        unforgettable moments before<br></br> you hear a
                        resounding “Yes!”
                      </p>
                    </div>
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/RENEWAL%20OF%20VOWS%2099.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
                      alt=""
                    />
                  </div>
                  <button className="close-model" onClick={toggleprop}>
                    ❌
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image48.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
          <div className="container">
            <h4>
              <b>GRAND WEDDING CELEBRATIONS</b>
            </h4>
            <div style={{ display: "flex" }}>
              <p>Taj transforms nuptials into a celebration of a lifetime.</p>
              <button
                className="btn"
                onClick={toggleProphi}
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "15px",
                  height: "60px",
                }}
              >
                view Details
              </button>
            </div>
            {propsi && (
              <div className="mod">
                <div onClick={toggleProphi} className="oveay"></div>
                <div className="mod-content">
                  <div className="sr" style={{ display: "flex" }}>
                    <div>
                      <h4 style={{ color: "red" }}>
                        GRAND WEDDING CELEBRATIONSL
                      </h4>
                      <p style={{ color: "red", fontSize: "11px" }}>
                        Abundant in timeless magnificence and warmth, weddings
                        at the Taj are inspired <br />
                        experiences which make for the dreamiest prelude to a
                        beautiful new chapter in a <br />
                        couple’s life. While at their palatial properties, be
                        royalty for your big day as they <br />
                        recreate the magic of the ages of the kings and queens.
                        On the other hand, at their <br /> hotels by the beach,
                        let the cool ocean breeze lift your spirits even higher
                        as you walk <br />
                        down an aisle of powder soft sand ready to say ‘I
                        do’With their stellar staff, dedicated <br /> to
                        ensuring each and every detail is executed flawlessly,
                        excellent chefs and unique <br />
                        spaces from banquets to lawns and everything in between,
                        Taj transforms nuptials into <br /> a celebration of a
                        lifetime.
                      </p>
                    </div>
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image48.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
                      alt=""
                    />
                  </div>
                  <button className="close-model" onClick={toggleProphi}>
                    ❌
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/8.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
            alt=""
          />
          <div className="container">
            <h4>
              <b>HONEYMOONS</b>
            </h4>
            <div style={{ display: "flex" }}>
              <p>A perfect wedding deserves a beautiful honeymoon.</p>
              <button
                className="btn"
                onClick={togglepropsi}
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "15px",
                  height: "60px",
                }}
              >
                view Details
              </button>
            </div>
            {honey && (
              <div className="mod">
                <div onClick={toggleprop} className="oveay"></div>
                <div className="mod-content">
                  <div className="sr" style={{ display: "flex" }}>
                    <div>
                      <h4 style={{ color: "red" }}>HONEYMOONS</h4>
                      <p style={{ color: "red", fontSize: "15px" }}>
                        A perfect wedding deserves a beautiful honeymoon. Go on
                        moonlit walks down a<br/> beautiful, secluded beach on your
                        very own private island, whisper sweet nothings over<br/> a
                        candlelit dinner atop a watchtower, woo her with a
                        champagne breakfast, and <br/>surrender to unabashed
                        relaxation with a very special spa treatment for two as
                        you sail<br/> on a shimmering lake. Celebrate your romance in
                        your very own paradise.
                      </p>
                    </div>
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/8.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
                      alt=""
                    />
                  </div>
                  <button className="close-model" onClick={togglepropsi}>
                    ❌
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1>IDEAS & INSPIRATIONS</h1>
      <br></br>
      <br></br>
      <Ideas />
    </div>
  );
};

export default Wedding;
