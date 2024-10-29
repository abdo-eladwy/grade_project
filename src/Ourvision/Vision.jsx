import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./Vision.css";

import img1 from "./personal-injury-lawyer (1).jpg";

export default function Vision() {
  return (
    <div className="col-12 pb-5" style={{background:'#0e1219'}}>
      
      <div className="OurVision col-12 position-relative">
        <img className="col-12 d-flex" src={img1} alt="" />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h1 className="d-flex">Business Litigation</h1>
          {/* <p>Providing the best legal services to meet your needs.</p> */}
        </div>
      </div>
    </div>
  );
}


