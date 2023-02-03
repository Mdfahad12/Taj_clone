import React, { useState, useEffect, useRef } from "react";
import "./Holiday.scss";
const Holiday = () => {
  const newsTest = [
    {
      image:
        "https://www.tajhotels.com/content/dam/tajhotels/campaign/she-remains-the-taj/website-banner.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Twitter confirms it is testing a phone number verification",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/holidays/incredible-escapes/home-page/16x7.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Yandex's sale of media assets to VK includes yandex.ru homepage",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/holidays/homemain.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title:
        "YC-backed Zywa, a neobank for Gen Z, raises $3M to expand across MENA",
    },
    {
      image:
        "https://www.tajhotels.com/content/dam/tajhotels/banners/TH-Website-banner-Kerala-Desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      title: "Max Q: To the moon!!!",
    },
  ];
  const [nextNews, setnextNews] = useState(0);

  const nextnews = () => {
    const islastSlide = nextNews === newsTest.length - 1;
    const newSlide = islastSlide ? 0 : nextNews + 1;
    setnextNews(newSlide);
  };
  const prevnews = () => {
    const isFirstSlide = nextNews === 0;
    const newSlide = isFirstSlide ? newsTest.length - 1 : nextNews - 1;
    setnextNews(newSlide);
  };
  useEffect(() => {
    setInterval(() => {
      prevnews();
    }, 6000);
  }, []);
  const ne = useRef();
  return (
    <div>
      <div className="aboutNews " ref={ne}>
        <div className="about">
          {/* <h2>{newsTest[nextNews].title}</h2> */}
          <img className="agi" src={newsTest[nextNews].image} alt="sorry"></img>
          <div className="weather_btn">
            <button className="prev" onClick={nextnews}>
              &#8810;
            </button>
            <button className="next" onClick={prevnews}>
              &#8811;
            </button>
          </div>
        </div>
      </div>
      <h1 className="sh">Taj Holidays</h1>
      <p className="rst">
        Create memories for a lifetime. Watch your child’s face light up in the
        golden sunlight as you build your first dream sandcastle together on a
        Taj Holiday. Let time stand still as you travel across a lake <br></br>
        to a 16th century white marble palace. Discover architectural marvels on
        a Champagne tour, as peacocks strut by your side. Enjoy the romance of
        living in a rainforest while you walk through the <br></br>clouds. Feel
        a cold shiver run down your spine as you hear a tiger roar in the dense
        forest. Indulge in a wellness treatment, crafted using centuries of
        traditional knowledge. Set your soul free to
        <br /> embrace the sheer magic of experiencing timeless traditions.
        Realize cherished moments for a lifetime with every Taj Holiday, crafted
        with impeccable details just for you and your loved ones.
      </p>
      <div className="wrap">
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/themes/family-getaways/4x3/familygetaway4x3.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>Family Getaways</b>
            </h4>
            <p>Create memories for a lifetime with your loved ones .</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/themes/royal-retreats/4x3/Winter_Royal_Retreats-4x3.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>Royal Experiences</b>
            </h4>
            <p>Experience royal living at the Palaces of the Taj.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/themes/romantic-rendzevous/4x3/4x3_Romantic.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>Romantic Hideaways</b>
            </h4>
            <p>Create unforgettable memories for you and your beloved.</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/incredible-escapes/home-page/4x3.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h4>
              <b>Itineraries</b>
            </h4>
            <p>Create memories for a lifetime with your loved ones .</p>
          </div>
        </div>
      </div>
      <br></br>
      <h1>Trending Offers</h1>
      <div className="wrap">
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/offers/taj-exotica-goa/family-getaways-3/winter/16x51.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h5>
              <b>Taj Exotica Resort & Spa, Goa- Family Getaways</b>
            </h5>
            <p>
              A sun-drenched fountain marks your entrance into the Taj Exotica
              Resort & Spa, Goa
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Lake_Palace_Udaipur/images/4x3/Taj_Lake_Palace_Exterior.jpeg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h5>
              <b>Taj Lake Palace, Udaipur- Royal Experiences</b>
            </h5>
            <p>
              Lake Pichola shimmers under the warm glow of the sun, reflecting
              the ethereal majesty of the unmatched Taj Lake Palace, Udaipur.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/taj-chia-kutir-darjeeling/gallery/TCKD_PropDet_1253.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%", height: "310px" }}
          />
          <div className="container">
            <h5>
              <b>Taj Chia Kutir Resort & Spa, Darjeeling- Family Getaways</b>
            </h5>
            <p>
              The Taj Chia Kutir Resort and Spa is as exotic as it sounds.
              Luxury at its barefoot best. After all it is a sybaritic resort
              located right in the
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/holidays/offers/taj-madikeri-coorg/family-getaways-3/winter/4x4.jpg/jcr:content/renditions/cq5dam.web.323.323.jpeg"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="container">
            <h5>
              <b>Taj Madikeri Resort & Spa, Coorg- Family Getaways</b>
            </h5>
            <p>
              The Taj Madikeri Resort & Spa, Coorg. With Kodagu architecture, a
              temperature controlled Infinity Pool, an outdoor pool, 4
              experiential dining
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <h1>Popular Destinations</h1>
      <div className="wrap">
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/gateway/hotels/GW-Ajmer/Welcome/16x7-%281152x504%29-TGHA-FACADE-DA-MAIN-102.png/jcr:content/renditions/cq5dam.web.756.756.png"
            alt=""
            style={{ width: "100%", height: "310px" }}
          />
          <div className="container">
            <h5>
              <b>Rajasthan</b>
            </h5>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/Old-Taj_Fort_Aguada_Goa/new-images/F%20A%20B%20R%20-%20Facade%20Day.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "100%", height: "310px" }}
          />
          <div className="container">
            <h5>
              <b>Goa</b>
            </h5>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/thrp/destinations/Rishikesh/1x1/rishikund.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "100%", height: "310px" }}
          />
          <div className="container">
            <h5>
              <b>Rishikesh</b>
            </h5>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.tajhotels.com/content/dam/luxury/hotels/taj-theog/images/gallery/_12I3569_Thiru-HDR-Edit.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "80%", height: "310px" }}
          />
          <div className="container">
            <h5>
              <b>Shimla</b>
            </h5>
          </div>
        </div>
      </div>
      <h1 style={{ margin: "3rem 1rem" }}>
        See How We Create Memorable Holidays
      </h1>
      <iframe
      style={{margin:"1rem 5rem"}}
        width="90%"
        height="315"
        src="https://www.youtube.com/embed/SrU6uxJAtmg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Holiday;
