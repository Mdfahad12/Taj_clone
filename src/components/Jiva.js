import React from "react";
import video1 from "./Taj_Coral_Reef_video.mp4";
const Jiva = () => {
  return (
    <div>
      <video controls>
        <source src={video1} type="video/mp4" />
      </video>
      <div style={{ display: "flex", margin: "1rem 4rem" }}>
        <div>
          <h3 style={{ margin: "3rem 2rem" }}>
            JIVA - A TRADITION, A WAY OF LIFE
          </h3>
          <p style={{ fontSize: "17px", margin: "3rem 1rem " }}>
            The journey for achieving harmony between nature and self, began in
            India over 5000<br></br> years ago, where Spiritual Reflection,
            Healing and Balance were experienced by<br></br> heightening the use
            of all five senses. This awareness of one’s surroundings is referred
            <br></br> by the sages as the opening the ‘Inner eye’. With the
            passage of time, India’s ancient<br></br>
            science of inner well-being made its way to weary warriors, kings
            and statesmen for <br></br>their relaxation and rejuvenation. It was
            further complemented by the elaborate<br></br> beauty rituals of
            kings and queens. These age-old traditions have continued their{" "}
            <br></br>journey into the millennium. Jiva honours these traditions
            at its luxurious sanctuaries<br></br>
            that invite you to restore balance – in the way it all began!
          </p>
        </div>
        <div>
          <img
            style={{ width: "600px", height: "350px", margin: "3rem 1rem" }}
            src="https://www.tajhotels.com/content/dam/jiva-spa/jiva-tradition.jpg"
            alt=""
          />
        </div>
      </div>
      <div style={{ display: "flex", margin: "1rem 4rem" }}>
        <div>
          <img
            style={{ width: "600px", height: "380px", margin: "4rem 1rem" }}
            src="https://www.tajhotels.com/content/dam/jiva-spa/jiva-destination.jpg"
            alt=""
          />
        </div>
        <div>
          <h3 style={{ margin: "3rem 2rem" }}>THE DESTINATION WITHIN</h3>
          <p style={{ fontSize: "17px", margin: "3rem 1rem " }}>
            The philosophy of Jiva or “Inner Life” is inherently rooted in
            India’s ancient approach to <br/>wellness. Inspired by traditional Indian
            healing wisdom, we believe that a spa unfolds<br/> the path of life that
            opens out channels to nurture one’s life force. Jiva embraces a deep<br/>
            understanding of mind, body and spirit; their individual needs and
            their<br/> interdependences. The ethos of our carefully-recreated
            treatments is drawn on the rich <br/>and ancient wellness heritage of
            India, the fabled lifestyle and culture of Indian royalty<br/> and the
            healing therapies that embrace Indian spirituality. Our spa
            experiences are<br/> offered by trained experts, using exclusive natural
            products in a fresh and harmonious<br/> setting. With Jiva, undertake the
            journey within, through an array of enlivening holistic<br/> treatments,
            meaningful rituals and ceremonies for a truly calming experience.<br/>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", margin: "1rem 4rem" }}>
        <div>
          <h3 style={{ margin: "3rem 2rem" }}>JIVA RITUALS</h3>
          <p style={{ fontSize: "17px", margin: "3rem 1rem " }}>
            The rituals at our spas reflect the essence of ancient Indian wisdom
            and culture. We
            <br /> greet our guests with ‘Namaste’, meaning ‘I bow to the
            divinity within you’ in Sanskrit,
            <br /> with our heads bowed and hands folded. It also has a
            spiritual significance of negating
            <br /> or reducing one’s ego in the presence of another. The true
            meeting between people is
            <br /> the meeting of their minds. Hence, Namaste also means ‘may
            our minds meet’. The
            <br /> bowing down of the head is a gracious form of extending
            friendship in love and
            <br /> humility. Traditionally in India, it is a custom to wash the
            guest’s feet before entering <br /> the threshold. Besides
            eliminating fatigue and stress, it is also a form of respect <br />{" "}
            towards others. The guest’s journey at our spas starts with this
            ritual. The special <br /> footbath blend, designed with essential
            oils, aids in relaxation and deep comfort. After
            <br /> the treatments, we garland our guests. The fragrance and
            touch of flowers have a <br /> soothing effect on the heated body
            after a treatment.
          </p>
        </div>
        <div>
          <img
            style={{ width: "600px", height: "380px", margin: "4rem 1rem" }}
            src="https://www.tajhotels.com/content/dam/jiva-spa/jiva-rituals.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Jiva;
