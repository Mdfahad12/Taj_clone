import React from "react";
import { useState } from "react";
import "./Ideas.scss";

const Ideas = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleBtn = () => {
    {
      setReadMore((prevState) => !prevState);
    }
  };
  return (
    <div>
      <div className="wrap">
        <div className="ove" style={{ width: "400px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/Iconic-City-Destinations-for-a-Dream-Wedding/1.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>Iconic City Destinations for a Dream Wedding</b>
            </h4>
            <p>Read more</p>
          </div>
        </div>
        <div className="ove" style={{ width: "400px", height: "400px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image72.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "400px" }}
          />
          <div className="container">
            <h4>
              <b>Timeless Weddings at Taj Mahal Lucknow</b>
            </h4>
            <p>Read more</p>
          </div>
        </div>
        <div className="ove" style={{ width: "400px", height: "400px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image42.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "400px", height: "280px" }}
          />
          <div className="container">
            <h4>
              <b>2019 Wedding Food Trends according to Expert Chefs from Taj</b>
            </h4>
            <p style={{ top: "182px" }}>Read more</p>
          </div>
        </div>
      </div>
      {readMore ? (
        <>
          <div className="wrap">
            <div className="ove" style={{ width: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image24.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "290px" }}
              />
              <div className="container">
                <h4>
                  <b>Iconic City Destinations for a Dream Wedding</b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image34.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px" }}
              />
              <div className="container">
                <h4>
                  <b>Timeless Weddings at Taj Mahal Lucknow</b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/10-locations-by-indias-leading-hotel/image1.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "280px" }}
              />
              <div className="container">
                <h4>
                  <b>
                    10 Locations By India’s Leading Hotel Chain For A Perfect
                    Photo Shoot
                  </b>
                </h4>
                <p style={{ top: "182px" }}>Read more</p>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="ove" style={{ width: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image822.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "290px" }}
              />
              <div className="container">
                <h4>
                  <b>Seven Secrets to Extraordinary I-Do’s at Taj hotels</b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image66.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px" }}
              />
              <div className="container">
                <h4>
                  <b>
                    Wedding Venues in India for 2019 – By India’s Leading Luxury
                    Hotel Chain
                  </b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/the-best-taj-hotels-for-the-ultimate-bachelorette-trip/image11.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "280px" }}
              />
              <div className="container">
                <h4>
                  <b>
                    2019 Wedding Food Trends according to Expert Chefs from Taj
                  </b>
                </h4>
                <p style={{ top: "182px" }}>Read more</p>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="ove" style={{ width: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/planning-an-all-veg-wedding-menu-tajs-executive-chef-amit-chowdhury-shares-his-expertise/image3.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "290px" }}
              />
              <div className="container">
                <h4>
                  <b>The Best Taj Hotels For The Ultimate Bachelorette Trip!</b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/image34.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "270px" }}
              />
              <div className="container">
                <h4>
                  <b>
                    Planning an All-Veg Wedding Menu? Taj’s Executive Chef, Amit
                    Chowdhury shares his expertise.
                  </b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/divine-wedding-feasts-by-taj/Page-4-Image-6.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "280px" }}
              />
              <div className="container">
                <h4>
                  <b>Divine Wedding Feasts By Taj</b>
                </h4>
                <p style={{ top: "182px" }}>Read more</p>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="ove" style={{ width: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/timeless-weddings-trends-in-2020-in-conversation-with-renu-basu-senior-vice-president-global-sales-and-marketing-ihcl/image7.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "290px" }}
              />
              <div className="container">
                <h4>
                  <b>
                    Timeless Weddings Trends In 2020: In Conversation With Renu
                    Basu, Senior Vice President, Global Sales And Marketing,
                    IHCL
                  </b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/unique-destinations-for-your-dream-proposal/image5.png/jcr:content/renditions/cq5dam.web.756.756.png"
                alt=""
                style={{ width: "400px" }}
              />
              <div className="container">
                <h4>
                  <b>Unique Destinations For Your Dream Proposal</b>
                </h4>
                <p>Read more</p>
              </div>
            </div>
            <div className="ove" style={{ width: "400px", height: "400px" }}>
              <img
                src="https://www.tajhotels.com/content/dam/luxury/weddings/ideads-and-inspirations/top-5-destinations-for-a-city-wedding-like-no-other/image10.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
                alt=""
                style={{ width: "400px", height: "280px" }}
              />
              <div className="container">
                <h4>
                  <b>Top 5 Destinations for a City Wedding Like No Other!</b>
                </h4>
                <p style={{ top: "182px" }}>Read more</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div onClick={toggleBtn} className="bn">
        {readMore ? "see less↑" : "see more↓"}
      </div>
      <br></br>
      <h1>INSPIRING THEMES</h1>
      <div className="wrap">
        <div className="card" style={{ width: "400px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/video/Baradari%20Dining%201.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>PALACE WEDDINGS</b>
            </h4>
            <p>
              Create a mark in history with a breathtaking wedding, situated in
              the magnificent palaces where Maharajas once reigned.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "500px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/Taj%20Mahal%20Mumbai-Ball%20Room%201.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "370px" }}
          />
          <div className="container">
            <h4>
              <b>ICONIC CITY WEDDINGS</b>
            </h4>
            <p>
              Make a grand statement as you celebrate your eternal love affair
              at the one of the city’s most prominent landmarks.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "500px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/Vivanta%20by%20Taj%20-%20Bentota,%20Sri%20Lanka%204.jpg"
            alt=""
            style={{ width: "365px", height: "280px" }}
          />
          <div className="container">
            <h4>
              <b>BEACH WEDDINGS</b>
            </h4>
            <p style={{ top: "182px" }}>
              Celebrate your union at our dreamy resorts, where the shore melts
              into the mesmerizing ocean.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h1>BEAUTY AND THE BEST</h1>
      <br/>
      <p style={{ fontsize: "20px", textAlign: "center" }}>
        Discover the secrets of Indian wellness with our specially crafted
        Bridal Spas at JIVA Spa. Think traditional homemade <br /> facials, body
        scrubs, sublime massages, aromatic blends that enhance yourbeauty sleep.
        For a holistic approach to your <br /> well-being as you count the days
        to your big day, sign up for yoga, and meditation services with a
        personal instructor and
        <br /> fitness consultant.
      </p>
      <div className="wrap">
        <div className="card" style={{ width: "400px",height:"515px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/honeymoon-venues/Nadesar-6-1310-Final.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ height: "290px" }}
          />
          <div className="container">
            <h4>
              <b>DETOX</b>
            </h4>
            <p>
              Exfoliate, stimulate, eliminate Traditional Indian scrubs and
              wraps for the body Hridayãkasha Dhărna for the mind A beauty
              rehearsal to zero in on what suits you best.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "515px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/preparing-you/Make-Up-Artist-3x2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "370px" }}
          />
          <div className="container">
            <h4>
              <b>RADIANCE</b>
            </h4>
            <p>
              Luxurious signature facials for a flawless glow. Sublime massage
              for the soles of your feet Profound relaxation
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "400px", height: "515px" }}>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/dining-sample-cusines/JIVA-BAOLI-135.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{ width: "365px", height: "280px" }}
          />
          <div className="container">
            <h4>
              <b> GROOMING</b>
            </h4>
            <p style={{ top: "182px" }}>
              Manicures, Pedicures and all in between A perfect start to a new
              beginning. God lies in the details Finishing touches, Bridal
              make-up A new look, a new You.
            </p>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "1100px",height:"375px" ,margin:"1rem 13rem"}}>
        <div className="wrap">
          <div className="container">
            <h4 style={{fontSize:"30px",}}>
              <b>To book your dream wedding contact us at:</b>
            </h4>
           <h5 style={{fontSize:"13px"}}>Email:- timelessweddings@ihcltata.com<br></br><br></br>
Phone:- +91 22 6665 1168</h5>
          </div>
          <img
            src="https://www.tajhotels.com/content/dam/luxury/weddings/video/0M0A2001.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"
            alt=""
            style={{width:"900px", height: "350px",right:"0" }}
          />
        </div></div>
    </div>
  );
};

export default Ideas;
