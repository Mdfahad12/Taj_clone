import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import "./Home.scss";
import React from "react";
import { useMemo } from "react";
import CityCard from "./CityCard";

const Goglemap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  if (!isLoaded) return <div>loading</div>;
  return (
    <>
      <div className="in">
        <div style={{ display: "flex", gap: "12px" }}>
          <input style={{width:"500px"}} type="text" name="name" placeholder="search..." />

        <span style={{margin:"0rem 3rem",position:"relative",left:"90px"}}>

          <label for="country" className="" style={{ margin: "1rem 0.4rem" }}>
            country:
          </label>
          <select id="country" name="country" style={{ height: "30px", margin: "1rem 1rem" }}>
            <option>india</option>
            <option>Dubai</option>
            <option>france</option>
            <option>usa</option>
          </select>
        </span>
          <div className="vra"></div>
          <div style={{ margin: "1rem 1rem",position:"relative",left:"90px" }}>
            <label for="hotels" className="" style={{margin:"0rem 2rem"}}>
              filter by:
            </label>
            <select id="country">
              <option>Residence</option>
              <option>City hotel</option>
              <option>Palaces</option>
              <option>Hill Resort</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{display:"flex"}}>
      <CityCard/>
      <div className="card" style={{ position: "relative", left: "10px" }}>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerStyle={{ width: "570px", height: "300px" }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div></div>
    </>
  );
};

export default Goglemap;
