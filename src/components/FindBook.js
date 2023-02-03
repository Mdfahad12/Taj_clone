import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const FindBook = () => {
  const [inpBook, setInpBook] = useState({
    email: "",
    membership: "",
  });
  const naviga=useNavigate();

  const getBook = (e) => {
    const { name, value } = e.target;

    setInpBook({ ...inpBook, [name]: value });
  };
  const addBook = (e) => {
    e.preventDefault();
    const getuserBook = localStorage.getItem("userreview");
    console.log(getuserBook);

    const { email, membership } = inpBook;
    if (email === "") {
      alert("email field is requred");
    } else if (!email.includes("@")) {
      alert("plz enter valid email addres");
    } else if (membership === "") {
      alert("membership field is requred");
    } else {
      if (getuserBook && getuserBook.length) {
        const userBook = JSON.parse(getuserBook);
        const userFind = userBook.filter((el, k) => {
          return el.email === email && el.membership === membership;
        });

        if (userFind.length == 0) {
          alert("invalid Details");
        } else {
          console.log("aabcssdsk");

          localStorage.setItem("userreview", JSON.stringify(userFind));
          naviga("/FindReview",{state:{data:inpBook}})
        }
      }
    }
  };

  return (
    <div>
      <div style={{ margin: "4rem 35rem" }}>
        <div>
          <img
            style={{ position: "relative", left: "-90px" }}
            src="https://tse1.mm.bing.net/th?id=OIP.0Hd_7QPnAvDjg39E2OmCWwHaD4&pid=Api&P=0"
            alt=""
          />
        </div>
        <div>
          <label className="fna" for="email">
            Email
          </label>
        </div>
        <div style={{ width: "500px", boxSizing: "border-box" }}>
          <input
            style={{ width: "300px" }}
            type="email"
            id="email"
            onChange={getBook}
            name="email"
            placeholder="email"
          />
        </div>
        <div style={{ margin: "2rem 0rem" }}>
          <div>
            <label className="fna" for="membership">
              Membership number
            </label>
          </div>
          <div style={{ width: "500px", boxSizing: "border-box" }}>
            <input
              style={{ width: "300px" }}
              type="name"
              id="email"
              onChange={getBook}
              name="membership"
              placeholder="membership number"
            />
          </div>
        </div>
      
        <div
          style={{ margin: "2rem 7rem" }}
          type="submit"
          onClick={addBook}
          value="Submit">
     {" "}
     <img
       style={{ width: "70px" }}
       src="https://tse2.mm.bing.net/th?id=OIP.ZA8NolmW2c9NjAStJHTtAwHaCc&pid=Api&P=0"
       alt=""
     />
     </div>
  
        
      </div>
    </div>
  );
};

export default FindBook;
