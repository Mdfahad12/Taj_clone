import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import ReviewForm from "./ReviewForm";
const ReviewBhopal = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      console.log(load);
    }, 3000);
  }, []);

  return (
    <>
      {load ? (
        <div style={{ textAlign: "center", margin: "5rem 0rem" }}>
          <ClipLoader color={"#D0021B"} loading={load} size={130} />
        </div>
      ) : (
          <ReviewForm/>
      )}
    </>
  );
};

export default ReviewBhopal;
