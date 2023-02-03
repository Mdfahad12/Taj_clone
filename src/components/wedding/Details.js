import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import "./Details.scss";

const Details = () => {
  const [enquiry, setEnquiry] = useState({
    fullname: "",
    emailid: "",
    number: "",
    city: "",
    enquirys: "",
  });
  const [record, setRecord] = useState([]);
  const [model, setModel] = useState(false);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEnquiry({ ...enquiry, [name]: value });
  };

  const toggleModal = (e) => {
    e.preventDefault();

    const newRecord = { ...enquiry, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setEnquiry({
      fullname: "",
      emailid: "",
      number: "",
      city: "",
      enquirys: "",
    });
    setModel(!model);
    if (model) {
      document.body.classList.add("active-model");
    } else {
      document.body.classList.remove("active-model");
    }
    console.log(record);
  };
  const [verfied, setVerifed] = useState(false);

  
  const onCap=(value)=> {
    console.log("Captcha value:", value);
    setVerifed(true);}

  return (
    <div>
      <h1>REACH OUT TO US</h1>
      <p style={{textAlign:"center",fontSize:"15px"}}>To book your dream wedding, please call +91 22 6665 1383 or write to timelessweddings@ihcltata.com</p>
      <form style={{margin:"1rem 8rem"}}>
        <div>
        <div>
        <label htmlFor="username">Full Name*</label></div>
        <input
          type="text"
          name="fullname"
          className="fnm"
          value={enquiry.fullname}
          onChange={handleInput}
        />
        <div>
        <label htmlFor="emailid">Email ID*</label></div>
        <input
          type="emailid"
          name="emailid"
          className="em"
          value={enquiry.emailid}
          onChange={handleInput}
        />
        <div>
        <label htmlFor="number">Mobile Number*</label></div>
        <input
          type="number"
          name="number"
          className="fnm"
          value={enquiry.number}
          onChange={handleInput}
        /></div>
        <br />
        <div>
        <label htmlFor="cityname">Residing City*</label></div>
        <input
          type="cityname"
          name="city"
          className="fci"
          value={enquiry.city}
          onChange={handleInput}
        />
        <br />
        <div>
        <label htmlFor="enquiry">Enquiry</label></div>
        <input
          type="enquiry"
          name="enquirys"
          className="fen"
          value={enquiry.enquirys}
          onChange={handleInput}
        />
          <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onCap}
        />
        <button onClick={toggleModal} className="btn-model" type="submit"   disabled={!verfied}>
          Submit
        </button>
        {model && (
          <div className="model">
            <div onClick={toggleModal} className="oveay"></div>
            <div className="modal-content">
              <div className="sr" style={{textAlign:"center",margin:"3rem 1rem"}}>
              <img style={{width:"50px",height:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAfHwcVQOit2FPRDPkOoNl5oObY70q9s6mzkTpcJm6&s" alt=""/>
              <h4 style={{color:"red"}}>Success</h4>
              <p style={{color:"red"}}>Enquiry Sent Successfully</p></div>
              <button className="close-model" onClick={toggleModal}>
                ❌
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Details;
