import React, { useState } from "react";
import "./OurJop.css";

export default function OurJop() {
  // حالة واحدة تتحكم في كلا الأكورديونين
  const [open, setOpen] = useState("");

  const toggleAccordion = (id) => {
    setOpen(open === id ? "" : id);  // إذا كان نفس العنصر مفتوح، أغلقه وإلا افتح العنصر الجديد
  };

  return (
    <div className="pb-5 text-light col-12" style={{ background: '#000000' }}>
      <div className="header1 col-12 container d-flex text-white ">
        <h4 className="mt-5 col-12 text-center pt-4">
          Our job is helping our clients with legal issues that they may be faced with. Also we are willing to find practical, efficient long-term solutions.
        </h4>
      </div>
      <div className="acord container d-flex justify-content-center align-items-center align-content-center col-12 pt-5">
        {/* أكورديون 1 */}
        <div className="col-12 col-md-11 col-lg-6 xx1  mb-0 pb-0">
          <div className="header2 col-12  d-flex justify-content-center  mb-0 pb-0" style={{marginTop:'0px', paddingTop:'0px'}}>
            <div className="header1 col-12 mb-0 pb-0" style={{marginTop:'0px', paddingTop:'0px'}}>
              <ul className="accordion col-12  mb-0 pb-0 " style={{marginTop:'0px', paddingTop:'0px'}}>
                <li>
                  <label
                    onClick={() => toggleAccordion("first")}
                    className={open === "first" ? "active" : "" }
                  >
                    1. Why Volenti law firm?
                  </label>
                  <div className={`content ${open === "first" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Lorem ipsum dolor sit amet, mea in tacimates electram.</p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("second")}
                    className={open === "second" ? "active" : ""}
                  >
                    2. How does it work?
                  </label>
                  <div className={`content ${open === "second" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Sale vivendum senserit an eum, ubique noster ex pro.</p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("third")}
                    className={open === "third" ? "active" : ""}
                  >
                    3. What differentiates Volenti from other lawyer services?
                  </label>
                  <div className={`content ${open === "third" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Eam ei suscipit partiendo, nam modus vocibus cotidieque eu.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* أكورديون 2 */}
        <div className="col-12 col-md-11 col-lg-6  xx2  mb-0 pb-0">
          <div className="header2 col-12  d-flex justify-content-center  mb-0 pb-0" style={{marginTop:'0px', paddingTop:'0px'}}>
            <div className="header1 col-12  mb-0 pb-0" style={{marginTop:'0px', paddingTop:'0px'}}>
              <ul className="accordion col-12  mb-0 pb-0" style={{marginTop:'0px', paddingTop:'0px'}}>
                <li>
                  <label
                    onClick={() => toggleAccordion("fourth")}
                    className={open === "fourth" ? "active" : ""}
                  >
                    1. Why Volenti law firm?
                  </label>
                  <div className={`content ${open === "fourth" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Lorem ipsum dolor sit amet, mea in tacimates electram.</p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("fifth")}
                    className={open === "fifth" ? "active" : ""}
                  >
                    2. How does it work?
                  </label>
                  <div className={`content ${open === "fifth" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Sale vivendum senserit an eum, ubique noster ex pro.</p>
                  </div>
                </li>
                <li>
                  <label
                    onClick={() => toggleAccordion("sixth")}
                    className={open === "sixth" ? "active" : ""}
                  >
                    3. What differentiates Volenti from other lawyer services?
                  </label>
                  <div className={`content ${open === "sixth" ? "open" : ""}`}>
                    <p style={{color:' #e3edf78f'}}>Eam ei suscipit partiendo, nam modus vocibus cotidieque eu.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
