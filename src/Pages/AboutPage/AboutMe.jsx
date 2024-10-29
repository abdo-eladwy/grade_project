import React from "react";
import "./AboutMe.css";
import img2 from './top-header-about-us.jpg'
export default function AboutMe() {
  return (
    <div className="col-12 ">
      <div className="OurVision col-12 position-relative">
        <img className="col-12 d-flex" src={img2} alt="" />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          {/* <h1 className="d-flex">About Us</h1> */}
        </div>
      </div>
    </div>
  );
}
