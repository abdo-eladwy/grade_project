import React from "react";
import "./Contactus.css";
import img2 from './contact-us-page.jpg'
export default function Contactus() {
  return (
    <div className="col-12">
      <div className="OurVision col-12 position-relative">
        <img className="col-12 d-flex" src={img2} alt="" />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h1 className="d-flex">Contact Us</h1>
          <span className="text-light"> Contact us for more information</span>
        </div>
      </div>
    </div>
  );
}
