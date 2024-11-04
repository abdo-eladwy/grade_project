import React from "react";
import "./OurProcess.css";
import img from "./case-1.jpg";
import img2 from "./case-s-800x550.jpg";
import img3 from "./case-2.jpg";

export default function OurProcess() {
  return (
    <div  style={{background:'#0e1219'}}>
      <div className="containerr col-12 d-flex flex-column justify-content-center text-center text-white pt-4">
        <h1 >Our Process</h1>
        <h5 className="hh5 pb-3">Let us guide you</h5>
      </div>
      <div className="containerr col-12 mb-5 mt-5 pb-3 container d-flex justify-content-between align-content-center align-items-center text-white">
        <div className=" part1 col-lg-6 col-md-12 col-sm-12">
          <h5 className="hh5 pb-2">STEP 1</h5>
          <h1 className="pb-4">Listen Your Case</h1>
          <p>
            Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
            inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
            corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
            mei veri dolorum luptatum, dicta legimus eloquentia.
          </p>
        </div>
        <div className=" part2 col-lg-6 col-md-12 col-sm-12 ">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="prtt containerr col-12 mb-5 mt-5 pb-5 container d-flex justify-content-center align-content-center align-items-center text-white">
        <div className=" part3 col-lg-6 col-md-12 col-sm-12 ">
          <img src={img2} alt="" />
        </div>
        <div className=" part4 col-lg-6 col-md-12 col-sm-12">
          <h5 className="hh5 pb-2">STEP 2</h5>
          <h1 className="pb-4">Approach and Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
            inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
            corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
            mei veri dolorum luptatum, dicta legimus eloquen
          </p>
        </div>
      </div>
      <div className="containerr col-12  mt-5 pb-5 container d-flex  justify-content-center align-content-center align-items-center text-white">
        <div className=" part5 col-lg-6 col-md-12 col-sm-12 pb-5">
          <h5 className="hh5 pb-2">STEP 3</h5>
          <h1 className="pb-4">Win the Case</h1>
          <p>
            Lorem ipsum dolor sit amet, sed no rebum iudico pericula. Nisl
            inimicus interpretaris duo ei. Vix eu nullam malorum alterum. Ad mea
            corrumpit imperdiet liberavisse, no nam sint quidam definiebas. Id
            mei veri dolorum luptatum, dicta legimus eloquentia
          </p>
        </div>
        <div className=" part6 col-lg-6 col-md-12 col-sm-12 pb-5">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
