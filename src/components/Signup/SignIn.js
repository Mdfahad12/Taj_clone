import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './SignIn.scss'
const SignIn = () => {
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const history = useNavigate();

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setInpVal({ ...inpVal, [name]: value });
  };
  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inpVal;

    if (name === "") {
      alert(" name field is requred!");
    } else if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (date === "") {
      alert("date field is requred");
    } else if (password === "") {
      alert("password field is requred");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      console.log("data added succesfully");
      history("/Login");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpVal]));
    }
  };
  return (
    <>
      <div>
        <img
          style={{ width: "450px",margin:"3rem 32rem" }}
          src="https://images.squarespace-cdn.com/content/v1/608084852adea1196bfe58fd/20d1cbcc-5af5-4348-a964-76d7db5498f1/signup-transparent-cropped.png"
          alt=""
        />
      </div>
      <div style={{margin:"1rem 16rem",width:'100%',display:'flex'}}>
      <div className="frm">
        <div>
          <div>
            <label className="fna" for="fname">First Name</label>
          </div>
          <div style={{width:"500px",boxSizing:"border-box"}}>
            <input
              type="name"
              id="name"
              name="name"
              onChange={getData}
              placeholder="Your name.."
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <label className="fna" for="email">Email</label>
          </div>
          <div >
            <input
            style={{width:"300px"}}
              type="email"
              id="email"
              onChange={getData}
              name="email"
              placeholder="email"
            />
          </div>
        </div>
        <br />
        <div>
          <label  className="fna" for="date">Date</label>
        </div>
        <div>
          <input
            type="date"
            id="date"
            onChange={getData}
            name="date"
            placeholder="date"
          />
        </div>
        <br />
        <div>
          <label  className="fna" for="password">Password</label>
        </div>
     
        <div>
          <input
            type="password"
            id="password"
            onChange={getData}
            name="password"
            placeholder="password"
          />
        </div>

        <div className="fna">
          {" "}
          Already have an account{" "}
          <Link to="/Login" >
            <img
              style={{ width: "70px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLzW00FNUbQ2lCMkc0uIThgqMJl7ds9cDbsg&usqp=CAU"
              alt=""
            />
          </Link>
        </div>

        <div>
          <div type="submit" onClick={addData} value="Submit" ><img style={{width:"100px"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslvT1dGFuZ2hVA-g8zyVV4PLwL1q8MIbBkA&usqp=CAU" alt="" /></div>
        </div>
      </div>
      <div style={{margin:"0rem 2rem",}}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
          alt=""
        />
      </div></div>
    </>
  );
};

export default SignIn;
