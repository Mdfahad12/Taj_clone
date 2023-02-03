import React from "react";
import "./Home.scss";
import Goglemap from "./Goglemap.js";
const Home = () => {
  return (
    <div>
      <Goglemap />
      <iframe
        style={{ margin: "2rem 5rem" }}
        width="80%"
        height="315"
        src="https://www.youtube.com/embed/6zjlaG08qyw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
   
    </div>
  );
};

export default Home;
