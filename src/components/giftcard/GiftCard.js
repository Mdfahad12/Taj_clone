import React, { useState, useEffect, useRef } from "react";
import GiftForm from "./GiftForm";

const GiftCard = () => {
  const Gift = [
    {
      images:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_661.jpg",
    },
    {
      images:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_2078.jpg",
    },
    {
      images:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_1695.jpg",
    },
    {
      images:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_1435.jpg",
    },
    {
      images:
        "https://giftbig.s3.amazonaws.com/microsite/homebanner/slidebanner/slidebanner_1098.jpg",
    },
  ];
  const [gift, setGift] = useState(0);

  const nextGift = () => {
    const slastSlide = gift === Gift.length - 1;
    const slids = slastSlide ? 0 : gift + 1;
    setGift(slids);
  };
  const prevGift = () => {
    const irstSlide = gift === 0;
    const slids = irstSlide ? Gift.length - 1 : gift - 1;
    setGift(slids);
  };
  useEffect(() => {
    setInterval(() => {
      prevGift();
    }, 6000);
  }, []);
  const gi = useRef();
  return (
    <div>
      <h1 style={{ color: "#ddc49596" }}>TAJ EXPERIENCES GIFT CARD</h1>
      <div className="aboutNews " ref={gi}>
        <div className="about">
          <img className="agi" src={Gift[gift].images} alt="sorry"></img>

          <div className="weather_btn">
            <button className="prev" onClick={nextGift}>
              &#8810;
            </button>
            <button className="next" onClick={prevGift}>
              &#8811;
            </button>
          </div>
        </div>
      </div>
      <h1 style={{fontSize:"35px",margin:"1rem 0rem"}}>E Gift Card</h1>
      <p style={{fontSize:"18px",margin:"1rem 10rem",color:"gold",fontFamily:"cursive"}}>
        Thinking out of the Gift Box on the fly? Nothing speaks quite like a
        thoughtful gift for those special occasions when you want to thank<br/>
        someone and tell them how much they mean to you. But the best gifts in
        life rarely come in a box. They comprise alluring encounters<br/> and
        exquisite experiences that make precious memories — the kind that you
        return to over and over again. Taj Experiences eGift<br/> Cards feature
        artistic watercolour motifs in a range of themed design options that
        take inspiration from our iconic heritage and art <br/>and celebrate the
        myriad cultural traditions of our festivals, from Christmas baubles on
        mango trees to the fanous and kandeels that <br/>light up Eid and Diwali.
        Delivered instantly and redeemable immediately across Taj, SeleQtions
        and Vivanta hotels and Ama Trails &<br/> Stays in India, Taj Experiences
        eCards are the perfect gift for a birthday, engagement, wedding or
        festive celebration.
      </p>
      <div className="card" style={{ width: "100px", margin: "3rem 45rem" }}>
        <img
          style={{ width: "70px" }}
          src="https://stage.woohoo.in/media/catalog/customoptions/TAJDIW2_thumnail.jpeg"
          alt=""
        />
      </div>
      <GiftForm />
    </div>
  );
};

export default GiftCard;
