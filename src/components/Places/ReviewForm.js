import React from "react";
import { useState } from "react";

const ReviewForm = () => {
    const[review,setReview]=useState({
        title:"",
        fname:"",
        lname:"",
        email:"",
        number:"",
        membership:"",
        Gst:"",
        request:"",
        
    })
    const[book,setBook]=useState([])
    const revData =(e)=>{
        const {name,value}=e.target;
        setReview({...review,[name]:value})
    }
    const getReview =(e)=>{
        e.preventDefault();
    
          console.log("data added succesfully");
       
          localStorage.setItem("userreview", JSON.stringify([...book, review]));
        
    }
   


  return (
    <div>
      <div className="card" style={{ width: "80%", height: "900px" }}>
        <h4>Guest details</h4>
        <form>
          <div style={{ display: "flex" }}>
            <div>
              <label for="title">Title</label>
              <br />
              <select type="title" name="title" onChange={revData} style={{ margin: "1rem 0rem" }}>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Ms.</option>
                <option>Miss.</option>
                <option>Dr.</option>
                <option>Prof.</option>
              </select>
            </div>
            <div style={{ margin: "0rem 7rem " }}>
              <label for="fname"> first Name</label>
              <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="name"
                name="fname"
              />
            </div>
            <div>
              <label for="lname"> Last Name</label>
              <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="name"
                name="lname"
              />
            </div>
          </div>
          <div style={{ display: "flex", margin: "4rem 1rem" }}>
            <div>
              <label for="email">Email*</label>
              <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="email"
                name="email"
              />
            </div>
            <div style={{ margin: "0rem 9rem" }}>
              <label for="number">Phone Number*</label>
              <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="number"
                name="number"
                required
              />
            </div>
          </div>
          <div style={{ display: "flex", margin: "4rem 1rem" }}>
            <div>
              <label for="Membership">Membership Number</label>
              <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="name"
                name="membership"
                required
              />
            </div>
            <div style={{ margin: "0rem 9rem" }}>
              <label for="GSTNumber">GST Number</label> <br />
              <input
               onChange={revData}
                style={{ width: "300px", margin: "1rem 0rem" }}
                type="name"
                name="Gst"
                required
              />
            </div>
          </div>
          <div>
            <label for="Request">Special Requests</label>
            <br />
            <textarea
             onChange={revData}
              style={{ width: "600px", margin: "1rem 0rem" }}
              rows="4"
              cols="50"
              name="request"
              form="usrform"
            />
          </div>
          <div style={{ display: "flex" }}>
            <input  type="checkbox" />
            <p>I have read and understood the Privacy Policy.*</p>
          </div>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <p>I have read and agree to the Terms & Conditions.*</p>
          </div>
        </form>
      </div>
      <h4>Payment details</h4>
      <div className="card" style={{ width: "80%" }}>
        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <p>Pay at Hotel*</p>
          <div style={{ display: "flex", margin: "0rem 2rem" }}>
            <input type="checkbox" />
            <p>Pay online*</p>
          </div>
        </div>
        <button onClick={getReview} style={{ width: "180px", margin: "2rem 5rem" }}>Confirm</button>
      </div>
    </div>
  );
};

export default ReviewForm;
