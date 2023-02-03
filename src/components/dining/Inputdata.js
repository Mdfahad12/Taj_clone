import React from "react";
import "./Inputdata.scss"
const Inputdata = () => {
  return (
    <div className="int">
      <input
      style={{width:"100%"}}
        name="name"
        type="text"
        placeholder="Search resturants,cuisines..."
      />
    </div>
  );
};

export default Inputdata;
