import React, { useState, useEffect, useRef } from "react";
import "./Form.scss";
import { Link } from "react-router-dom";
import Api from "./Api";
import CardSlider from "./CardSlider";
import Navcard from './Navcard';
const Form = () => {
  const newsTest = [
    {
      image:
        "https://www.tajhotels.com/content/dam/tajhotels/campaign/she-remains-the-taj/website-banner.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Twitter confirms it is testing a phone number verification",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/tajhotels/campaign/3-Website-banner.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Yandex's sale of media assets to VK includes yandex.ru homepage",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/luxury/hotels/Taj-Exotica-Maldives/images/16x7/AerialShotII16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title:
        "YC-backed Zywa, a neobank for Gen Z, raises $3M to expand across MENA",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/holidays/web_banner.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Max Q: To the moon!!!",
    },
  ];
  const [nextNews, setnextNews] = useState(0);

  const nextnews = () => {
    const islastSlide = nextNews === newsTest.length - 1;
    const newSlide = islastSlide ? 0 : nextNews + 1;
    setnextNews(newSlide);
    console.log(nextNews)
  };
  const prevnews = () => {
    const isFirstSlide = nextNews === 0;
    const newSlide = isFirstSlide ? newsTest.length - 1 : nextNews - 1;
    setnextNews(newSlide);
    console.log(nextNews)
  };
  useEffect(() => {
    setInterval(() => {
      prevnews();
    }, 6000);
  }, []);

  const ne = useRef();
  return (
    <>
      <div className="aboutNews " ref={ne}>
        <div className="about">
          <img className="agi" src={newsTest[nextNews].image} alt="sorry"></img>
          <div className="wrapper">
            <Api  />
          </div>
          <div className="weather_btn">
            <button className="prev" onClick={nextnews}>
              &#8810;
            </button>
            <button className="next" onClick={prevnews}>
              &#8811;
            </button>
          </div>
        </div>
        <div className="dota">
          <span className={nextNews===0?"lts":"ltss"} onClick={()=>{setnextNews(0)}}></span>
          <span className={nextNews===1?"lts":"ltss"} onClick={()=>{setnextNews(1)}}></span>
          <span className={nextNews===2?"lts":"ltss"} onClick={()=>{setnextNews(2)}}></span>
          <span className={nextNews===3?"lts":"ltss"}onClick={()=>{setnextNews(3)}}></span>
        </div>
      </div>
      <br></br>
      <div className="ima">
        <div>
          <img
            className="e"
            src="https://www.tajhotels.com/content/dam/tic/tataneu/neupass/images/1.png"
            alt=""
          />
          <h6>Best Rates Guaranteed</h6>
        </div>
        <br></br>
        <div>
          <img
            className="e"
            src="https://www.tajhotels.com/content/dam/tic/tataneu/neupass/images/2.png"
            alt=""
          />
          <h6>Exclusive Member Rewards</h6>
        </div>
        <br></br>
        <div>
          <img
            className="e"
            src="https://www.tajhotels.com/content/dam/tic/tataneu/neupass/images/3.png"
            alt=""
          />
          <h6>No Hidden Charges</h6>
        </div>
        <br></br>
        <br></br>
        <div>
          <img
            className="e"
            src="https://www.tajhotels.com/content/dam/tic/tataneu/neupass/images/4.png"
            alt=""
          />
          <h6>Earn 5% NeuCoins</h6>
        </div>
        <br></br>
        <div className="ver"></div>
        <div>
          <img
            className="im"
            src="https://www.tajhotels.com/content/dam/tic/tataneu/logo/neupass-logo-white-transparent.png/jcr:content/renditions/cq5dam.web.323.323.png"
            alt=""
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1>OFFERS & PROMOTIONS</h1>
        
        <Navcard/>
      </div>
      <br></br>
      <h1>POPULAR DESTINATIONS</h1>
      <br></br>
      <CardSlider/>
      <br></br>
      <div>
        <h1>EXPLORE TAJ</h1>
        <p className="mno" style={{}}>
          Descend into a world that was once the sole preserve of royalty, step
          onto the soft, white sand beaches at a secluded island or discover the
          hidden secrets of mist-draped hills with Taj
        </p>
        <br></br>
        <div className="wrap">
          <div className="card">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/in/en/themes/Beach_dining_theme.png/jcr:content/renditions/cq5dam.web.512.512.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="ghi">
              <h4>BEACH RETREATS</h4>
              <p>
                Wake up to the sound of waves lapping lazily at the shore.
                Uncover serenity and marvel at the wealth of beauty within the
                glittering blue seas. Give in to the siren song of the sun, sand
                and surf with Beach Retreats.
              </p>
              <a href="/home" style={{color:"rgb(210, 151, 81)",fontSize:"18px"}}>view Details →</a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/in/en/themes/hill_station_theme.png/jcr:content/renditions/cq5dam.web.512.512.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="ghi">
              <h4>HILL STATIONS</h4>
              <p>
                Gaze at the mist rolling in over the hill-tops from your
                luxurious villa. Marvel at glorious sunsets that will take your
                breadth away from a private deck.
              </p>
              <a href="/home" style={{color:"rgb(210, 151, 81)",fontSize:"18px"}}>view Details →</a>
            </div>
          </div>{" "}
        </div>
        <div className="wrap">
          <div className="card">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/in/en/themes/royal_theme.png/jcr:content/renditions/cq5dam.web.512.512.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="ghi">
              <h4>ROYAL INDIA</h4>
              <p>
                Wander through the storied halls of a fairy tale palace, where
                dreams come to life. Retreat into your majestic suite, inspired
                by elegance.
              </p>
              <a href="/home" style={{color:"rgb(210, 151, 81)",fontSize:"18px"}}>view Details →</a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/in/en/themes/urban_getaways_theme.png/jcr:content/renditions/cq5dam.web.512.512.png"
              alt=""
            />
          </div>
          <div className="card">
            <div className="ghi">
              <h4>URBAN GETAWAYS</h4>
              <p style={{fontSize:"17px"}}>
                There is magic to be found in the energy of a bustling city.
                Where vibrant markets offer you everything you could imagine and
                centuries of history hide in the most unassuming places.
                Discover the world’s most spectacular urban hubs.
              </p>
              <a href="/home" style={{color:"rgb(210, 151, 81)",fontSize:"18px",position:"relative",top:"-7px"}}>view Details →</a>
            </div>
          </div>
        </div>
        <br />
        <br />

        <h1>OUR ANCILLARY SERVICES</h1>
        <br></br>
        <div className="wrap">
          <div className="card" style={{ width: "900px", margin: "1rem" }}>
            <img
              src="https://www.tajhotels.com/content/dam/luxury/weddings/Taj_Timeless%20Weddings_Desktop%20banner_21.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
              style={{ width: "860px", height: "500px" }}
            />
          </div>
          <div className="sh">
            <div className="card" style={{ width: "300px", height: "300px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/jiva-spa-new.png/jcr:content/renditions/cq5dam.web.512.512.png"
                alt=""
                style={{ width: "200px", height: "300px" }}
              />
            </div>
            <div className="card" style={{ width: "270px", height: "220px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/epicure-web-banner-1.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
        <div className="wrap">
          <Link to="Wedding">
            <div className="card" style={{ width: "500px", height: "220px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/tajhotels/in/en/events-experiences/Heritage.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
                alt=""
                style={{ width: "460px", height: "190px" }}
              />
            </div>
          </Link>
          <div className="card" style={{ width: "500px", height: "220px" }}>
            <img
              src="https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/taj.JPG/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
              style={{ width: "460px", height: "190px" }}
            />
          </div>
          <div className="card" style={{ width: "200px" }}>
            <img
              src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/4x3/Varq-PrivateDiningRoom-Master.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg"
              alt=""
              style={{ width: "170px", height: "200px" }}
            />
          </div>
        </div>
        <h1>OUR BRANDS</h1>
        <div className="img-b">
          <div className="img-a">
            <img
              className="b"
              src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/taj-brand-home-logo.PNG"
              alt=""
            />
            <img
              className="b"
              src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/seleqtions-brand-home-logo.PNG"
              alt=""
            />
            <img
              className="b"
              src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/ginger-brand-home-logo.PNG"
              alt=""
            />
            <img
              className="b"
              src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/vivanta-brand-home-logo.PNG"
              alt=""
            />{" "}
          </div>
          <div className="img=a"></div>
          <img
            className="b"
            src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/ama-brand-home-logo.PNG"
            alt=""
          />
          <img
            className="b"
            src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/tajsats-brand-home-logo.PNG"
            alt=""
          />
          <img
            className="b"
            src="https://www.tajhotels.com/content/dam/tajhotels/logos/new-design-logos/brands/qmin-brand-home-logo.PNG"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Form;
