import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inpVal, setInpVal] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setInpVal({ ...inpVal, [name]: value });
  };
  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpVal;
    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home");
        }
      }
    }
  };
  return (
    <>
      <div style={{ width: "450px", margin: "3rem 32rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDXwxl3CI0u9Bwy-tkjM9cIbiLiIa1QxPJQ&usqp=CAU"
          alt=""
        />
      </div>
      <div style={{ margin: "1rem 16rem", width: "100%", display: "flex" }}>
        <div>
          <div>
            <div>
              <label className="fna" for="email">Email</label>
            </div>
            <div style={{ width: "500px", boxSizing: "border-box" }}>
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
            <label className="fna" for="password">Password</label>
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
          <br />
          <div className="fna">
            {" "}
            i have not any account{" "}
            <Link to="/SignIn">
              <img
                style={{ width: "50px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UAGpVL4a5JtNIuN_W7nZOxNdwE2vzaO4dQ&usqp=CAU"
                alt=""
              />
            </Link>
          </div>

          <div>
            <div type="submit" onClick={addData} value="Submit">
              <img
                style={{ width: "70px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjH3TXHIFe5UR3590DqAVa6GenxieHbRPCQ&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
        <div style={{ margin: "0rem 2rem" }}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
